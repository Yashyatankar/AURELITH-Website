import React from 'react'

const CollectionSection = () => {
  return (
    <section className="py-16 px-4 w-full mx-auto bg-[#0f0a0a]">
        <h2 className="text-6xl font-bold text-[#c9a87c] mb-8 text-center font-cinzel">Our <span className="text-[#e8d5b0]">Collections</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#c9a87c] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0f0a0a] mb-4">Collection 1</h3>
                <p className="text-[#e8ddd5]">Description for Collection 1</p>
            </div>
            <div className="bg-[#c9a87c] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0f0a0a] mb-4">Collection 2</h3>
                <p className="text-[#e8ddd5]">Description for Collection 2</p>
            </div>
            <div className="bg-[#c9a87c] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0f0a0a] mb-4">Collection 3</h3>
                <p className="text-[#e8ddd5]">Description for Collection 3</p>
            </div>
            <div className="bg-[#c9a87c] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0f0a0a] mb-4">Collection 4</h3>
                <p className="text-[#e8ddd5]">Description for Collection 4</p>
            </div>
        </div>
    </section>
  )
}

export default CollectionSection