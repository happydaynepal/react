import React from 'react'

const Address = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <h1 className='font-bold text-5xl'>Who am I ?</h1>


      <div className='h-[350px] w-[350px] bg-black rounded-full border-[5px] border-green-700 flex justify-center items-center'>
        <div>
          <h1 className='text-white'>Name: Demo Shrestha</h1>
          <h1 className='text-white'>Email: Demo@gmail.com</h1>
          <h1 className='text-white'>Tel: 980 000 0000</h1>
          <h1 className='text-white'>Age: 40</h1>
          <h1 className='text-white'>Experience: Java, Python, React</h1>
        </div>

      </div>


    </div>
  )
}

export default Address
