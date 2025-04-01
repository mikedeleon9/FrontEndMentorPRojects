
export default function Navbar(){
    return (
        <div className="flex items-center justify-between px-36 z-5 absolute w-full top-8">
            <h1 className="text-white text-3xl font-bold">crowdfund</h1>
            <ul className="flex items-center gap-12 font-semibold">
                <li className="text-white">About</li>
                <li className="text-white">Discover</li>
                <li className="text-white">Get Started</li>
            </ul>
        </div>
    )
}