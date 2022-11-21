import React from 'react';
import './team.css';
import { TeamCard } from '../../components';

const employees = [
  {
    name: 'Josh Devier',
    job_title: 'Senior',
    image: "josh.png"
  },
  {
    name: 'Aidan Aug',
    job_title: 'Senior',
    image: "aidan.png"
  },
  {
    name: 'Sophia Zhai',
    job_title: 'Junior',
    image: "sophia.png"
  },
  {
    name: 'Krishna Sargar',
    job_title: 'Junior',
    image: "krishna.png"
  },
  {
    name: 'Edward Lo',
    job_title: 'Junior',
    image: "edward.png"
  },
  {
    name: 'Abby',
    job_title: 'Freshman',
    image: "abby.png"
  },
  {
    name: 'Allyson',
    job_title: 'Freshman',
    image: "allyson.png"
  },
  {
    name: 'Ashwatha',
    job_title: 'Freshman',
    image: "ashwatha.png"
  },


]

const Team = () => {
  return (
    <div>
      <div className='container dt8__team-header__container'>
        <h1 className='gradient__text'>Meet the Team</h1>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {employees.map((item, index) => (
          <TeamCard image={item.image} name={item.name} job_title={item.job_title}/>
        ))}
      </div>
    </div>
  );
};

export default Team;
