import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewsLetter = (props) => {
    const { info } = props

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
                    onClick={() => { info('Newsletter Coming soon!'); navigate('/#head-tip'); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}
                    className="btn btn-outline-warning"
                    type="button"
                    id="button-addon2">
                    Signup
                </button>
            </div>
        </div>
    )
}

export default NewsLetter