import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import logo from './assets/logoVenturelabs.png'
import Cadastro2 from './components/Cadastro3/Cadastro3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <main>
        <img src={logo} alt="Logo Venture Labs" />
        <Cadastro2 />
      </main>
    </div>
  )
}

export default App
