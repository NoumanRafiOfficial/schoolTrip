import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/schoolTrip_logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            {/*  d-flex justify-content-around */}
            <div className='container-fluid'>
                <Link className="navbar-brand p-3" to="/">
                    <img src={logo} width={194} height={38} alt='...'/>
                </Link>
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQs</Link>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#footer-tail">Contact</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a
                            className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                <li>
                                <a className="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                <a className="dropdown-item" href="#">Another action</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                    </ul>
                                </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                        Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav >

        // <div className='navbar'>
        //     <Link to="/">Homepage</Link>
        //     <Link to="/about">About Us</Link>
        //     <Link to="/services">Our Services</Link>
        //     <Link to="/pricing">Pricing</Link>
        //     <Link to="/faq">FAQ</Link>
        //     <Link to="/contact">Contact Us</Link>
        // </div>
    )
}

export default Navbar