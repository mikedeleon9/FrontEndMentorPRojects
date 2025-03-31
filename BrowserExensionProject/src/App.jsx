import { useState } from 'react'
import TopBar from './components/TopBar'
import MainGrid from './components/MainGrid'
import './index.css'
import ExtensionList from './components/ExtensionList'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [showOnlyInactive, setShowOnlyInactive] = useState(false);
  
  const handleFilterClick = () => {
    
    setShowOnlyActive(true); // Enable the filter to show only active extensions
    setShowOnlyInactive(false)
  };

  const handleAllClick = () => {
    setShowOnlyActive(false);
    setShowOnlyInactive(false);

  
  };

  const handleInactive = () => {
    setShowOnlyInactive(true);
    setShowOnlyActive(false);
  }

  const handleDarkMode = () => {

    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
    console.log(isDarkMode)
  }

  return (
    <div className={`${isDarkMode ? 'bg-none' : 'bg-Neutral-200'} px-8 md:px-22 xl:px-48 py-8  flex flex-col gap-8`}>
      <TopBar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}></TopBar>
      <ExtensionList isDarkMode={isDarkMode} showOnlyActive={showOnlyActive} showOnlyInactive={showOnlyInactive} handleInactive={handleInactive} handleAllClick={handleAllClick} handleFilterClick={handleFilterClick} />
      <MainGrid showOnlyInactive={showOnlyInactive} showOnlyActive={showOnlyActive}/>
    </div>
  )
}

export default App

