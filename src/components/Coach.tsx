import React from 'react'
import Button from './Button'

const Coach: React.FC = () => {
  return (
    <div className='coach'>
      <div className="container">
      <div className="row">
        <div className="coach-left col-12 col-md-5">
          <h1 className='coach-h1'><span className='color-span'>We Build</span> Chanpions</h1>
          <h2 className='coach-h2'>Perfect Workout <br /> Coach For <span className='h2-span'>Body Shape</span></h2>
          <p className='coach-p'>Quisque leo augue, lobortis ac tellus nec, posuere <br /> ultricies nulla. Praesent massa odio, pellentesque in <br />consectetur quis, volutpat sit amet erat.</p>
          <Button klass='yellow-shadow-btn my-4' btnname='Learn More'/>

        </div>
        <div className="coach-right col-md-5">
          <img className='coach-img' src="/coach/coach.png" alt="" />

        </div>
      </div>
      </div>
      

    </div>
  )
}

export default Coach