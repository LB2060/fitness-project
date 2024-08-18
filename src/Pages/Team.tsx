import React,{ useEffect, useState } from 'react'
import ServicesHeader from './ServicesHeader'
import axios from 'axios';
import TeamCard from './TeamCard';

interface TeamProps{
    img:string;
    name:string;
    prof:string;
    date:string;
}

const Team:React.FC= () => {

    const [teamCard,setTeamCard] = useState<TeamProps[]>([])

    useEffect(()=>{
        axios.get('src/TeamCard.json')
        .then(answer => setTeamCard(answer.data))
        .catch(error => console.error(error))
    })
  return (
    <div >
        <ServicesHeader h1='My Team' page='Pricing'/>
        <div className="team-page container">
            {
                teamCard.map((card,index)=>(
                    <TeamCard key={index} teamimg={card.img} teamname={card.name} teamprof={card.prof} teamdate={card.date}/>
                ))
            }

        </div>
        

    </div>
  )
}

export default Team