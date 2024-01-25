import React from 'react'
import { DiAndroid, DiApple, DiHtml5, DiJavascript, DiJavascript1, DiMongodb, DiPython, DiReact } from "react-icons/di";
const Technology = () => {
  return (

    <div  >

      <div>
        <h1 className='text-center font-bold text-5xl gap space-y-5'>Technology I use</h1>
      </div>
      <br />

      <div className='grid grid-cols-4 place-items-center'>
        <DiAndroid className='animate-bounce' color='green' size={150} />
        <DiApple className='animate-pulse' size={150} />
        <DiJavascript1 className='hover:scale-125 hover:text-orange-500' size={150} />
        <DiMongodb className='animate-ping' size={150} />
        <DiHtml5 className='hover:scale-125' color='orange' size={150} />
        <DiReact className='animate-spin' color='blue' size={150} />
        <DiPython className='hover:scale-125 transition duration-300 ease-in-out' color='purple' size={150} />


      </div>
      <button className='bg-pink-300 '>ddd</button>


    </div>
  )
}

export default Technology
