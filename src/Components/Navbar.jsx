import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-[#F40404] py-3'>
    <div className='max-w-container mx-auto'>
      <div className="flex items-center">
        <div className="w-1/4">
            <img src={logo} alt="" />
        </div>
        <div className="w-3/4">
            <ul className='flex justify-end'>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Home</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>About</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Services</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Gallery</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#282828] duration-300 ease-in-out p-4'>Blog</li>
                <li className='text-[16px] font-pops text-white font-semibold border-2 border-[#fff] hover:text-[#282828] rounded-full p-4 hover:border-[#282828] cursor-pointer'>CONTACT</li>
            </ul>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar
