import React from 'react'

const BentoBox = () => {



  return (

    <section className="relative w-full bg-black overflow-hidden">

        <div className="grid grid-cols-4 grid-rows-4 gap-10 w-full h-screen p-10">

            <div className="col-span-2 row-span-1 flex items-center justify-center bg-[#c9a87c] rounded-lg">

            <p className="text-6xl text-[#8b5a3c] font-cinzel">AURELITH</p>

            </div>

            <div className="col-span-2 row-span-3 flex items-center justify-center">

                <div>
                    <video 
                    src="/Videos/ModelVideo-2.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover brightness-75 rounded-lg z-0 hover:scale-105 transition-transform duration-300 hover:brightness-110 relative"
                    />
                
                </div>

            
            </div>

            <div className="col-span-2 row-span-3 flex items-center justify-center">

                <video 
                src="/Videos/ModelVideo-1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover brightness-75 rounded-lg z-0 hover:scale-105 transition-transform duration-300 hover:brightness-110 relative"
                />        
            </div>
        </div>
       
    </section>
  )
}

export default BentoBox