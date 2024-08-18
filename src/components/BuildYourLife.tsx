import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BuildLifeCard from './BuildLifeCard';


interface Card {
  title: string;
  icon: string;
  description: string;

}

const BuildYourLife: React.FC = () => {
  const [lifecard, setlifecard] = useState<Card[]>([])
  useEffect(() => {
    axios.get('src/build-life-card-info.json')
      .then(answer => setlifecard(answer.data))
      .catch(error => console.error(error))
  }, [])



  return (
    <div className='build-life'>
      <div className="container">
        <div className="row">
          <div className="build-life-left col-12 col-lg-6">
            <h2 className='find-wko-h2'>Build Your Body Transform Your Life</h2>
            <img className='build-life-img' src="/find-workout/circle-line.png" alt="" />
            <p className='build-life-p'>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit.</p>
            <p className='build-life-p'>Aenean eleifend est eget eros molestie pretium. Curabitur varius velit in est elementum consectetur. Mauris in risus bibendum, laoreet ex at, lobortis risus. Nullam id massa eget ante finibus iaculis. Duis eget nisl ipsum. Vivamus ipsum urna, tristique vel arcu nec, elementum congue est. Nullam vitae aliquet turpis.</p>

          </div>
          <div className="build-life-right col-12 col-lg-6">
                {
                  lifecard.map((onecard, index) => (
                    <BuildLifeCard key={index} icon={onecard.icon} title={onecard.title} description={onecard.description} />
                  ))}

              



          </div>
        </div>


      </div>

    </div>
  )
}

export default BuildYourLife