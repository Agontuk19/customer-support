import './App.css'
import { Suspense } from 'react';
import Display from './components/Display/Display'
import Navbar from './components/Navbar/Navbar'
import Tickets from './components/Tickets/Tickets';
import TicketStatus from './components/TicketStatus/TicketStatus';
import ResolvedTasks from './components/ResolvedTasks/ResolvedTasks';

const ticketsPromise = fetch('tickets.json')
  .then(res => res.json())
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-[#edecec]'>
        <Display></Display>
        <div className='grid md:grid-cols-4 mx-10 md:mx-15 xl:mx-20 gap-5'>
          <div className='col-span-3'>
            <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
              <Tickets ticketsPromise={ticketsPromise}></Tickets>
            </Suspense>
          </div>
          <div className='col-span-1'>
            <TicketStatus></TicketStatus>
            <ResolvedTasks></ResolvedTasks>
          </div>
        </div>

      </main>


    </>
  )
}

export default App
