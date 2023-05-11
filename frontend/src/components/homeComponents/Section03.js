import React from 'react'

const Section03 = () => {
    return (
        <div className='bg-black' style={{ height: '100vh' }}>
            <div className='container bg-warning' style={{ height: '100%' }}>
                <div className='row' style={{ height: '17%' }}></div>
                <div className='row' style={{ height: '66%' }}>
                    <div className='col-lg-6'>
                        <div id='st-reg' className='border border-3 border-black d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Student's Registeration</h1>
                            <button className='btn btn-outline-warning w-25'>Register</button>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div id='dr-reg' className='border border-3 border-black d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Driver's Registeration</h1>
                            <button className='btn btn-outline-warning w-25'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section03