import React from 'react'

const navbarlist = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "AURELITH", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Contact", href: "/contact" },
]

const Navbar = () => {
  return (
    <div className="bg-[#8b5a3c] text-[#e8ddd5] fixed top-5 left-1/2 -translate-x-1/2 
    rounded-full z-50 py-3 px-8">

      <ul className="flex items-center gap-8">
        {navbarlist.map((item) => (
          <li key={item.href} className="relative group cursor-pointer"> 
            <a href={item.href} className="hover:text-[#c9a87c] text-sm tracking-wide font-cinzel font-bold">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 mt-1 group-hover:w-full 
              group-hover:bg-linear-to-r group-hover:from-[#000000] group-hover:to-[#9a7830]   
              transition-all duration-300 rounded-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Navbar