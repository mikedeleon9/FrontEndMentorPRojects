import Button from "./Button"

export default function PledgeComponent({edition, money, amount, description}){
    return (
        <div className="border-1 border-gray-100 rounded-md">
            <div>
                <p>{edition}</p>
                <p>Pledge {money} or more</p>
            </div>

            <p>{description}</p>
            <div>
                <p>{amount} left</p>
                <Button content={"Select Reward"}/>
            </div>
        </div>
    )
}