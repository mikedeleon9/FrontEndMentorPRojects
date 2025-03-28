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



export default function MainGrid({showOnlyActive}){

const [extensions, setExtensions]  = useState([
    {
    "logo" : devlensLogo,
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": true
},
{
    "logo": snapshotLogo,
    "name": "StyleSpy",
    "description": "Instantly analyze and copy CSS from any webpage element.",
    "isActive": true
},
{
    "logo": speedLogo,
    "name": "SpeedBoost",
    "description": "Optimizes browser resource usage to accelerate page loading.",
    "isActive": true
},
{
    "logo": wizardLogo,
    "name": "JSONWizard",
    "description": "Formats, validates, and prettifies JSON responses in-browser.",
    "isActive": true
},
{
    "logo": masterLogo,
    "name": "TabMaster Pro",
    "description": "Organizes browser tabs into groups and sessions.",
    "isActive": true
},
{
    "logo": viewportLogo,
    "name": "ViewportBuddy",
    "description": "Simulates various screen resolutions directly within the browser.",
    "isActive": true
},
{
    "logo": markUpLogo,
    "name": "Markup Notes",
    "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
    "isActive": true
},
{
    "logo": guideLogo,
    "name": "GridGuides",
    "description": "Overlay customizable grids and alignment guides on any webpage.",
    "isActive": true
},
{
    "logo": paletteLogo,
    "name": "Palette Picker",
    "description": "Instantly extracts color palettes from any webpage.",
    "isActive": true
},
{
    "logo": linkLogo,
    "name": "LinkChecker",
    "description": "Scans and highlights broken links on any page.",
    "isActive": true
},
{
    "logo": snapshotLogo,
    "name": "DOM Snapshot",
    "description": "Capture and export DOM structures quickly.",
    "isActive": true
},
{
    "logo": consoleLogo,
    "name": "ConsolePlus",
    "description": "Enhanced developer console with advanced filtering and logging.",
    "isActive": true
}
])

const [toggledButtons, setToggledButtons] = useState([])



const filteredExtensions = showOnlyActive
 ? extensions.filter(ext => toggledButtons.includes(ext.name) && ext.isActive) : extensions;

  const handleToggle = (event) => {
    const {checked, name} = event.target;

    setToggledButtons((prev) =>
        checked ? [...prev, name] : prev.filter((item) => item !== name)
      );
    
  }

const handleRemove = (name) => {
    setExtensions((prevExtension) => prevExtension.filter(ext => ext.name != name))
}
    return(
        <div className="grid grid-cols-3 grid-rows-4 gap-3 ">
            {filteredExtensions.map((extension,index) => {

                return(
                    
                    <div key={index} className="bg-Neutral-800 rounded-2xl p-2 gap-2 border-1 border-slate-500">
                <Extension  onToggle={handleToggle} onRemove={handleRemove} logo={extension.logo} title={extension.name} summary={extension.description} isChecked={toggledButtons.includes(extension.name)} />
                    </div>
                    
                )
            })}
            
        </div>
    )
}