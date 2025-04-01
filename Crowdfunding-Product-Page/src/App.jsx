import BambooComponent from "./components/BambooComponent"
import Navbar from "./components/Navbar"
import backgroundImage from "./images/image-hero-desktop.jpg"

function App() {
 

  return (
    <div className="h-full bg-gray-100  relative">
      <img src={backgroundImage} alt="bg" className="backgroundMain brightness-125"/>
      <Navbar />
      <div className="Layout px-[23rem] ">
          <BambooComponent></BambooComponent>


      </div>
    </div>
  )
}

export default App
