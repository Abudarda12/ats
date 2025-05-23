import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import CaseStudy from './components/CaseStudy'
import Client from './components/Client'
import './App.css'

function App() {

  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero><br /><br />
        <hr />
        <Welcome></Welcome>
        <CaseStudy></CaseStudy>
        <Client></Client>
    </>
  )
}

export default App
