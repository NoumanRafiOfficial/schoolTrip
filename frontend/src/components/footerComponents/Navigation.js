import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../images/schoolTrip_logo.png'

const Navigation = () => {
  return (
    <div className="container text-center text-warning">
      <hr /><div className='mt-3'>
        <a className="navbar-brand p-3" href="/#head-tip">
          <img src={logo} alt='...' width={194} height={38}/>
        </a>
      </div><hr />
      {/* <a >
      <hr /><h2 className='text-center'>schoolTrip</h2><hr />
      </a> */}
      <ul className="nav flex-column">

        {/* <li className="nav-item">
          <a className="nav-link text-warning" href='/#head-tip'> Home </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link text-warning" href='/about'> About </a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link text-warning" href='/services'> Services </a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-warning" to='/pricing'> Pricing </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-warning" to='/faq'> FAQs </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link text-warning" to='/contact'> Contact </Link>
        </li> */}
      </ul>
    </div>

  )
}

export default Navigation