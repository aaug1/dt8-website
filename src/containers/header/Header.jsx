import React from 'react';
import './header.css';
import VirusRed from '../../assets/virus-red-1.png';

const Header = () => {
  return (
    <div className='dt8__header section_padding'>
      <div className='container-fluid dt8__header-content'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 slide-in-left'>
            <h1 className='gradient__text'>
              Detecting more pathogens. Faster.
            </h1>
            <p>
              Expediting diagnosis and treatment for time-sensitive
              respiratory diseases
            </p>
          </div>
          <div className='col dt8__header-content__image slide-in-bck-center'>

              <img src={VirusRed} className='dt8__header-image' alt='virus' />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
