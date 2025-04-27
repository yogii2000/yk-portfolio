
import lookplex from '../assets/lookplex.jpg'
import smartcare from '../assets/smartcare.jpg'
import wooAdenture from '../assets/wooAdventure.jpg'
import { Element } from 'react-scroll'
const Portfolio = () => {
  const images = [
    {id:1,src:lookplex,Link:'https://lookplex.com'},
    {id:3,src:smartcare,Link:'https://smartcare.health'},
    {id:5,src:wooAdenture,Link:'https://wooadventures.com'},
  ]
  return (
    <Element name='Portfolio'>
    <div className="">
      <div className="max-w-screen-lg py-16 h-full sm:px-10 px-6 mx-auto flex justify-center items-center">
        <div>
        <div>
          <h2 className="text-white sm:text-6xl text-4xl font-semibold border-b-4 inline border-gray-400">Portfolio</h2>
          <p className="text-white py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 mt-6 md:grid-cols-3 gap-8">
          {
            images.map(({id,src,Link})=>{
              return (
                <div key={id} className="shadow-md shadow-gray-600 rounded-md overflow-hidden">
                <img src={src} className="hover:scale-105 duration-200  rounded-lg object-cover w-full h-48" alt="" />
              <div className="flex justify-around py-3">
                <button className="text-white bg-black"><a href={Link}>Demo</a></button>
              </div>
              </div>
              )
            })
          }

        </div>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default Portfolio
