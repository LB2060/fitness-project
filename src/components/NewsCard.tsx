import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

interface NewsProps {
    newsphoto: string;
    newstime: number;
    newsprofile: string;
    newstitle: string;
    newsinfo: string;

}

const NewsCard: React.FC<NewsProps> = ({ newsinfo, newsphoto, newsprofile, newstime, newstitle }) => {
    return (
        <div className='news-card container'>
            <img className='news-photo' src={newsphoto} alt="" />
            <div className="time-profile">
                <div className="time-div">
                    <MdOutlineDateRange className='time-icon' />
                    <p className='time'>{newstime}</p>
                </div>
                <div className="profile-div">
                    <IoPerson className='profile-icon' />
                    <p className='profile'>{newsprofile}</p>
                </div>

            </div>
            <h3 className='news-h3 my-3'>{newstitle}</h3>
            <p className='news-info'>{newsinfo}</p>
            <a className='news-a' href="#">Read More <FaArrowRight /> </a>
        </div>
    )
}

export default NewsCard