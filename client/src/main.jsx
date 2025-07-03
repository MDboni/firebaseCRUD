import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Update from './Component/Forms/Update.jsx'
import SignIn from './Component/Signs/SignIn.jsx'
import ProviderContext from './Provider/ProviderContext.jsx'
import SingUp from './Component/Signs/SingUp.jsx'
import User from './Component/Forms/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderContext>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SingUp/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </ProviderContext>
    </BrowserRouter>
  </StrictMode>,
)
