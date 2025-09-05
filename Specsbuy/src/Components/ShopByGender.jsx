import React from 'react';

const ShopByGender = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold ml-10 mb-8">SHOP BY GENDER</h2>
      <div className="flex justify-center gap-20 items-center">
        {/* Men's Card */}
        <div className="relative">
          <div className="w-[500px] h-[600px] bg-[#3d7675] rounded-lg"></div>
          <h3 className="absolute text-3xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white">
            Men
          </h3>
        </div>

        {/* Women's Card */}
        <div className="relative">
          <div className="w-[500px] h-[600px] bg-[#3d7675] rounded-lg"></div>
          <h3 className="absolute text-3xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white">
            Women
          </h3>
        </div>

        {/* Kids' Card */}
        <div className="relative">
          <div className="w-[500px] h-[600px] bg-[#3d7675] rounded-lg"></div>
          <h3 className="absolute text-3xl font-semibold left-1/2 bottom-5 -translate-x-1/2 text-white">
            Kids
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ShopByGender;