import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App
