import React from 'react'
// import faker from 'faker';
import CreateComedian from './CreateComedian'
import DisplayComedian from './DisplayComedian'
import BackgroundCard from './BackgroundCard'
import '../App.css'

const App = () => {
  return (
    <main className='ui grid'>
      <div className='sixteen wide center aligned column bogusHeader'>
        <h1>Bogus Comedians</h1>
      </div>

      <div className='ui stackable sixteen wide column grid'>
        <section className='listSection four wide column'>
          <BackgroundCard divMargin='auto' />
        </section>
        <section className='createSection twelve wide column' style={{paddingLeft: '50px'}}>
          <div className={'column row'} >
            <div className='ui container'  style={{ marginBottom: '2rem' }}>
              <DisplayComedian />
            </div>
            <div
              className='ui column'
              style={{ marginTop: '40px', margin: '1rem' }}
            >
              <CreateComedian />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
