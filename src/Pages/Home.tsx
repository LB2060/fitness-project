import React from 'react'
import Coach from '../components/Coach'
import Appointment from '../components/Appointment'
import FindWorkout from '../components/FindWorkout'
import BuildYourLife from '../components/BuildYourLife'
import OurWkout from '../components/OurWkout'
import Price from '../components/Price'
import Testimonial from '../components/Testimonial'
import News from '../components/News'

const Home:React.FC= () => {
  return (
    <div>
        <Coach/>
        <Appointment/>
        <FindWorkout/>
        <BuildYourLife/>
        <OurWkout/>
        <Price/>
        <Testimonial/>
        <News/>
    </div>
  )
}

export default Home