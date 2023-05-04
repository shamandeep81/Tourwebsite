import React from 'react'

const Card = (props) => {
  return (

    <div className="card">
    
      <div className="card__body">



      <img src={props.img} alt={props.title} style={{ width: '100%', maxHeight: '200px' }} />

        <h3 className="Car Tour Africa 10 days"></h3>
        <p className='card__title'>{props.title}</p>
      </div>
    </div>

  )
}

export default Card; 