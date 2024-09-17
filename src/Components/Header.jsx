import React from 'react'
import { MdOutlineMail, MdAddCall  } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram  } from "react-icons/fa";



const Header = () => {
  return (
    <div>
      <header className='py-2 bg-hbg'>
        <div className="max-w-container mx-auto">
            <div className="flex items-center flex-wrap">
                <div className="w-full lg:w-1/4">
                    <div className="flex items-center justify-center lg:justify-start gap-x-2">
                        <MdOutlineMail className='text-white'/>
                        <p className='lg:text-white text-[red]'>mail@yourcompany.com</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 py-2 lg:py-0">
                    <div className="flex items-center justify-center lg:justify-start gap-x-2">
                        <MdAddCall className='text-white'/>
                        <p className='text-white'>+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                   <div className="flex gap-x-3 lg:justify-end justify-center">
                   <FaFacebookF className='text-white'/>
                    <FaTwitter className='text-white'/>
                    <FaLinkedinIn className='text-white'/>
                    <FaInstagram className='text-white'/>
                   </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
