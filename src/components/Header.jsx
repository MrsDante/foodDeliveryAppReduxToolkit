import React from 'react';
import Logo from '../img/logo.png';
import { BsBasket } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* DESCTOP & TABLET  */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <div className="flex items-center gap-2">
              <img src={Logo} className="w-8 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-bold">Город</p>
          </div>
          
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>

            <div c   lassName="relative flex items-center justify-center">
                <BsBasket className="text-textColor text-2xl cursor-pointer" />
                <div className="absolute top-4 right-16 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>
          </div>
        </div>


        {/* MOBILE  */}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header