//navigation bar component
'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className='flex justify-between items-center p-4 shadow-sm top-0 w-full'>
      <div><a href='/'>#</a></div>
      <div className=''>
        <Link href='/' className={`px-4 hover:text-slate-950 ${pathname === '/' ? 'text-slate-950':'text-slate-500'} `}>Home</Link>
        <Link href='/stories' className={`px-4 hover:text-slate-950 ${pathname === '/stories' ? 'text-slate-950' : 'text-slate-500'}`}>Stories</Link>
      </div>
    </div>
  )
}
export default Navbar
