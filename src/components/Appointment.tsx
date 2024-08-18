import React from 'react'
// icons importing
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import Button from './Button';

const Appointment: React.FC = () => {
    return (
        <div className="appment">
            <div className="container">
                <div className='appment-card'>
                    <div className="options">

                        <div className="option my-3">
                            <FaLocationDot className='appment-icon' />
                            <input type="text" placeholder='Choose Your Location' />
                        </div>
                        <div className="divider"></div>

                        <div className="option my-3">
                            <IoCalendarOutline className='appment-icon' />
                            <input type="text" placeholder='Choose Visiting Date' />
                        </div>
                        <div className="divider"></div>

                        <div className="option my-3">
                            <CgGym className='appment-icon' />
                            <input type="text" placeholder='Choose Your Gym' />
                        </div>
                        <div className="divider"></div>

                        <div className="option my-3">
                            <IoPersonOutline className='appment-icon' />
                            <input type="text" placeholder='Choose Your Gym Coach' />
                        </div>
                    </div>
                    <Button klass='yellow-shadow-btn my-3' btnname='Book Your Appointment' />


                </div>

            </div>
        </div>


    )
}

export default Appointment