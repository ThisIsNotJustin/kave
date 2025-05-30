import { IoArrowUp } from "react-icons/io5";

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 pt-12 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
          <div className="flex space-x-1" >
          <span>&copy;</span>
          <span >{new Date().getFullYear()}</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">Codera Design</span>
        </div>
      </div>
      <div className="absolute right-10 pb-4 md:mt-0 opacity-40 hover:opacity-60 animate-pulse">
            <button
              onClick={scrollUp}
              className="flex items-center transition justify-center text-heading-3 p-5 overflow-hidden w-[80px] h-[80px] bg-green-900 hover:green-950 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full group opacity-70 lg:opacity-100 hover:duration-300 duration-300"
            >
              <IoArrowUp />
            </button>
          </div>
    </footer>
  );
}
