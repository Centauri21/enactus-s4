'use client'

import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-yellow-400 sticky z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="no-underline text-xl font-bold text-white">
          ENACTUS
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="no-underline text-white hover:text-gray-800 transition duration-300">Home</Link>
          <Link href="/about" className="no-underline text-white hover:text-gray-800 transition duration-300">About</Link>
          <Link href="/team" className="no-underline text-white hover:text-gray-800 transition duration-300">Team</Link>
          <Link href="/projects" className="no-underline text-white hover:text-gray-800 transition duration-300">Projects</Link>
          <Link href="/events" className="no-underline text-white hover:text-gray-800 transition duration-300">Events</Link>
          <Link href="/join" className="no-underline text-white hover:text-gray-800 transition duration-300 ">Contact us</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
