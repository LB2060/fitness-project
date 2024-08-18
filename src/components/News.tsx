import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsCard from './NewsCard';

interface NewsCardProps {
    photo: string;
    time: number;
    profile: string;
    title: string;
    info: string;
}

const News: React.FC = () => {

    const [newsCard, setNewsCard] = useState<NewsCardProps[]>([])

    useEffect(() => {
        axios.get('src/News.json')
            .then(answer => setNewsCard(answer.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='news container'>
            <div className="test-title">
                <h1 className='news-h1'>What Our Client Say’s</h1>
                <img src="public/find-workout/circle-line.png" alt="" />
            </div>
            <div className="news-swiper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
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
                        newsCard.map((news, say) => (
                            <SwiperSlide key={say}><NewsCard newsphoto={news.photo} newstime={news.time} newsprofile={news.profile} newstitle={news.title} newsinfo={news.info}/></SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </div>
    )
}

export default News