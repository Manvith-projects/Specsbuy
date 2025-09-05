import React from 'react'

const ShopByFace = () => {
  return (
    <div>
        <div className='p-10 bg-[#f5f5f5]'>
            <h2 className='text-4xl font-bold mb-8'>Shop By Face Shape</h2>
            <div className='flex justify-center gap-10'>
                <div className='relative'>
                    <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                    <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>Round</h3>
                </div>
                 <div className='relative'>
                    <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                    <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>Oval</h3>
                </div>
                 <div className='relative'>
                    <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                    <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>Heart</h3>
                </div>
                 <div className='relative'>
                    <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                    <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>Diamond</h3>
                </div>
                 <div className='relative'>
                    <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                    <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>Square</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopByFace