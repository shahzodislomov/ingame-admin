import React from 'react'
import Sidebar from './_components/sidebar'
import { ChildProps } from '@/types'

const MainLayout = ({ children }: ChildProps) => {
     return (
          <div className='flex space-x-7 bg-slate-900'>
               <div className="w-[15vw]">
                    <Sidebar />
               </div>
               <div className='w-full bg-slate-800'>
                    {children}
               </div>
          </div>
     )
}

export default MainLayout