import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
    const notify = () => {
        toast.info("Newsletter Coming soon!"
            , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
    }
    const navigate = useNavigate()

    return (
        <div style={{ width: '30%', margin: 'auto' }} className='mb-5'>
            <hr /><h2 className='text-center'>Newsletter</h2><hr />
            <div className="input-group mb-3">
                <input id='fu-input'
                    type="text"
                    className="form-control bg-black text-warning border-warning focus-ring-warning"
                    placeholder='aaa'
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <button
                    onClick={() => { notify(); navigate('/#head-tip'); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                    className="btn btn-outline-warning"
                    type="button"
                    id="button-addon2">
                    Signup
                </button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default NewsLetter