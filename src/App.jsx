import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Employees from './Components/Employees'
import Landing from './Pages/Landing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/emp' element={<Employees/>} />
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
