import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz/:lesson_code' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App