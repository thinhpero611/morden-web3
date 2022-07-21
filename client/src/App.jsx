import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Navbar, Welcome, Footer, Service, Transaction } from './components'
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transaction />
      <Footer />
    </div>
  )
}

export default App
