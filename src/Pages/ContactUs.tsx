import React, { useRef } from 'react';
import ServicesHeader from './ServicesHeader';
import emailjs from '@emailjs/browser';
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC = () => {

    const myForm = useRef<HTMLFormElement>(null
    )
    const sendEmail = (e: any) => {
        e.preventDefault();

        
        if(myForm.current){
            const formData = new FormData(myForm.current);
            
            const name = formData.get('name')?.toString().trim();
            const email = formData.get('email')?.toString().trim();
            const message = formData.get('message')?.toString().trim();

            if (!name || !email || !message) {
                toast.error("Please fill in all fields before submitting.");
                return;
            }
            emailjs
            .sendForm('service_a6fjjox', 'template_7d07p39', myForm.current, {
                publicKey: '3g4_Ne5jaFsCVO_Yg',
            })
            .then(
                () => {
                    toast.success('Message sent!');
                },
                (error) => {
                    toast.error("SORRY...Message not sended.Please try again in a minute", error.text);
                },
            );
            myForm.current.reset()
        }
            
    };

    return (

        <div>
            <ServicesHeader h1='Contact Us' page='News' />
            <div className="Contact-us container">
                <div className="row">
                    <div className="inputs col-12 col-lg-5">
                        <h1 className='input-h1 my-5'>Get In Touch With Us</h1>
                        <form ref={myForm} onSubmit={sendEmail}>
                            <div className="name-contact">
                                <input className='input f-name' name='firstname' type="text" placeholder='First Name' />
                                <input className='input l-name' name='lastname' type="text" placeholder='Last Name' />
                            </div>
                            <div className="discuss-comments">
                                <input className='input my-4' name='email' type="email" placeholder='Your Email' />
                                <input className='input' name='discuss' type="text" placeholder='I would like to discuss' />
                                <input className='input my-4' name='comment' type="text" placeholder='Write Comments' />
                            </div>
                            <button className='send-message-btn' type='submit'>Send Message</button>
                        </form>
                    </div>
                    <div className="location col-12 col-lg-6">
                        <img className='contact-img' src="public/pages/contact-us/undraw_profile_details_re_ch9r.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
