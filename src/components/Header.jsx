import React from 'react';
import Logo from '../img/logo.png';
import { BsBasket } from 'react-icons/bs';
import { MdAdd, MdLogout } from 'react-icons/md';
import Avatar from '../img/avatar.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const handleLogin = async () => {
    /*const { user: {refreshToken, providerData} } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
    });
    localStorage.setItem('user', JSON.stringify(providerData[0]));*/

    if (!user) {
      const { user: {refreshToken, providerData} } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
  }

  return (
    <header className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
        {/* DESCTOP & TABLET  */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <Link to={'/'} className="flex items-center gap-2">
              <img src={Logo} className="w-8 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-bold">Город</p>
          </Link>
          
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>

            <div className="relative flex items-center justify-center">
                <BsBasket className="text-textColor text-2xl cursor-pointer" />
                <div className="absolute top-4 right-22 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>

            <div className="relative">
              <motion.img whileTap={{ scale: 0.6}}
                alt="avatar" 
                src={user ? user.photoURL : Avatar} 
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
                onClick={handleLogin} 
                />
              <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2">
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transitial-all duration-100 ease-in-out">New Item <MdAdd /></p>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transitial-all duration-100 ease-in-out">Logout <MdLogout /></p>
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