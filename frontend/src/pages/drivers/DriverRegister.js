import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const DriverRegister = (props) => {
    const { user } = useAuthContext()
    const { handler2, handle2, info, warning, setHandle2, empty2 } = props
    const [error, setError] = useState(null)
    // const [emptyFields, setEmptyFields] = useState([])

    const navigate = useNavigate();

    const cancel = async () => {
        alert('canceled')
        navigate('/drivers')
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

        const response = await fetch("http://localhost:5000/api/drivers", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(handle2)
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            if (error !== null && error !== 'Please fill in all the fields') {
                warning('Driver registered already')
            }
            else {
                warning(error)
            }
            // setEmptyFields(json.emptyFields)
            console.log(error)
        }

        if (response?.ok) {
            setHandle2(empty2)
            setError(null)
            info('done')
            navigate('/drivers')
        }
    }

    return (
        <>
            <div className='head' id='head'>
                <h1>Driver Registeration:</h1><hr />
            </div>
            <div className='container bg-black pt-4'>
                <form
                    style={{ width: '50%', margin: 'auto', fontSize: '150%', color: '#ffc107' }}>

                    <label className='mt-5'>Name</label>
                    <input required name="name" placeholder='First_name Last_name'
                        onChange={handler2}
                        type='text' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Vehicle Reg. No.</label>
                    <input required name="regNo" placeholder='Your Vehicle Reg. No.'
                        onChange={handler2}
                        type='text' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Contact</label>
                    <input required name="number" placeholder='Your phone/ contact number'
                        onChange={handler2}
                        type='number' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>School</label>
                    <input required name="school" placeholder="Your school's name"
                        onChange={handler2}
                        type='text' style={{ fontSize: '80%' }} />

                    <label className='mt-3'>Route/ s</label>
                    <input required name="route" placeholder="Your route/ routes, comma seperated"
                        onChange={handler2}
                        type='text' style={{ fontSize: '80%' }} />

                    <button type='submit'
                        onClick={createApi}
                        className='btn btn-outline-warning mt-5 mb-5' style={{ width: '50%' }}>
                        Save</button>
                    <button
                        onClick={(e) => { e.preventDefault(); cancel() }}
                        className='btn btn-outline-danger mt-5 mb-5' style={{ width: '50%' }}>
                        Cancel</button>
                    {/* {error && <div className="error">{error}</div>} */}
                </form><br />
                <ToastContainer />
            </div>
        </>
    )
}

export default DriverRegister