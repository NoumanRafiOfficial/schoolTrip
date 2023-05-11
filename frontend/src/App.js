import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Services from './pages/Services';
// import Pricing from './pages/Pricing';
// import Faq from './pages/Faq';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Students from './pages/students/Students';
import Drivers from './pages/drivers/Drivers';
import StudentRegister from './pages/students/StudentRegister';
import DriverRegister from './pages/drivers/DriverRegister';
import StudentUpdate from './pages/students/StudentUpdate';
import DriverUpdate from './pages/drivers/DriverUpdate';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { useAuthContext } from './hooks/useAuthContext'


const App = () => {
  // const { user } = useAuthContext()
  // object for input fields
  const empty = {
    name: "",
    grade: "",
    age: "",
    number: "",
    school: "",
    add: ""
  }
  const empty2 = {
    name: "",
    regNo: "",
    number: "",
    school: "",
    route: ""
  }

  // state for input fields
  const [handle, setHandle] = useState(empty);
  const [handle2, setHandle2] = useState(empty2);

  // function for input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value })
    // console.log(handle)
  }
  const handler2 = (e) => {
    const { name, value } = e.target;
    setHandle2({ ...handle2, [name]: value })
    // console.log(handle)
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/faq" element={<Faq />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/students" element={
            // user ?
            <Students setHandle={setHandle} />
            // : <Navigate to='/' />
          } />

          <Route path="/student-reg" element={<StudentRegister handler={handler} handle={handle} />} />
          <Route path="/student-update" element={<StudentUpdate handle={handle} handler={handler} />} />
          <Route path="/drivers" element={<Drivers setHandle2={setHandle2} />} />
          <Route path="/driver-reg" element={<DriverRegister handler2={handler2} handle2={handle2} />} />
          <Route path="/driver-update" element={<DriverUpdate handle2={handle2} handler2={handler2} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App