import { FaGithub,FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const links = [
        {id:1,child:(
            <><span className="lg:block hidden">LinkedIn</span> <FaLinkedin size={25}/></>
        ),
        href:"https://www.linkedin.com/in/yogesh-kumar-4bbb1b225/"
    },
        {id:2,child:(
            <><span className="lg:block hidden">GitHub</span> <FaGithub size={25}/></>
        ),
        href:"https://github.com/yogii2000"
    },
        {id:3,child:(
            <><span className="lg:block hidden">Mail</span> <HiOutlineMail size={25}/></>
        ),
        href:"mailto:yogeshsharma9057@gmail.com"
    },
        {id:4,child:(
            <><span className="lg:block hidden">Resume</span> <BsFillPersonLinesFill size={25}/></>
        ),
        href:"/YOGESH-KUMAR.pdf",
        download:true
    },
    ]
  return (
    <div className="fixed lg:left-0 bottom-0 flex lg:flex lg:top-[35%] transition-translate w-full  rounded-md">
        <ul className=" flex lg:flex-col flex-row justify-between lg:justify-start w-full">
            {links.map((val)=>{
                return <>
                             <li key={val.id} className="bg-gray-500 hover:rounded-md justify-between items-center lg:ml-[-100px] lg:hover:ml-[-5px] duration-300 lg:w-36 w-full flex"><a href={val.href} download={val?.download} target="_blank" className="flex  w-full items-center lg:justify-between justify-center gap-3 p-3 lg:p-2  text-white">{val.child}</a></li>
                </>
            })}
        </ul>
      
    </div>
  )
}

export default SocialLinks
