import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'

const StudentRegister = (props) => {
    const { user } = useAuthContext()

    const { handler, handle } = props

    const [error, setError] = useState(null)

    const navigate = useNavigate();

    // function for creating the api data
    const createApi = async () => {
        if (!user) {
            setError('You must be logged in')
            return
        }
        let response;
        let json;
        try {
            response = await fetch("http://localhost:5000/api/students", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(handle)
            })
            json = await response.json()
            navigate('/students')
        } catch (error) {
            // navigate('/student-reg')
            console.log('There was an error', error);
        }
        // Uses the 'optional chaining' operator
        if (response?.ok) {
            // console.log('Use the response here!');
            setError(null)

        } else {
            // console.log(`HTTP Response Code: ${response?.status}`)
            alert('Kindly complete all fields!')
            navigate('/student-reg')
            setError(json.error)
        }
    }

    return (
        <>
            <div className='head'>
                <h1>Student Registeration:</h1><hr />
            </div>
            <div className='container bg-black pt-4'>
                <form
                    style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

                    <label className='mt-5'>Name</label>
                    <input required name="name" placeholder='First_name Last_name'
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Grade</label>
                    <input required name="grade" placeholder='Your grade/ class in number/s'
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Age</label>
                    <input required name="age" placeholder='Your age in number/s'
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Contact</label>
                    <input required name="number" placeholder='Your phone/ contact number'
                        onChange={handler}
                        type='number' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>School</label>
                    <input required name="school" placeholder="Your school's name"
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Address</label>
                    <input required name="add" placeholder="Your school's address"
                        onChange={handler}
                        type='text' className='form-control' style={{ fontSize: '80%' }} />

                    <button type='submit'
                        onClick={(e) => { e.preventDefault(); createApi(); }}
                        className='btn btn-outline-warning mt-5 mb-5' style={{ width: '50%' }}>
                        Save</button>
                    <button
                        onClick={(e) => { e.preventDefault(); alert('canceled'); navigate('/students') }}
                        className='btn btn-outline-danger mt-5 mb-5' style={{ width: '50%' }}>
                        Cancel</button>
                    {error && <div className="error">{error}</div>}
                </form><br />
            </div>
        </>
    )
}

export default StudentRegister