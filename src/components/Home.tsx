import { FaArrowRightLong } from "react-icons/fa6";
import { Element,Link } from "react-scroll";
const home = () => {
  return (
  <>
  <Element name="Home">
  <div  className="bg-gradient-to-b from-black via-black to-gray-800 sm:h-screen w-full">
  <div className="max-w-screen-xl py-14 sm:px-10 px-6  gap-4 h-full mx-auto flex md:flex-row flex-col justify-center items-center">
    <div className="md:w-1/2">
    <h2 className="text-white md:text-7xl text-4xl mt-10 font-bold">I'm a Frontend Developer</h2>
    <p className="text-gray-400 font-semibold py-4 max-w-lg">I have over 2 years of experience. I specialize in building dynamic Web Applications and User Friendly Interfaces. My techstack includes React JS, Next JS, Tailwind, Redux etc.</p>
    <Link to="Portfolio" smooth duration={500} className="px-4 py-2 group rounded-md bg-gradient-to-r flex w-fit items-center gap-2 from-cyan-300 to-blue-500 text-white">Portfolio <span><FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"/></span> </Link>
    </div>
    <div className="md:w-1/2 ">
      <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg?size=626&ext=jpg" className="rounded-md mx-auto md:h-96" alt="my profile" />
    </div>
  </div>
  </div>
  </Element>
    </>
  )
}

export default home
