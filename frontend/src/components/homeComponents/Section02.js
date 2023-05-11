import React from 'react'

const Section02 = () => {
    return (
        <div className='bg-warning' style={{ height: '100vh' }}>
            <div className='container bg-black' style={{ height: '100%' }}>
                <div className='row' style={{ height: '17%' }}></div>
                <div className='row' style={{ height: '66%' }}>
                    <div className='col-lg-6'>
                        <div id='mission' className='border border-warning d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Mission</h1>
                            <p>Mission statements describe what you do and who you are in the present. They summarize your company’s purpose and primary focus.</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div id='vision' className='border border-warning d-flex flex-column align-items-center justify-content-center text-center text-warning'>
                            <h1>Vision</h1>
                            <p> Vision statements describe what you want to do and who you want to be. They outline your organization’s future hopes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section02