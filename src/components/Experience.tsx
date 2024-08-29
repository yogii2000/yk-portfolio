import html from '../assets/html.png'
import css from '../assets/css.svg'
import js from '../assets/js.png'
import react from '../assets/react.svg'
import next from '../assets/next.png'
import redux from '../assets/redux.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import { Element } from 'react-scroll'

const Experience = () => {
    const logo=[
        {id:1,src:html,title:'HTML',style:'shadow-orange-500',imgstyle:''},
        {id:2,src:css,title:'CSS',style:'shadow-blue-500',imgstyle:""},
        {id:3,src:js,title:'JavaScript',style:'shadow-yellow-500',imgstyle:""},
        {id:4,src:react,title:'React JS',style:'shadow-blue-600',imgstyle:""},
        {id:5,src:next,title:'Next JS',style:'shadow-white',imgstyle:""},
        {id:6,src:tailwind,title:'Tailwind',style:'shadow-sky-500',imgstyle:""},
        {id:7,src:redux,title:'Redux',style:'shadow-orange-500',imgstyle:""},
        {id:8,src:github,title:'GitHub',style:'shadow-gray-400',imgstyle:"bg-white rounded-full"},
    ]
  return (
    <Element name='Experience'>
    <div className="bg-gradient-to-b from-black via-black to-gray-800 w-full ">
      <div className="max-w-screen-xl py-16 sm:px-10 px-6 h-full mx-auto ">
          <div>
          <h2 className="text-white sm:text-6xl text-4xl  font-semibold border-b-4 inline border-gray-400">Experience</h2>
            <p className="my-6 text-white">These are the technologies I've worked with.</p>
          </div>
          <div className='grid grid-cols-2 gap-10 md:grid-cols-3'>
            {logo.map(({id,src,title,style,imgstyle})=>{
                return <>
                    <div key={id}  className={`shadow-md w-full  hover:scale-105 duration-300 text-center py-5 ${style}`}>
                       <img src={src} alt="" className={`mx-auto  w-20 ${imgstyle}`} />
                       <h3 className='text-white '>{title}</h3>
                    </div>
                </>
            })}
          </div>
      </div>
    </div>
    </Element>
  )
}

export default Experience
