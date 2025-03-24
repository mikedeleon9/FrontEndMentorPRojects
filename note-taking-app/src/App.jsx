import LeftSideBar from "./components/left-side-bar"
import TopBar from "./components/TopBar"
import NotesApp from "./components/NotesApp"
import NotesControl from "./components/NotesControl"


function App() {
  

  return (
    <div className="grid grid-cols-6 grid-rows-10 h-screen">
    <LeftSideBar></LeftSideBar>
    <TopBar></TopBar>
    <NotesApp />
    
    </div>
  )
}

export default App
