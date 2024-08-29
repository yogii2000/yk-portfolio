
import lookplex from '../assets/lookplex.jpg'
import smartcare from '../assets/smartcare.jpg'
import wooAdenture from '../assets/wooAdventure.jpg'
import { Element } from 'react-scroll'
const Portfolio = () => {
  const images = [
    {id:1,src:lookplex},
    {id:1,src:"https://www.datametricks.com/website-image/project-img4.svg"},
    {id:1,src:smartcare},
    {id:1,src:"https://www.datametricks.com/website-image/smartclinicimg1.svg"},
    {id:1,src:wooAdenture},
  ]
  return (
    <Element name='Portfolio'>
    <div className="bg-gradient-to-b  from-black via-black to-gray-800">
      <div className="max-w-screen-xl py-16 h-full sm:px-10 px-6 mx-auto flex justify-center items-center">
        <div>
        <div>
          <h2 className="text-white sm:text-6xl text-4xl font-semibold border-b-4 inline border-gray-400">Portfolio</h2>
          <p className="text-white py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 mt-6 md:grid-cols-3 gap-8">
          {
            images.map(({id,src})=>{
              return (
                <div key={id} className="shadow-md shadow-gray-600 rounded-md overflow-hidden">
                <img src={src} className="hover:scale-105 duration-200  rounded-lg object-cover w-full h-48" alt="" />
              <div className="flex justify-around py-4">
                <button className="text-white">Demo</button>
                <button className="text-white">Code</button>
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
