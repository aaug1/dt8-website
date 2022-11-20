import React from 'react'
import './feature.css';

const Feature = (props) => {
  const {title, text} = props;

  return (
    <div className="dt8__features-container__feature">
      <div className="dt8__features-container__features-title">
        <div/> {/* Gradient box */}
        <h1>{title}</h1>
      </div>
      <div className="dt8__features-container__features-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature