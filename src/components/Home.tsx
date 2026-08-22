import { FaArrowRightLong } from "react-icons/fa6";
import { Element,Link } from "react-scroll";
const home = () => {
  return (
  <>
  <Element name="Home">
  <div  className=" sm:h-screen w-full">
  <div className="max-w-screen-lg py-14 sm:px-10 px-6  gap-4 h-full mx-auto flex md:flex-row flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center">
    <h2 className="text-white md:text-7xl text-4xl text-center mt-10 ">I'm a Frontend Developer</h2>
    <p className="text-gray-400 text-center py-4">I have 4 years of experience. I specialize in building dynamic Web Applications and User Friendly Interfaces. My techstack includes React JS, Next JS, Tailwind, Redux etc.</p>
    <Link to="Portfolio" smooth duration={500} className="px-4 py-2 group rounded-md bg-gradient-to-r flex w-fit items-center gap-2 from-cyan-300 to-blue-500 text-white">Portfolio <span><FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"/></span> </Link>
    </div>
  </div>
  </div>
  </Element>
    </>
  )
}

export default home
