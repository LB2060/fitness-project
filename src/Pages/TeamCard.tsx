import React from 'react'
interface TeamCardProps{
    teamimg:string;
    teamname:string;
    teamprof:string;
    teamdate:string;
}

const TeamCard:React.FC<TeamCardProps>= ({teamimg,teamname,teamprof,teamdate}) => {
  return (
    <div>
        <div className="team-card">
  <img src={teamimg}/>
  <div className="card-body">
    <h5 className="team-card-title">{teamname}</h5>
    <p className="team-card-text">{teamprof}</p>
    <p className='team-since-date'>{teamdate}</p>
  </div>
</div>
    </div>
  )
}

export default TeamCard