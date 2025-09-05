import React from 'react'

const ShopByFace = () => {
const faceShapes = [
    { name: 'Round' },
    { name: 'Oval' },
    { name: 'Heart' },
    { name: 'Diamond' },
    { name: 'Square' },
];

return (
    <div>
        <div className='p-10 bg-[#f5f5f5]'>
            <h2 className='text-4xl font-bold mb-1'>Shop By Face Shape</h2>
            <p className='mb-8' style={{ color: '#090B0B' }}>Flatter your features and brighten your unique look.</p>
            <div className='flex justify-center gap-10'>
                {faceShapes.map((shape) => (
                    <div className='relative' key={shape.name}>
                        <div className='w-[250px] h-[250px] bg-[#3d7675] rounded-lg'></div>
                        <h3 className='absolute text-2xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white'>
                            {shape.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default ShopByFace