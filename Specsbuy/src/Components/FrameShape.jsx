import React from 'react'

const FrameShape = () => {
  return (
    <div>
            <div className="h-16 flex justify-between items-center">
                    <h2 className="text-4xl ml-15 font-bold">SHOP BY FRAME SHAPE</h2>
                    <button className="bg-[#000] text-white px-4 py-2 rounded-md mr-10">View All</button>
                    
                </div>

                <div className="grid grid-cols-6  my-5 px-30">
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Rectangle</h3></div>
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Square</h3></div>
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Round</h3></div>
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Oval</h3></div>
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Cat Eye</h3></div>
                    <div className='flex flex-col items-center'><div className="w-[200px] h-[200px] bg-[#C1DCDC] rounded-md"></div><h3 className='text-2xl font-semibold'>Aviator</h3></div>
            </div>    
        
            
    
    </div>
  )
}

export default FrameShape