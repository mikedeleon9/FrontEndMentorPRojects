import LeftSideBar from "./components/left-side-bar"
import TopBar from "./components/TopBar"
import NotesComponent from "./components/NotesComponent"

function App() {
  

  return (
    <div className="grid grid-cols-7 grid-rows-10">
    <LeftSideBar></LeftSideBar>
    <TopBar></TopBar>
    <NotesComponent />
    </div>
  )
}

export default App
