const BestSellers = () => {
    return (
        <div className="my-5">
            <div className="h-16 flex justify-between items-center">
                <h2 className="text-4xl ml-10 font-bold">Best Sellers</h2>
                <button className="bg-[#000] text-white px-4 py-2 rounded-md mr-10">View All</button>
            </div>

            <div className="grid grid-cols-5 gap-4 px-10">
                {/* Product Cards */}

                {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="border p-4 rounded-lg">
                        <a href="#">
                            <img src={`https://dummyimage.com/250x250?text=Product+${item}`} alt={`Product ${item}`} className="w-full h-3/4 object-cover mb-2 rounded-md" />
                            <h3 className="text-lg font-semibold">Product {item}</h3>
                            <p className="text-gray-600">$ {item * 10}.00</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSellers;