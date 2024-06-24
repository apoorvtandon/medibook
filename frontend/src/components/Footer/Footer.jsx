import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='pb-16 pt-20  border border-solid '>
            <div className='container'>
                <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                    <div>
                        <img src={logo} alt="Logo" />
                        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                            Copyright {year}
                        </p>
                        <div className='flex items-center gap-3 mt-4'>
                            <Link to='' className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center hover:bg-primaryColor hover:border-none'>
                                <AiOutlineInstagram />
                            </Link>
                            <Link to='' className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center hover:bg-primaryColor hover:border-none'>
                                <AiFillGithub />
                            </Link>
                            <Link to='' className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center hover:bg-primaryColor hover:border-none'>
                                <AiFillYoutube />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
                        <ul>
                            <li>
                                <Link to='/home' className='text-[16px] leading-7 font-[400] text-textColor'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className='text-[16px] leading-7 font-[400] text-textColor'>About</Link>
                            </li>
                            <li>
                                <Link to='/services' className='text-[16px] leading-7 font-[400] text-textColor'>Services</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='text-[16px] leading-7 font-[400] text-textColor'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
