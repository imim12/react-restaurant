import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { useAppSelector } from './hooks/redux'
import { Navbar, Sidebar } from './layout'
import {  ErrorPage, Home, RankingPage, RegisterPage } from './pages'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  
  return (
    <div className="app">
      <ToastContainer   //하단 알림창
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      <BrowserRouter>
        <Sidebar />
        <div className='app__container'>
          <Navbar /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/404' element={<ErrorPage />} />
            <Route path='/*' element={<Navigate to={"/404"} />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/ranking" element={<RankingPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
