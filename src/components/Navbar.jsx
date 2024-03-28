import React, { useState, useRef } from 'react';
import phone from "../assests/images/phone.png";
import mail from "../assests/images/mail.png";
import skype from "../assests/images/skype.png";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // 228B22
    return (
        <nav className="bg-[#06799c] sticky top-0 z-[9999] ">  
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-32">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-semibold text-lg md:text-2xl"><a href={"/"}>Alphonic</a></span><br></br>
                            <span className='  text-white text-xs'><a href={"https://zoidtech.co.in/"}>Network Solution</a></span>
                        </div>
                    </div>
                    <div className="hidden text-white lg:block">
                        <div className="ml-4 flex items-center flex-wrap space-x-4 justify-end">
                            <a href="#" className="text-base font-medium border-r border-white pr-3">Company</a>
                            <a href="#" className="text-base font-medium border-r border-white pr-3">Blog</a>
                            <a href="#" className="text-base font-medium border-r border-white pr-3">Contact Us</a>
                            <a href="#" className="text-base font-medium border-r border-white pr-3">Sales +91 9887133338</a>
                            <div className='flex'>
                            <img src={phone} alt='phone' className=' w-4 mr-3' /><a href="#" className="text-base font-medium border-r border-white pr-3">Career +91 8005670910</a>
                            </div>
                            <div className='flex'>
                            <img src={mail} alt='phone' className=' w-5 mr-3' /><a href="#" className="text-base font-medium border-r border-white pr-3">info@alphonic.in</a>
                            </div>
                            <div className='flex'>
                            <img src={skype} alt='phone' className=' w-4 mr-3' /><a href="#" className="text-base font-medium">tapesh121</a>
                            </div>
                        </div>
                        <div className="ml-4 flex items-center justify-end space-x-4 mt-5">
                            <a href="#" className="text-base font-light border-r border-white pr-3">SERVICES</a>
                            <a href="#" className="text-base font-light border-r border-white pr-3">PORTFOLIO</a>
                            <a href="#" className="text-base font-light border-r border-white pr-3">HIRE DEVELOPER</a>
                            <a href="#" className="text-base font-light ">ON-DEMAND SOLUTIONS</a>

                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="space-y-1 text-white">
                    <div className="flex items-center flex-wrap space-x-4 justify-center gap-y-4 mb-8">
                        <a href="#" className="text-sm md:text-base font-medium border-r border-white pr-3">Blog</a>
                        <a href="#" className="text-sm md:text-base font-medium border-r border-white pr-3">Contact Us</a>
                        <a href="#" className="text-sm md:text-base font-medium border-r border-white pr-3">Company</a>
                        <a href="#" className="text-sm md:text-base font-medium border-r border-white pr-3">Sales +91 9887133338</a>
                        <div className=' flex'>
                        <img src={phone} alt='phone' className=' w-4 mr-2' /><a href="#" className=" text-sm md:text-base font-medium border-r border-white pr-3">Career +91 8005670910</a>
                        </div>
                        <div className=' flex'>
                        <img src={mail} alt='phone' className=' w-5 mr-2' /><a href="#" className="text-sm md:text-base font-medium border-r border-white pr-3">info@alphonic.in</a>
                        </div>
                        <div className=' flex'>
                        <img src={skype} alt='phone' className=' w-4 mr-2' /><a href="#" className="text-sm md:text-base font-medium">tapesh121</a>
                        </div>
                    </div>
                    <hr className=' mt-10'></hr>
                    <div className="flex flex-col items-center justify-center space-y-3 py-10">
                        <a href="#" className="text-base font-light">SERVICES</a>
                        <a href="#" className="text-base font-light">PORTFOLIO</a>
                        <a href="#" className="text-base font-light">HIRE DEVELOPER</a>
                        <a href="#" className="text-base font-light">ON-DEMAND SOLUTIONS</a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;