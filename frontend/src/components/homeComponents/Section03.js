import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


const Section03 = (props) => {
    const{warning}=props
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const regStudent = () => {
        if (!user) {
            warning('You must be logged in')
            window.scrollTo({ top: 0 })
        }
        else {
            navigate('/student-reg')
            window.scrollTo({
                top: 120
            })
        }
    }

    const regDriver = () => {
        if (!user) {
            warning('You must be logged in')
            window.scrollTo({ top: 0 })
        }
        else {
            navigate('/driver-reg')
            window.scrollTo({ top: 120 })
        }
    }

    return (
        <div className='bg-black' style={{ height: '100vh' }}>
            <div className='container bg-warning' style={{ height: '100%' }}>
                <div className='row' style={{ height: '17%' }}></div>
                <div className='row' style={{ height: '66%' }}>
                    <div className='col-lg-6'>
                        <div id='st-reg' className='border border-3 border-black d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Student's Registeration</h1>
                            <button className='btn btn-outline-warning w-25' onClick={regStudent}>Register</button>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div id='dr-reg' className='border border-3 border-black d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Driver's Registeration</h1>
                            <button className='btn btn-outline-warning w-25' onClick={regDriver}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Section03