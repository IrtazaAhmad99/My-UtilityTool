"use client"
import Link from "next/link";
import React,{useState} from 'react'

const Navbar = () => {
   const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tax Slabs",
      href: "/tax-slab",
    },
    {
        name:"Blogs",
        href:"/blog"
    },
    {
      name: "FAQ",
      href: "/faq",
    },
  ];


  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">


          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-slate-900"
          >
            Tax
            <span className="text-blue-600">
              Calc
            </span>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {links.map((link)=>(
              <Link
                key={link.name}
                href={link.href}
                className="
                text-sm
                text-slate-600
                hover:text-blue-600
                transition
                "
              >
                {link.name}
              </Link>
            ))}

          </div>


          {/* Mobile Hamburger */}
          <button
            onClick={()=>setOpen(!open)}
            className="md:hidden text-2xl text-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>


        </div>



        {/* Mobile Dropdown */}

        {open && (

          <div
            className="
            md:hidden
            mt-4
            bg-white
            rounded-xl
            border
            border-slate-200
            shadow-lg
            p-4
            "
          >

            <div className="flex flex-col gap-4">

              {links.map((link)=>(

                <Link
                  key={link.name}
                  href={link.href}
                  onClick={()=>setOpen(false)}
                  className="
                  text-slate-700
                  hover:text-blue-600
                  transition
                  "
                >
                  {link.name}
                </Link>

              ))}

            </div>

          </div>

        )}


      </div>

    </nav>
  );
}

export default Navbar