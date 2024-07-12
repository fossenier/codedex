import Link from 'next/link'; // Importing the Link component from next/link for client-side navigation
import React from 'react'; // Importing React

// Functional component for the Navigation Bar
const NavBar = () => {
  return (
    <div className='flex p-5 bg-red-30'>
      <Link href="/" className='mr-5 btn'>Home</Link>
      <Link href="/menu" className='ml-auto flex mr-5 btn'>Menu</Link>
      <Link href="/calendar" className='flex mr-5 btn'>Calendar</Link>
    </div>
  );
};

export default NavBar; // Exporting the NavBar component