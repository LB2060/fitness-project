import React from 'react'
import ServicesHeader from './ServicesHeader'
import BuildYourLife from '../components/BuildYourLife'
import OurWkout from '../components/OurWkout'
import News from '../components/News'

const Services:React.FC= () => {
  return (
    <div>
        <ServicesHeader h1='Services' page='News'/>
        <BuildYourLife/>
        <OurWkout/>
        <News/>
    </div>
  )
}

export default Services