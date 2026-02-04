import './App.css'
import Display from './components/Display/Display'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#edecec]'>
        <Display></Display>
      </main>


    </>
  )
}

export default App
