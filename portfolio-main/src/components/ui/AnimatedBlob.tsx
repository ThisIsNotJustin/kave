import { useEffect, useRef } from 'react';
import * as blobs2Animate from 'blobs/v2/animate';
import blobs from 'blobs';

interface AnimatedBlobProps {
  intervalDuration?: number;
  size?: string;
  blobOptions?: {
    extraPoints?: number;
    randomness?: number;
  };
  colors?: [string, string];
}

const AnimatedBlob = ({
  intervalDuration = 5000,
  size = '50vw',
  blobOptions = { extraPoints: 0, randomness: 4 },
  colors = ['#ec576b', '#8a2be2'],
}: AnimatedBlobProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<ReturnType<typeof blobs2Animate.canvasPath>>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const requestRef = useRef<number>();

  const parseSize = (size: string): number => {
    if (size.endsWith('vw')) {
      return (parseFloat(size) / 100) * window.innerWidth;
    } else if (size.endsWith('vh')) {
      return (parseFloat(size) / 100) * window.innerHeight;
    } else if (size.endsWith('%')) {
      const parent = canvasRef.current?.parentElement;
      if (parent) {
        return (parseFloat(size) / 100) * Math.min(parent.offsetWidth, parent.offsetHeight);
      }
    }
    return parseFloat(size);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const canvasSize = parseSize(size);
    canvasRef.current.width = canvasSize;
    canvasRef.current.height = canvasSize;

    const blobSize = canvasSize;
    const center = (canvasSize - blobSize) / 2;
    
    // Generate initial blob options
    const generateBlobOptions = () => ({
      seed: Math.random(),
      size: blobSize,
      ...blobOptions,
    });

    const gradient = ctx.createLinearGradient(0, 0, canvasSize, canvasSize);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);

    // Start initial animation
    animationRef.current = blobs2Animate.canvasPath();
    const initialBlobOptions = generateBlobOptions();
    blobs2Animate.wigglePreset(
      animationRef.current,
      initialBlobOptions,
      { offsetX: center, offsetY: center },
      { speed: 1.5, initialTransition: 1000 }
    );

    // Render loop
    const render = () => {
      if (!ctx || !animationRef.current) return;
      
      ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
      ctx.fillStyle = gradient;
      ctx.fill(animationRef.current.renderFrame());
      requestRef.current = requestAnimationFrame(render);
    };
    requestRef.current = requestAnimationFrame(render);

    // Set up interval transitions
    intervalRef.current = setInterval(() => {
      const newBlobOptions = generateBlobOptions();
      
      animationRef.current?.transition({
        duration: 2000,
        timingFunction: 'ease',
        blobOptions: newBlobOptions,
        canvasOptions: { offsetX: center, offsetY: center },
        callback: () => {
          // Reapply wiggle after transition
          blobs2Animate.wigglePreset(
            animationRef.current,
            newBlobOptions,
            { offsetX: center, offsetY: center },
            { speed: 1.5 }
          );
        }
      });
    }, intervalDuration);

    // Cleanup
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      animationRef.current?.pause();
    };
  }, [size, intervalDuration, blobOptions, colors]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        background: 'transparent',
      }}
    />
  );
};

export default AnimatedBlob;