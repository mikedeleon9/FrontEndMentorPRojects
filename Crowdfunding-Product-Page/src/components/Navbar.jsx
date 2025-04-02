
export default function Navbar(){
    return (
        <div className="flex items-center justify-between px-36 z-5 absolute w-full top-8 ">
            <h1 className="text-white text-3xl font-semibold">crowdfund</h1>
            <ul className="flex items-center gap-12 font-semibold">
                <li className="cursor-pointer text-white hover:text-ModerateCyan">About</li>
                <li className="cursor-pointer text-white hover:text-ModerateCyan">Discover</li>
                <li className="cursor-pointer text-white hover:text-ModerateCyan">Get Started</li>
            </ul>
        </div>
    )
}