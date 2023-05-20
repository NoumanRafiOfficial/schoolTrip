import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'


const StudentUpdate = (props) => {
    const { handle, handler } = props
    const { name, grade, age, number, school, add, _id } = handle

    const { user } = useAuthContext()
    const navigate = useNavigate()

    // function for updating the Api
    const updateApi = () => {
        // console.log(handle)
        fetch(`http://localhost:5000/api/students/${_id}`, {
            method: 'PATCH',
            headers: {
                "content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(handle)
        })
    }

    return (
        <>
            <div className='head'>
                <h1>Student Reg. (Update):</h1><hr />
            </div>
            <div className='container bg-black pt-4'>
                <form
                    style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

                    <label className='mt-5'>Name</label>
                    <input required name="name" value={name}
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Grade</label>
                    <input required name="grade" value={grade}
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Age</label>
                    <input required name="age" value={age}
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Contact</label>
                    <input required name="number" value={number}
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>School</label>
                    <input required name="school" value={school}
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Address</label>
                    <input required name="add" value={add}
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    {/* <button
                        onClick={(e) => { e.preventDefault(); updateApi(); navigate('/students') }}
                        className='btn btn-outline-warning mt-5 mb-5' style={{ width: '50%' }}>
                        Update</button>
                    <button
                        onClick={(e) => { e.preventDefault(); alert('canceled'); navigate('/students') }}
                        className='btn btn-outline-danger mt-5 mb-5' style={{ width: '50%' }}>
                        Cancel</button> */}
                </form><br />
            </div>
        </>
    )
}

export default StudentUpdate