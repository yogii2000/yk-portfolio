
import { Element } from "react-scroll"
const About = () => {
  return (
    <Element name="About">
    <div className="bg-gradient-to-b from-black via-black to-gray-800 md:h-screen w-full ">
      <div className="max-w-screen-xl py-12 h-full sm:px-10 px-6 mx-auto flex justify-center items-center">
        <div>
        <h2 className="text-white sm:text-6xl text-4xl font-semibold border-b-4 inline border-gray-400">About</h2>
        <p className="text-white mt-10 text-xl">Hi there! I’m Yogesh Kumar, a passionate frontend developer with a love for turning complex problems into elegant, user-friendly solutions. With a background in [briefly mention relevant background or education], I specialize in creating responsive, accessible, and visually engaging websites and web applications.</p>
        <p className="text-white text-xl mt-5">Frontend development allows me to combine my technical skills with my creative flair. I enjoy the challenge of solving design problems and finding innovative ways to make the web more accessible and enjoyable for everyone.</p>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default About
