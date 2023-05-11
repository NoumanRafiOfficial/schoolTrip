import React from 'react'

const HeadTip = () => {
  return (
    <div id="head-tip" className='headtip text-warning bg-black'>
      <div className='container py-1'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 d-flex justify-content-around'>
            <span>Lahore, Punjab, Pakistan</span>
            <span>|</span>
            <span>+92 333 1410604</span>
            <span>|</span>
            <span>schooltrip@gmail.com</span>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  )
}

export default HeadTip