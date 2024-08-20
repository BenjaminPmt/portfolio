import './App.css'
import Header from './components/Header'
import Personnal from './Personnal'
import Project from './Project'


function App() {

  return (
    <div className='containerApp'>
      <Personnal/>
      <Header />
      <Project/>
    </div>
  )
}

export default App
