import BambooComponent from "./components/BambooComponent"
import Navbar from "./components/Navbar"
import backgroundImage from "./images/image-hero-desktop.jpg"
import MiddleContainer from "./components/MiddleContainer"

function App() {
 

  return (
    <div className="h-full relative">
      <img src={backgroundImage} alt="bg" className="backgroundMain brightness-125"/>
      <Navbar />
      <div className="Layout px-[23rem] relative top-[-75px] flex flex-col gap-6">
          <BambooComponent></BambooComponent>
          <MiddleContainer></MiddleContainer>

      </div>
    </div>
  )
}

export default App
