export default function MiddleContainer(){
    return (
        <div className="py-12 px-4 rounded-lg bg-white flex flex-col gap-16 shadow-lg">
            <div className="flex flex-wrap gap-8 justify-start gap-4">
                <div className="gap-2 px-4 ">
                    <p className="text-4xl font-bold">$37,580</p>
                    <p className="text-DarkGray">of $100,000 backed</p>
                </div>
                <span></span>
                <div className="gap-2 px-4 ">
                    <p className="text-4xl font-bold" >5,007</p>
                    <p className="text-DarkGray">total backers</p>
                </div>
                <span></span>
                <div className="gap-2 px-4">
                    <p className="text-4xl font-bold">56</p>
                    <p className="text-DarkGray">days left</p>
                </div>
            </div>
            <progress min={0} max={100}  className="w-full px-4" value="30"></progress>
        </div>
    )
}