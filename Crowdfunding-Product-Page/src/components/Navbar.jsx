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
        {showPopUp && (
        <div className="md:hidden popUp-div absolute w-full top-18 h-58 z-10" >
                <ul className="flex font-semibold bg-white flex-col justify-evenly z-10 h-full mx-10 rounded-lg">
                    <li className="px-6 ">About</li>
                    <hr className="text-slate-200" />
                    <li className="px-6 ">Discover</li>
                    <hr className="text-slate-200" />
                    <li className="px-6 ">Get Started</li>
                </ul>
            </div>
        )}
        </div>
        

    )
}