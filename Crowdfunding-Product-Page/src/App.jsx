import BambooComponent from "./components/BambooComponent"
import Navbar from "./components/Navbar"
import backgroundImage from "./images/image-hero-desktop.jpg"
import MiddleContainer from "./components/MiddleContainer"
import MainComponent from "./components/MainComponent"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {
 const [showModal, setShowModal] = useState(false);
 const [selectedOption, setSelectedOption] = useState('');

 function openModal(option = "") {
  setSelectedOption(option); // 👈 set selected option when opening
  setShowModal(true);
}

  return (
    <div className={`${showModal ? "brightness-70" : "brightness-40"}min-h-screen relative flex flex-col items-center`}>
      <div className="w-full h-[400px] overflow-hidden">
        <img 
          src={backgroundImage} 
          alt="bg" 
          className="backgroundMain brightness-125 w-full h-full object-cover"
        />
      </div>
      <Navbar className="absolute top-0 w-full" />
      <div className="Layout max-w-[700px]  -mt-20  flex flex-col gap-6 px-8 md:px-0">
          <BambooComponent openModal={openModal} showModal={showModal}></BambooComponent>
          <MiddleContainer></MiddleContainer>
          <MainComponent openModal={openModal}></MainComponent>
          <Modal setSelectedOption={setSelectedOption} selectedOption={selectedOption} showModal={showModal} setShowModal={setShowModal} ></Modal>
      </div>
    </div>
  )
}

export default App
