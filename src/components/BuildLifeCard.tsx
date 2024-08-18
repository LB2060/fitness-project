import React from 'react'

interface BuildCardProps {
  icon: string;
  title: string;
  description: string;
}

const BuildLifeCard: React.FC<BuildCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt="" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>

    </div>

  )
}

export default BuildLifeCard