import PledgeComponent from "./PledgeComponent"

export default function MainComponent(){
    return (
        <div className=" bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-xl font-bold">About this project</h2>
                <p className="text-base/8 text-DarkGray">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br></br>
Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
            </div>
            <div className="flex flex-col gap-8">
                <PledgeComponent edition={"Bamboo Stand"} money={"$25"} amount={101} description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."} ></PledgeComponent>
                <PledgeComponent edition={"Black Edition Stand"} money={"$75"} amount={64} description={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."} ></PledgeComponent>
                <PledgeComponent edition={"Mahogany Special Edition"} money={"$200"} amount={2} description={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."} ></PledgeComponent>
            </div>
        </div>
    )
}