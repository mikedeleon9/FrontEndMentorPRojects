import Button from "./Button"

export default function PledgeComponent({edition, money, amount, description}){
    return (
        <div className="border-1 p-6 border-gray-200 rounded-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className="font-bold">{edition}</p>
                <p className="text-ModerateCyan font-medium">Pledge {money} or more</p>
            </div>

            <p className="text-DarkGray text-base/8">{description}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold ">{amount}</span>
                    <p className="text-DarkGray"> left</p>
                </div>
                <Button content={"Select Reward"}/>
            </div>
        </div>
    )
}