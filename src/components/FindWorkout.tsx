import React from 'react'
import Button from './Button'

const FindWorkout: React.FC = () => {
    return (
        <div className="container">
            <div className="find-wko row">
            <div className="find-wko-left col-12 col-lg-7">
                <img className='find-wko-img' src="/find-workout/about-img.png" alt="" />
            </div>
            <div className="find-wko-right col-12 col-lg-5">
                <h2 className='find-wko-h2'>Let Us Find The Perfect Workout For You !</h2>
                <img className='circle-img' src="/find-workout/circle-line.png" alt="" />
                <p className='my-4 find-p'>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim. Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor velit vel diam. Cras ac suscipit metus.</p>
                    <p className='my-4 find-p'>Etiam fermentum ex orci, a ullamcorper erat tempor in. Nulla est ante, ullamcorper vitae dui vel, molestie feugiat sapien.</p>
                    <p className='my-4 find-p'>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit. Vestibulum molestie nunc non libero posuere, quis pellentesque massa tempus.</p>
                <Button klass='yellow-shadow-btn' btnname='Read More'/>
            </div>

        </div>

        </div>
        


    )
}

export default FindWorkout