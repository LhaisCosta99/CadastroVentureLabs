import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import logo from './assets/logoVenturelabs.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu />
      <main>
        <img src={logo} alt="Logo Venture Labs" />
      </main>
    </div>
  )
}

export default App
