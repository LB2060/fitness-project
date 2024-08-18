import React from 'react'
import ServicesHeader from './ServicesHeader'
import { MdPlayArrow } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

const ServicesDetails: React.FC = () => {
    return (
        <div>
            <ServicesHeader h1='Services Details' page='Services Details' />
            <div className="service-details container">
                <div className="col-12 col-md-3">
                    <div className="services-div">
                        <a href=""><MdPlayArrow className='arrow-icon' />All Services</a>
                        <a href=""><MdPlayArrow className='arrow-icon' />Online Emergency</a>
                        <a href=""><MdPlayArrow className='arrow-icon' />Medication Service</a>
                        <a href=""><MdPlayArrow className='arrow-icon' />24hr Health Program</a>
                    </div>
                    <div className="download-div ">
                        <h6 className='download-h6'>Download Brochures</h6>
                        <p className='download-p'>Pleasure and praising pain was born and I will give you a complete account.</p>
                        <div className="download-a">
                            <a href="/"><FaFilePdf className='download-icon' />INFO COMPANY</a>
                            <a href="/"><FaFilePdf className='download-icon' />BROCHURE NEWEST</a>
                        </div>
                    </div>
                </div>


                <div className="info-news-list col-12 col-md-8">
                    <img className='emergency-img' src="public/pages/Services-details/inner_b1.jpg" alt="" />
                    <h3 className='online-emergency'>Online Emergency</h3>
                    <p className='emergency-p'>Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                    <p className='emergency-p'>Industar develops, builds and finances utility scale solar and storage projects throughout the United States. We specialize in developing renewable solutions to suit the specific needs of large investor owned utilities.</p>
                    <div className="emergency-list">
                        <ul>
                            <li><MdDoubleArrow className='d-arow' />Engine oil level should be regularly checked</li>
                            <li><MdDoubleArrow className='d-arow' />Tyres have a minimum of 1.6mm of tread depth</li>
                            <li><MdDoubleArrow className='d-arow' />Ensure that the electrolyte level is correct</li>
                            <li><MdDoubleArrow className='d-arow' />Never remove the radiator when the engine is</li>
                            <li><MdDoubleArrow className='d-arow' />Ensure that your vehicle's brake fluid is full</li>
                        </ul>
                    </div>
                    <h3 className='online-emergency'>Why Choose This Service</h3>
                    <p className='emergency-p'>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful anyone who loves or pursues.</p>
                    <p className='emergency-p'>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful anyone who loves or pursues.</p>

                </div>

            </div>

        </div>
    )
}

export default ServicesDetails