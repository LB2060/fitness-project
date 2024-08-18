import React from 'react'
import Button from './Button'

interface CardProps{
    subscribe:string;
    icon:string;
    li1:string;
    li2:string;
    li3:string;
    li4:string;
    li5:string;
    li6:string;
    prcnumber:number;
}

const PriceCard:React.FC<CardProps>= ({subscribe,icon,li1,li2,li3,li4,li5,li6,prcnumber}) => {
  return (
    <div>
    
     <div className='price-card'>
        <div className="card-head">
        <h2 className='prc-card-h2'>{subscribe}</h2>
        <img className='prc-card-icon my-3' src={icon} alt="" />

        </div>
        <div className="card-foot">
            <ul>
                <li className='my-3'>{li1}</li>
                <li className='my-3'>{li2}</li>
                <li className='my-3'>{li3}</li>
                <li className='my-3'>{li4}</li>
                <li className='my-3'>{li5}</li>
                <li className='my-3'>{li6}</li>
               
            </ul>
            <h4 className='prc-card-h4 my-4'>{prcnumber}<span className='prc-card-span'>/Month</span></h4>
            <Button klass='price-button' btnname='Choose Plan'/>
        </div>
        
    </div>
    </div>
   
  )
}

export default PriceCard