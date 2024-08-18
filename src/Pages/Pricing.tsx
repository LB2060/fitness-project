import React from 'react'
import ServicesHeader from './ServicesHeader'
import Price from '../components/Price'

const Pricing:React.FC= () => {
  return (
    <div>
        <ServicesHeader h1='Pricing' page='Pricing'/>
        <Price/>
    </div>
  )
}

export default Pricing