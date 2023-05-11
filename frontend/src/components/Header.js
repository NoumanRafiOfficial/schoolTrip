import React from 'react'
import Navbar from './headerComponents/Navbar'
import HeadTip from './headerComponents/HeadTip'
import Login from './headerComponents/Login';

const Header = () => {
    return (
        <div>
            <HeadTip />
            <div className='container-fluid bg-warning'>
                <div className='row'>
                    <div className='col-md-9'><Navbar /></div>
                    <div className='col-md-3 bg-black border-top border-bottom border-warning'><Login /></div>
                </div>
            </div>
        </div>
    )
}

export default Header