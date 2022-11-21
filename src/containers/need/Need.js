import React from 'react'
import { Feature } from '../../components'
import './need.css'
import blood_sample_img from '../../assets/blood-sample-no-bg.png'


const need_statement = <>
  <span>Families with young children </span>
  <span>need a method of detecting pathogens to </span>
  <span>expedite diagnosis and treatment </span>
  <span>for </span>
  <span>time-sensitive respiratory diseases with overlapping symptomologies.</span>
  </>

const Need = () => {
  return (
    <div className=" dt8__need_container section__margin">
      <div className="row">
        <div className="col-6 dt8__need__image">
          <div>
            <img src={blood_sample_img} alt="hi" />
          </div>

        </div>
        <div className="col-6 dt8__need__statement">
          <h1 className='black'> {need_statement}</h1>
          <p className='h9 black'> - Clinically validated need</p>
        </div>

      </div>


    </div>
  )
}

export default Need