import React from 'react'
import NewsLetter from './footerComponents/NewsLetter'
import Navigation from './footerComponents/Navigation'
import Contact from './footerComponents/Contact'
import SocialMedia from './footerComponents/SocialMedia'
import FooterTail from './footerComponents/FooterTail'

const Footer = (props) => {

  return (
    <div className='bg-warning border border-5 border-top border-black'>
      <div className='container bg-warning text-warning'>
        {/*  d-flex align-items-center justify-content-center */}
        <div className='row'>
          <div className='col-lg-12 bg-dark' style={{ marginTop: '7%' }}><NewsLetter info={props.info} /></div>
        </div>

        <div className='row'>
          <div className='col-lg-3 bg-dark'><Navigation /></div>
          <div className='col-lg-5 bg-dark'><Contact /></div>
          <div className='col-lg-4 bg-dark'><SocialMedia /></div>
        </div>
      </div>
      <div className='bg-black text-warning text-center'><FooterTail /></div>
    </div>
  )
}

export default Footer