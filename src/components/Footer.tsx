import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="subscribe">
                    <h2 className='foot-h2'>Subscribe To Our Newsletter For Latest Updates</h2>
                    <div className="sub-btn">
                        <input className='foot-input' type="email" placeholder='Email Address...' />
                        <a className='foot-a' href="#">Subscribe <FaChevronRight className='right' /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <img className='foot-logo' src="public/footer/w_logo.png" alt="" />
                        <div className="phone">
                            <div className="phone-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="phone-number">
                                1800-121-3637 <br />
                                +91 555 234-8765
                            </div>
                        </div>
                        <div className="mail">
                            <div className="mail-icon">
                                <IoMail />
                            </div>

                            <div className="mail-name">
                                info@example.com
                                sale@example.com
                            </div>
                        </div>
                    </div>
                    <div className="links col-12 col-lg-2">
                        <div className="link-h3">
                            <h3 className='our-links'>Our Links</h3>
                        </div>
                        <ul className='links-link'>
                            <li className='my-2'>Partners</li>
                            <li className='my-2'>About Us</li>
                            <li className='my-2'>Career</li>
                            <li className='my-2'>Reviews</li>
                            <li className='my-2'>Terms & Conditions</li>
                            <li className='my-2'>Help</li>
                        </ul>
                    </div>
                    <div className="links col-12 col-lg-2">
                        <div className="link-h3">
                            <h3>Other Links</h3>
                        </div>
                        <ul className='links-link'>
                            <li className='my-2'>Home</li>
                            <li className='my-2'>About Us</li>
                            <li className='my-2'>Services</li>
                            <li className='my-2'>Project</li>
                            <li className='my-2'>Our Team</li>
                            <li className='my-2'>Latest Blog</li>
                        </ul>
                        <div className="col-12 col-md-5"></div>
                    </div>
                    <div className="links col-12 col-lg-5">
                        <p className='foot-p'>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus. Cras vitae quam eget risus efficitur malesuada. Praesent condimentum lacus nisi, eu venenatis purus eleifend sit amet. Vivamus ac enim vitae erat scelerisque ullamcorper. Ut id pretium sem. Proin ac consectetur orci.</p>
                        <div className="link-icon">
                            <a target='blank' href="https://www.facebook.com/"><FaFacebookF className='foot-icon' /></a>
                            <a className='mx-2' target='blank'href="https://x.com/home"><FaTwitter className='foot-icon' /></a>
                            <a target='blank'href="https://www.instagram.com/"><RiInstagramFill className='foot-icon' /></a>
                            <a className='mx-2' target='blank'href="https://www.google.com/"><FaGoogle className='foot-icon'/></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer