import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Home } from "./Pages/Home"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/' element={<Chat />}/>
      </Routes>
      <Footer />
    </>

  )
}

export default App
