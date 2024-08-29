import { FaGithub,FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const links = [
        {id:1,child:(
            <>LinkedIn <FaLinkedin size={25}/></>
        ),
        href:"https://www.linkedin.com/in/yogesh-kumar-4bbb1b225/"
    },
        {id:2,child:(
            <>GitHub <FaGithub size={25}/></>
        ),
        href:"https://github.com/yogii2000"
    },
        {id:3,child:(
            <>Mail <HiOutlineMail size={25}/></>
        ),
        href:"mailto:yogeshsharma9057@gmail.com"
    },
        {id:4,child:(
            <>Resume <BsFillPersonLinesFill size={25}/></>
        ),
        href:"/YOGESH-KUMAR.pdf",
        download:true
    },
    ]
  return (
    <div className="fixed left-0 hidden xl:flex top-[35%] transition-translate  rounded-md">
        <ul className="p-3 ">
            {links.map((val)=>{
                return <>
                             <li key={val.id} className="bg-gray-500 hover:rounded-md justify-between items-center ml-[-110px] hover:ml-[-15px] duration-300 w-36 flex"><a href={val.href} download={val?.download} target="_blank" className="flex  w-full items-center gap-3 p-2 justify-between text-white">{val.child}</a></li>
                </>
            })}
        </ul>
      
    </div>
  )
}

export default SocialLinks
