import { useState } from "react"
import hamburgerIcon from "../images/icon-hamburger.svg"
import closeHamburger from "../images/icon-close-menu.svg"


export default function Navbar(){

    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <div className="w-full ">
        <div className="flex items-center justify-between px-10 md:px-36 z-5 absolute w-full top-8 ">
            <h1 className="text-white text-3xl font-semibold">crowdfund</h1>
           
            <img onClick={() => setShowPopUp(!showPopUp)} className="md:hidden cursor-pointer" src={showPopUp ? closeHamburger : hamburgerIcon} alt="hamburger-icon" />
            <ul className="hidden md:flex flex items-center gap-12 font-semibold">
                <li className="cursor-pointer text-white hover:text-ModerateCyan">About</li>
                <li className="cursor-pointer text-white hover:text-ModerateCyan">Discover</li>
                <li className="cursor-pointer text-white hover:text-ModerateCyan">Get Started</li>
            </ul>
        </div>
        
        <div className={`${showPopUp ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} md:opacity-0 absolute w-full top-20 z-10 transition-all duration-300 transform ease-in-out `} >
                <ul className="flex font-semibold bg-white flex-col  justify-evenly z-10 h-full mx-10 rounded-lg">
                    <li className="px-6 py-4 cursor-pointer">About</li>
                    <hr className="text-slate-200" />
                    <li className="px-6 py-4 cursor-pointer">Discover</li>
                    <hr className="text-slate-200" />
                    <li className="px-6 py-4 cursor-pointer">Get Started</li>
                </ul>
            </div>
        
        </div>
        

    )
}