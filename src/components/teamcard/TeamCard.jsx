import React from 'react';
import './teamcard.css';

// function importAll(r) {
//   return r.keys().map(r);
// }

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/team_photos', false, /\.(png|jpe?g|svg)$/));


const TeamCard = (props) => {
  const {image, name, job_title} = props;

  return (
    <div className='card teamcard'>
      <div className='card__img__container'>
        <img
          src={images[image]}
          className='test'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          {job_title}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
