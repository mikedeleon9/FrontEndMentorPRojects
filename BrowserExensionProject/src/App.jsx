import { useState } from 'react'
import TopBar from './components/TopBar'
import MainGrid from './components/MainGrid'
import './index.css'
import ExtensionList from './components/ExtensionList'

function App() {
 
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  
  const handleFilterClick = () => {
    
    setShowOnlyActive(true); // Enable the filter to show only active extensions
  };

  const handleAllClick = () => {
    setShowOnlyActive(false);
  }

  return (
    <div className='px-22 py-8 bg-scarlet-400 flex flex-col gap-8'>
      <TopBar></TopBar>
      <ExtensionList handleAllClick={handleAllClick} handleFilterClick={handleFilterClick} />
      <MainGrid showOnlyActive={showOnlyActive}/>
    </div>
  )
}

export default App

