import React from 'react'
import './styles.css'

const Services = () => {
  return (
    <>
      <div className='head'>
        <h1>Services:</h1>
      </div>
      <div className='container'>
        <div className='row' style={{ height: '67vh' }}>
          <div className='c1 col-lg-6'></div>
          <div className='col-lg-6 bg-warning g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-black text-warning'>pickup and drop-off</div>
          </div>
        </div>
        <div className='row' style={{ height: '67vh' }}>
          <div className='col-lg-6 bg-black g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-warning text-black'>school field trips visits</div>
          </div>
          <div className='c2 col-lg-6'></div>
        </div>
        <div className='row' style={{ height: '67vh' }}>
          <div className='c3 col-md-6'></div>
          <div className='col-md-6 bg-warning g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-black text-warning'>safety measures and protocols</div>
          </div>
        </div>
        <div className='row' style={{ height: '67vh' }}>
          <div className='col-md-6 bg-black g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-warning text-black'>background checks for drivers</div>
          </div>
          <div className='c4 col-md-6'></div>
        </div>
        <div className='row' style={{ height: '67vh' }}>
          <div className='c5 col-md-6'></div>
          <div className='col-md-6 bg-warning g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-black text-warning'>regular vehicle maintenance</div>
          </div>
        </div>
        <div className='row' style={{ height: '67vh' }}>
          <div className='col-md-6 bg-black g-0 d-flex align-items-center'>
            <div className='display-1 text-center bg-warning text-black'>adherence to traffic rules and regulations</div>
          </div>
          <div className='c6 col-md-6'></div>
        </div>
      </div>
      {/* <div className='body'>
        <ul>
          <li>
            An explanation of the different services that your company offers, such as pickup and drop-off, school field trips, and after-school activities
          </li>
          <li>
            Details about the safety measures and protocols that your company follows, such as background checks for drivers, regular vehicle maintenance, and adherence to traffic rules and regulations
          </li>
          <li>
            Testimonials from satisfied customers, highlighting the benefits of using School Trip
          </li>
        </ul>
      </div> */}
    </>
  )
}

export default Services