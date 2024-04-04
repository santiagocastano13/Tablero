import { useState } from 'react'
import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'
import { Footer } from './components/Layouts/Footer/Footer'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
