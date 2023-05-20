import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Services from './pages/services/Services';
// import Pricing from './pages/Pricing';
// import Faq from './pages/Faq';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Students from './pages/students/Students';
import Drivers from './pages/drivers/Drivers';
import StudentRegister from './pages/students/StudentRegister';
import DriverRegister from './pages/drivers/DriverRegister';
// import StudentUpdate from './pages/students/StudentUpdate';
// import DriverUpdate from './pages/drivers/DriverUpdate';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { toast } from 'react-toastify';
// import { useAuthContext } from './hooks/useAuthContext'
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/admin/Admin';

const App = () => {

  const info = (note) => {
    toast.info(note, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    })
  }
  const warning = (note) => {
    toast.warning(note, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    })
  }
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
  const [handle, setHandle] = useState(empty)
  const [handle2, setHandle2] = useState(empty2)

  // function for input fields
  const handler = (e) => {
    const { name, value } = e.target
    setHandle({ ...handle, [name]: value })
  }
  const handler2 = (e) => {
    const { name, value } = e.target
    setHandle2({ ...handle2, [name]: value })
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home warning={warning} />} />
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

          <Route path="/student-reg" element={<StudentRegister handler={handler} handle={handle} info={info} warning={warning} setHandle={setHandle} empty={empty} />} />
          {/* <Route path="/student-update" element={<StudentUpdate handle={handle} handler={handler} />} /> */}
          <Route path="/drivers" element={<Drivers setHandle2={setHandle2} />} />
          <Route path="/driver-reg" element={<DriverRegister handler2={handler2} handle2={handle2} info={info} warning={warning} setHandle2={setHandle2} empty2={empty2} />} />
          {/* <Route path="/driver-update" element={<DriverUpdate handle2={handle2} handler2={handler2} />} /> */}
          <Route path="/login" element={<Login info={info} />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/adm" element={<Admin />} />

        </Routes>
        <Footer info={info} />
        {/* <ToastContainer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App