import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const DriverUpdate = (props) => {
  const { handle2, handler2 } = props
  const { name, regNo, number, school, route, _id } = handle2

  const { user } = useAuthContext()
  const navigate = useNavigate()

  // function for updating the Api
  const updateApi = () => {
    // console.log(handle2)
    fetch(`http://localhost:5000/api/drivers/${_id}`, {
      method: 'PATCH',
      headers: {
        "content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(handle2)
    })
  }

  return (
    <>
      <div className='head'>
        <h1>Driver Reg. (Update):</h1><hr />
      </div>
      <div className='container bg-black pt-4'>
        <form
          style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

          <label className='mt-5'>Name</label>
          <input required name="name" value={name}
            onChange={handler2}
            type='text' className='form-control' style={{ fontSize: '80%' }} />

          <label className='mt-3'>Vehicle Reg. No.</label>
          <input required name="regNo" value={regNo}
            onChange={handler2}
            type='text' className='form-control' style={{ fontSize: '80%' }} />

          <label className='mt-3'>Contact</label>
          <input required name="number" value={number}
            onChange={handler2}
            type='number' className='form-control' style={{ fontSize: '80%' }} />

          <label className='mt-3'>School</label>
          <input required name="school" value={school}
            onChange={handler2}
            type='text' className='form-control' style={{ fontSize: '80%' }} />

          <label className='mt-3'>Route/ s</label>
          <input required name="route" value={route}
            onChange={handler2}
            type='text' className='form-control' style={{ fontSize: '80%' }} />

          {/* <button
            onClick={(e) => { e.preventDefault(); updateApi(); navigate('/drivers') }}
            className='btn btn-outline-warning mt-5 mb-5' style={{ width: '50%' }}>
            Update</button>
          <button
            onClick={(e) => { e.preventDefault(); alert('canceled'); navigate('/drivers') }}
            className='btn btn-outline-danger mt-5 mb-5' style={{ width: '50%' }}>
            Cancel</button> */}
        </form><br />
      </div>
    </>
  )
}

export default DriverUpdate