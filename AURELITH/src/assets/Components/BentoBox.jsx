import React from 'react'

const BentoBox = () => {
  return (

    <section className="relative w-full bg-black overflow-hidden">

      <div className="grid grid-cols-4 grid-rows-4 gap-10 w-full h-screen p-10">

        <div className="col-span-2 row-span-1 flex items-center justify-center bg-[#c9a87c] rounded-lg">

          <p className="text-4xl text-[#8b5a3c] font-inter">Content 1</p>

        </div>

        <div className="col-span-2 row-span-3 flex items-center justify-center bg-[#c9a87c] rounded-lg">

          <p className="text-4xl text-[#8b5a3c] font-inter">Content 2</p>
          
        </div>

        <div className="col-span-2 row-span-3 flex items-center justify-center bg-[#c9a87c] rounded-lg">

          <p className="text-4xl text-[#8b5a3c] font-inter">Content 3</p>

        </div>

      </div>
       
    </section>
  )
}

export default BentoBox