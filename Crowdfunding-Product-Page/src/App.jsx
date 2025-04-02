import BambooComponent from "./components/BambooComponent"
import Navbar from "./components/Navbar"
import backgroundImage from "./images/image-hero-desktop.jpg"
import MiddleContainer from "./components/MiddleContainer"
import MainComponent from "./components/MainComponent"
import Modal from "./components/Modal"

function App() {
 

  return (
    <div className="min-h-screen relative flex flex-col items-center">
      <div className="w-full h-[400px] overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="bg" 
          className="backgroundMain brightness-125 w-full h-full object-cover"
        />
      </div>
      <Navbar className="absolute top-0 w-full" />
      <div className="Layout max-w-[800px]  -mt-20  flex flex-col gap-6 ">
          <BambooComponent></BambooComponent>
          <MiddleContainer></MiddleContainer>
          <MainComponent></MainComponent>
          <Modal></Modal>
      </div>
    </div>
  )
}

export default App
