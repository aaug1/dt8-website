import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Multiplexity',
    text: 'Using new cRASL technology, we are supreme'
  },
  {
    title: 'Accuracy',
    text: 'cRASL has been clinically proven to be highly accurate'
  },
  {
    title: 'Time Efficient',
    text: 'POC technology designed to give results in under an hour'
  },
  {
    title: 'Cost-Effective',
    text: 'POC technology designed to give results in under an hour'
  },
  {
    title: 'Accessible',
    text: 'Sample collection process is intuitive, providing interpretable results to the user'
  }
]

const Features = () => {
  return (
    <div className='dt8__features section__margin'>
      <div className="row">
        <div className="col dt8__features-heading">
          <h1 className='gradient__text'>LigMA Technology outperforms other POC diagnostic technology</h1>
          <p> LigMA Assay is meant to blow your mind </p>
        </div>
        <div className="col dt8__features-feature-container">
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}


        </div>

      </div>

    </div>
  )
}

export default Features