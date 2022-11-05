import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import NavBar from './components/NavBar'
import MeStack from './components/MeStack'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <MeStack />
      <Portfolio/>
    </div>
  )
}

export default App
