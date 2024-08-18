import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
interface HeaderProps{
    h1:string
    page:string
}

const ServicesHeader:React.FC<HeaderProps>= ({h1,page}) => {
  return (
    <div className='services-header'>
        <h1 className='serv-h1'>{h1}</h1>
        <div className="kechid">
        <a className='home-ser' href='/'>Home</a>
        <MdArrowForwardIos className='kechid-icon mx-3'/>
        <a className='ser-a-news' href="">{page}</a>

        </div>
        

    </div>
  )
}

export default ServicesHeader