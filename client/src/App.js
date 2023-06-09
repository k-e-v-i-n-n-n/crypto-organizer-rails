import Header from "./components/Header"
import Organizer from "./components/Organizer";
import LoginModal from "./components/LoginModal";
import {useState, useContext} from "react"
import {AppContext} from "./Context"


function App() {

  const {user, setUser} = useContext(AppContext)
  const [showModal, setShowModal] = useState(true)
  return (
    <>
       {showModal && <LoginModal/>}
      <Header setShowModal={setShowModal} showModal={showModal}/>
      <Organizer/>
      
    </>
  );
}

export default App
