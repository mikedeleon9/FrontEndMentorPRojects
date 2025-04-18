import data from "../data.json"
import consoleLogo from "../images/logo-console-plus.svg"
import devlensLogo from "../images/logo-devlens.svg"
import snapshotLogo from "../images/logo-dom-snapshot.svg"
import guideLogo from "../images/logo-grid-guides.svg"
import wizardLogo from "../images/logo-json-wizard.svg"
import linkLogo from "../images/logo-link-checker.svg"
import markUpLogo from "../images/logo-markup-notes.svg"
import paletteLogo from "../images/logo-palette-picker.svg"
import speedLogo from "../images/logo-speed-boost.svg"
import spyLogo from "../images/logo-style-spy.svg"
import masterLogo from "../images/logo-tab-master-pro.svg"
import viewportLogo from "../images/logo-viewport-buddy.svg"
import { useState } from "react"

import Extension from "./Extension"



export default function MainGrid({isDarkMode, showOnlyActive, showOnlyInactive}){

const [extensions, setExtensions]  = useState([
    {
    "logo" : devlensLogo,
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": false
},
{
    "logo": snapshotLogo,
    "name": "StyleSpy",
    "description": "Instantly analyze and copy CSS from any webpage element.",
    "isActive": false
},
{
    "logo": speedLogo,
    "name": "SpeedBoost",
    "description": "Optimizes browser resource usage to accelerate page loading.",
    "isActive": false
},
{
    "logo": wizardLogo,
    "name": "JSONWizard",
    "description": "Formats, validates, and prettifies JSON responses in-browser.",
    "isActive": false
},
{
    "logo": masterLogo,
    "name": "TabMaster Pro",
    "description": "Organizes browser tabs into groups and sessions.",
    "isActive": false
},
{
    "logo": viewportLogo,
    "name": "ViewportBuddy",
    "description": "Simulates various screen resolutions directly within the browser.",
    "isActive": false
},
{
    "logo": markUpLogo,
    "name": "Markup Notes",
    "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
    "isActive": false
},
{
    "logo": guideLogo,
    "name": "GridGuides",
    "description": "Overlay customizable grids and alignment guides on any webpage.",
    "isActive": false
},
{
    "logo": paletteLogo,
    "name": "Palette Picker",
    "description": "Instantly extracts color palettes from any webpage.",
    "isActive": false
},
{
    "logo": linkLogo,
    "name": "LinkChecker",
    "description": "Scans and highlights broken links on any page.",
    "isActive": false
},
{
    "logo": snapshotLogo,
    "name": "DOM Snapshot",
    "description": "Capture and export DOM structures quickly.",
    "isActive": false
},
{
    "logo": consoleLogo,
    "name": "ConsolePlus",
    "description": "Enhanced developer console with advanced filtering and logging.",
    "isActive": false
}
])

const [toggledButtons, setToggledButtons] = useState([])



const filteredExtensions = 
   showOnlyActive ? extensions.filter(ext => ext.isActive) 
 : showOnlyInactive ? extensions.filter(ext => !ext.isActive)
 : extensions;

 const handleToggle = (event) => {
    const { checked, name } = event.target;
  
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.name === name ? { ...ext, isActive: checked } : ext
      )
    );
  };


const handleRemove = (name) => {
    setExtensions((prevExtension) => prevExtension.filter(ext => ext.name != name))
}
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-3 ">
            {filteredExtensions.map((extension,index) => {

                return(
                    
                    <div key={index} className={`${isDarkMode ? "bg-Neutral-800" : "bg-Neutral-0" } rounded-2xl p-2  gap-2 border-1 border-slate-500`}>
                <Extension  
                onToggle={handleToggle} 
                onRemove={handleRemove} 
                logo={extension.logo} 
                title={extension.name} 
                summary={extension.description} 
                isActive={extension.isActive} 
                isDarkMode = {isDarkMode}
                />
                    </div>
                    
                )
            })}
            
        </div>
    )
}



