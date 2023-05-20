import React from 'react'
import Carousel from '../components/homeComponents/Carousel'
// import Section01 from '../components/homeComponents/Section01'
import Section02 from '../components/homeComponents/Section02'
import Section03 from '../components/homeComponents/Section03'

const Home = (props) => {
  return (
    <>
      <div className='bg-dark'>
        {/* <h1>Homepage:</h1> */}
        <Carousel />
      </div>
      {/* <div><Section01/></div> */}
      <div><Section03 warning={props.warning}/></div>
      <div><Section02 /></div>

      {/* <div className='body'>
        <ul>
          <li>
            A clean and simple design with a banner image of happy students and a catchy tagline like "Safe, reliable transportation for students"
          </li>
          <li>
            A brief introduction to your company and its mission
          </li>
          <li>
            A call to action button that leads to the signup or login page
          </li>
        </ul><br />
        <p>
          Overall, your website content should focus on providing clear and concise information about your company and the services that you offer, while also emphasizing your commitment to safety and reliability. Make sure to highlight the unique features and benefits of your service, such as flexible scheduling, GPS tracking, or friendly and professional drivers. Good luck with your website!
        </p>
      </div> */}
    </>
  )
}

export default Home