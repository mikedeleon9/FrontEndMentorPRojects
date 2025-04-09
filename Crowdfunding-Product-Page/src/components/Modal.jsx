import React from 'react'
import ModalPledgeComponent from './ModalPledgeComponent'

const Modal = ({showModal}) => {

    if (!showModal) return null;
  return (
    <>
    <div className='fixed inset-0 bg-black opacity-40 z-10'></div>
    
    <div className={` bg-white rounded-lg absolute max-w-[700px] h-[500px] inset-x-0 mx-auto h-96 fixed top-20 z-10 p-8 overflow-auto no-scrollbar`}>
        
      <h2 className='font-bold text-xl mb-6'>Back this project</h2>
      <p className='mb-8 text-DarkGray'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
      <div className='flex flex-col gap-6'>
        <ModalPledgeComponent labelTitle={"Pledge with no reward"} description={"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."} />
        <ModalPledgeComponent labelTitle={"Bamboo Stand"} description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."} />
        <ModalPledgeComponent labelTitle={"Black Edition Stand"} description={"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."} />
        <ModalPledgeComponent labelTitle={"Mahogany Special Edition"} description={"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."} />
      </div>
    </div>
    </>
  )
}

export default Modal
