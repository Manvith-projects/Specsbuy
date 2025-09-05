import React from 'react';

const FramesForLife = () => {
    // Data array updated to include images and a special flag for styling
    const frames = [
        { 
            name: 'EYEGLASSES', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Eyeglasses' 
        },
        { 
            name: 'SUNGLASSES', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Sunglasses' 
        },
        { 
            name: 'BLUE LIGHT', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Blue+Light' 
        },
        { 
            name: 'SPORTS', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Sports' 
        },
        { 
            name: 'TRANSITIONS®', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Transitions' 
        },
        { 
            name: 'EYEQLENZ™', 
            image: 'https://dummyimage.com/250x250/000/fff.png&text=Eyeqlenz' 
        },
    ];

    return (
        <div className='p-6 md:p-10 font-sans bg-white'>
            {/* Header Section */}
            <div className='flex justify-between items-start mb-10'>
                <div>
                    <h2 className='text-3xl md:text-4xl font-extrabold mb-1 tracking-wider text-black'>
                        FRAMES FOR YOUR LIFE
                    </h2>
                    <p className='text-gray-600'>
                        Choose styles for sun, screens, and everything in between.
                    </p>
                </div>
                <button className='hidden sm:block bg-black text-white font-semibold py-2 px-6 rounded-full whitespace-nowrap hover:bg-gray-800 transition-colors'>
                    Shop all
                </button>
            </div>

            {/* Frames Grid Section */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center'>
                {frames.map((frame) => (
                    <div key={frame.name} className='flex flex-col items-center gap-4 cursor-pointer group'>
                        {/* Image container with yellow circle */}
                        
                            <img 
                                src={frame.image} 
                                alt={frame.name} 
                                className='relative z-10 w-full h-auto object-contain drop-shadow-lg' 
                            />
       
                        
                        {/* Name */}
                        <h3 className={`font-bold text-center tracking-wider text-xs md:text-sm
                        }`}>
                            {frame.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FramesForLife;