import { navigations } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
     return (
          <div className="w-[15vw] h-screen fixed bg-slate-800 shadow-lg">
               <div className="uppercase flex px-7 py-5 text-gray-500 font-extrabold text-2xl tracking-wide border-b border-slate-700">
                    <p className='text-red-600'>ingame</p>.uz
               </div>
               <nav className="mt-8 space-y-4">
                    {navigations.map((item, idx) => (
                         <Link key={idx} href={`/${item.link}`} className="block mx-6">
                              <div className="flex items-center space-x-3 p-3 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white transition">
                                   <item.icon className="h-5 w-5" />
                                   <p className="text-base font-medium">{item.title}</p>
                              </div>
                         </Link>
                    ))}
               </nav>
          </div>
     )
}

export default Sidebar
