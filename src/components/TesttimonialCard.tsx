import React from 'react'


interface TestimonialProps{
  profileimg:string;
  personname:string;
  professioncalling:string;
  commentthink:string;
}
const TesttimonialCard: React.FC<TestimonialProps> = ({profileimg,personname,professioncalling,commentthink}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-left">
        <img
          src="public/testimonial/testimonial-img.png"
          alt="Profile"
          className={profileimg}
        />
      </div>
      <div className="testimonial-card-right">
        <div className="testimonial-title">
          <div className="testimonial-words">
            <h3 className="testimonial-card-name">{personname}</h3>
            <p className="testimonial-card-title">{professioncalling}</p>

          </div>

          <img className='skobka' src="public/testimonial/qutation.png" alt="" />
        </div>

        <p className="testimonial-card-text">
          {commentthink}
        </p>
      </div>
    </div>
  )
}

export default TesttimonialCard