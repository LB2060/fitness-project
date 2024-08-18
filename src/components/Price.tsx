import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PriceCard from './PriceCard'
import axios from 'axios'

interface PriceProps {
    subname: string;
    icon: string;
    li1: string;
    li2: string;
    li3: string;
    li4: string;
    li5: string;
    li6: string;
    price: number;

}

const Price: React.FC = () => {

    const [pricecard, setpricecard] = useState<PriceProps[]>([])

    useEffect(() => {
        axios.get('src/price-plan.json')
            .then(answer => setpricecard(answer.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='price'>
        <div className="pricing-table">
      <h2 className='prc-table-h2'>Pricing Table</h2>
      <img src="public/find-workout/circle-line.png" alt="" />
    </div>
        <div className='price-swiper'>
            
            <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        className="mySwiper"
      >
         {
                pricecard.map((card, say) => (
                    <SwiperSlide><PriceCard key={say} subscribe={card.subname} icon={card.icon} li1={card.li1} li2={card.li2} li3={card.li3} li4={card.li4} li5={card.li5} li6={card.li6} prcnumber={card.price} /></SwiperSlide>
                ))
            }
      </Swiper>
            



        </div>
        </div>
        
        
    )
}

export default Price