import particlesConfigLight from '../../assets/background/particlesjs-config.json';
import particlesConfigDark from '../../assets/background/particlesjs-config-dark.json';

export const combinedParticlesConfig = {
    ...particlesConfigLight,
    particles: {
        ...particlesConfigLight.particles,
        number: {
            value: particlesConfigLight.particles.number.value + particlesConfigDark.particles.number.value,
            density: particlesConfigLight.particles.number.density,
        },
        color: {
            value: [particlesConfigLight.particles.color.value, particlesConfigDark.particles.color.value],
        },
        shape: particlesConfigLight.particles.shape,
        opacity: particlesConfigLight.particles.opacity,
        size: particlesConfigLight.particles.size,
        line_linked: particlesConfigLight.particles.line_linked,
        move: particlesConfigLight.particles.move,
    },
    interactivity: particlesConfigLight.interactivity,
    retina_detect: particlesConfigLight.retina_detect,
};