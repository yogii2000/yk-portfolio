import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

export const DefaultHeader = () => {
  const [toggle,setToggle] = useState(false)
  const links = [
    {
      id:1,
      name:"Home"
    },
    {
      id:2,
      name:"About"
    },
    {
      id:3,
      name:"Portfolio"
    },
    {
      id:4,
      name:"Experience"
    },
    {
      id:5,
      name:"Contact"
    }
  ]

  return (
    <>
    <nav className="bg-black h-16 w-full flex fixed items-center justify-between px-4">
      <div>
      <h2 className="text-white font-signature text-4xl">Yogesh</h2>
      </div>
      <div>
        <ul className="md:flex hidden">
          {links.map(({id,name})=>{
            return <>
              <li key={id} className="mx-3 text-gray-300 cursor-pointer font-medium  hover:scale-105 duration-200">
           <Link to={name} smooth duration={500} className="tracking-wider">{name}</Link>
            </li>
            </>
          })}
        </ul>
      </div>
      <div onClick={()=>{setToggle(!toggle)}} className="cursor-pointer md:hidden z-50">
        {toggle ? <FaTimes size={30} className="text-white"/> : <FaBars size={30} className="text-white"/>}
      </div>
    {toggle && <ul className={`flex flex-col h-screen md:hidden justify-center items-center bg-gradient-to-b from-black to-gray-800 gap-4 w-full absolute top-0 transition-transform duration-300 ${
          toggle ? "right-0" : "-right-full"
        }`}>
        {links.map(({id,name})=>{
          return <>
          <li key={id} className="mx-3 text-gray-400 cursor-pointer font-medium hover:scale-105 duration-200">
           <Link onClick={()=>setToggle(false)} to={name} smooth duration={500} className="text-3xl">{name}</Link>
            </li>
          </>
        })}
      </ul>}
    </nav>
    </>
  )
}
