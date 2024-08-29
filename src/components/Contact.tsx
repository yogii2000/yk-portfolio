import { Element } from "react-scroll"
const Contact = () => {
  return (
    <Element name="Contact">
          <div className="bg-gradient-to-b from-black via-black to-gray-800 md:h-screen w-full ">
      <div className="max-w-screen-xl h-full  sm:px-10 px-6 mx-auto flex items-center">
        <div>
        <div className="pt-12">
        <h2 className="text-white sm:text-6xl text-4xl  font-semibold border-b-4 inline border-gray-400">Contact</h2>
       <p className="text-white my-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="max-w-sm ">
  <form action="https://getform.io/f/bmdpwdda" method="POST" className=" shadow-md rounded  pt-6 pb-8 mt-4">
    <div className="mb-4">
      <input name="name" className="shadow appearance-none text-white border rounded w-full py-2 px-3  leading-tight focus:outline-none bg-black focus:shadow-outline"  type="text" placeholder="Enter Your Name"/>
    </div>
    <div className="mb-4">
      <input name="gmail" className="shadow appearance-none border bg-black border-white rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter Your Email"/>
    </div>
    <div className="mb-6">
        <textarea name="message" rows={5} className="shadow resize-none appearance-none border bg-black border-white rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Your Message"></textarea>
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-gradient-to-b from-cyan-500 to-blue-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Let's Talk
      </button>
    </div>
  </form>
</div>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default Contact
