import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './Movies'
import UpdateMovie from './UpdateMovie'
import CreateMovie from './CreateMovie'
import Contact from './Contact'
import About from './About'
import UserCreation from './UserCreation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />}></Route>
          <Route path='/create' element={<CreateMovie />}></Route>
          <Route path='/update/:id' element={<UpdateMovie />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={<UserCreation />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
