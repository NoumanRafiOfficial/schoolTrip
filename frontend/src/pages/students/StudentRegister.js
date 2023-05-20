import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const StudentRegister = (props) => {
    const { user } = useAuthContext()
    const { handler, handle, info, warning, setHandle, empty } = props
    const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])

    const navigate = useNavigate();

    const cancel = async () => {
        alert('canceled')
        navigate('/students')
        window.scrollTo({ top: 120 })
    }
    // function for creating the api data
    const createApi = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            warning(error)
            window.scrollTo({ top: 0 })
            return
        }

        const response = await fetch("http://localhost:5000/api/students", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(handle)
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            if (error !== null && error !== 'Please fill in all the fields') {
                warning('Student registered already')
            }
            else {
                warning(error)
            }
            // setEmptyFields(json.emptyFields)
            console.log(error)
        }

        if (response?.ok) {
            setHandle(empty)
            setError(null)
            info('done')
            navigate('/students')
        }
    }

    return (
        <>
            <div className='head' id='head'>
                <h1>Student Registeration:</h1><hr />
            </div>
            <div className='container bg-black pt-4'>
                <form
                    style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

                    <label className='mt-5'>Name</label>
                    <input required name="name" placeholder='First_name Last_name'
                        onChange={handler}
                        // className={emptyFields.includes('name') ? 'error' : ''}
                        type='text' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Grade</label>
                    <input required name="grade" placeholder='Your grade/ class in number/s'
                        onChange={handler}
                        type='number' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Age</label>
                    <input required name="age" placeholder='Your age in number/s'
                        onChange={handler}
                        type='number' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Contact</label>
                    <input required name="number" placeholder='Your phone/ contact number'
                        onChange={handler}
                        type='number' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>School</label>
                    <input required name="school" placeholder="Your school's name"
                        onChange={handler}
                        type='text' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Address</label>
                    <input required name="add" placeholder="Your school's address"
                        onChange={handler}
                        type='text' style={{ fontSize: '80%' }} />

                    <button type='submit'
                        onClick={createApi}
                        className='btn btn-outline-warning mt-5' style={{ width: '50%' }}>
                        Save</button>
                    <button
                        onClick={(e) => { e.preventDefault(); cancel() }}
                        className='btn btn-outline-danger mt-5' style={{ width: '50%' }}>
                        Cancel</button>
                    {/* {error && <div className="error text-center">{error}</div>} */}
                </form><br />
                <ToastContainer />
            </div>
        </>
    )
}

export default StudentRegister