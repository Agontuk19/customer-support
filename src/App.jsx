import './App.css'
import { Suspense, useState } from 'react';
import Display from './components/Display/Display'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets';
import TicketStatus from './components/TicketStatus/TicketStatus';
import ResolvedTasks from './components/ResolvedTasks/ResolvedTasks';
import Footer from './components/Footer/Footer';

const ticketsPromise = fetch('tickets.json')
  .then(res => res.json())
function App() {
  // const [inProgess, setInProgress] = useState(0);
  // const [resolved, setResolved] = useState(0);
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#edecec]'>
        <Display></Display>
        <div className='grid md:grid-cols-4 mx-10 md:mx-15 xl:mx-20 pb-8 lg:pb-15 gap-5'>
          <div className='md:col-span-3'>
            <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
              <Tickets ticketsPromise={ticketsPromise}></Tickets>
            </Suspense>
          </div>
          <div className='col-span-full md:col-span-1 w-full'>
            <TicketStatus></TicketStatus>
            <ResolvedTasks></ResolvedTasks>
          </div>
        </div>
      </main>
      <footer className='px-10 md:px-15 xl:px-20 pt-10 md:pt-15 bg-black text-white'>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
