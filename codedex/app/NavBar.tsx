import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex p-5 bg-red-30'>
      <Link href="/" className='mr-5 btn'>Home</Link>
      <Link href="/menu" className='ml-auto flex mr-5 btn'>Menu</Link>
      <Link href="/calendar" className='flex mr-5 btn'>Calender</Link>
    </div>
  )
}

export default NavBar
