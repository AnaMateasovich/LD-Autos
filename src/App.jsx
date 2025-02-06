import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome.jsx'
import Home from './pages/Home/Home.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
