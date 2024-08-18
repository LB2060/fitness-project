import React,{ useEffect, useState }  from 'react'
import TesttimonialCard from './TesttimonialCard'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialJsonProps{
  profile:string;
  name:string;
  profession:string;
  comment:string;
}

const Testimonial: React.FC = () => {

  const [testCard, setTestCard]=useState<TestimonialJsonProps[]>([])

 useEffect(() => {
  axios.get('src/testimonial-info.json')
  .then(answer => setTestCard(answer.data))
  .catch(error => console.error(error));
  
 },[])


  return (
    <div className="testimonial">
      <div className='container'>
        <div className="test-title">
          <h1 className='test-h1'>What Our Client Say’s</h1>
          <img src="public/find-workout/circle-line.png" alt="" />

        </div>


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
          className="TestimonialsSwiper"
        >
          {
            testCard.map((card,index)=>(
              <SwiperSlide> <TesttimonialCard key={index} profileimg={card.profile} personname={card.name} professioncalling={card.profession} commentthink={card.comment} /></SwiperSlide>
            ))
          }
          
        </Swiper>

      </div>

    </div>


  )
}

export default Testimonial