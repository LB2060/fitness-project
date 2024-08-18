import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";

const OurWkout: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='our-wkout'>
            <div className="container">
                <div className="row">
                    <div className="our-wkout-left col-12 col-md-6">
                        <h2 className='our-wkout-h2'>The Fitness You Will Enjoy With Our Workout</h2>
                        <img className='our-work-img' src="/our-workout/circle-line-w.png" alt="" />
                        <p className='our-wkout-p'>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</p>
                        <p className='our-wkout-p'>Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</p>

                    </div>
                    <div className="our-wkout-right col-12 col-md-6">
                    <FaRegPlayCircle className='play-icon' onClick={openModal}/>
                        <img className='video-img' src="public/our-workout/video-img.png" alt=""  style={{ cursor: 'pointer' }} />
                        {isModalOpen && (
                            <div className="modal-overlay" onClick={closeModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="close-button" onClick={closeModal}><IoMdClose /></button>
                                    <video
                                        style={{ width: '100%', height: 'auto' }}
                                        controls
                                        autoPlay
                                    >
                                        <source src='public/our-workout/WhatsApp Video 2024-08-12 at 23.11.42.mp4' type="video/mp4" />
                                        <source src='public/our-workout/WhatsApp Video 2024-08-12 at 23.11.42.ogg' type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurWkout