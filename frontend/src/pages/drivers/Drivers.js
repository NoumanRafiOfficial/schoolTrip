import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import avatar from '../../images/avatar2.png'
import { useAuthContext } from '../../hooks/useAuthContext'

const Drivers = (props) => {
  const { user } = useAuthContext()

  const navigate = useNavigate()
  const { setHandle2 } = props

  const [students, setStudentss] = useState([]);
  const fetchApi = () => {
    fetch("http://localhost:5000/api/drivers", {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then((response) => response.json())
      .then((data) => setStudentss(data))
      .catch((error) => console.log(error));
  }
  // function for deleting the Api
  const delApi = async (id) => {
    if (!user) {
      return
    }
    // var data = 
    await fetch(`http://localhost:5000/api/drivers/${id}`, {
      method: "DELETE",
      // headers: {
      //     'Authorization': `Bearer ${user.token}`
      // }
    })
    // data = 
    // await data.json()
    fetchApi();
  }

  useEffect(() => {
    if (user) {
      fetchApi()
    }
  }, [user]);

  // function for editing the Api
  const editApi = async (id) => {
    var data = await fetch(`http://localhost:5000/api/drivers/${id}`);
    data = await data.json()
    // console.log(data)
    setHandle2(data)
    navigate('/driver-update')
  }


  return (
    <>
      <div className='head'>
        <h1>All Drivers:</h1><hr />
      </div>
      <div className='container bg-black pt-4'
      // text-warning text-center display-1 
      // style={{minHeight: '386px'}}
      >
        {/* no driver available! */}
        <div className='row'>
          {
            students.map((item) => (
              <div className='col-lg-6 p-4'>
                <div className='row g-0'>
                  <div className='col-4'>
                    <img src={avatar} className='img-thumbnail' style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div className='col-8 bg-light' style={{ border: '1px solid', borderRadius: '12px' }}>
                    <h1 className='text-primary ps-3 pt-3'><strong>{item.name}</strong></h1>
                    <h3 className='text-success ps-3'><strong>Vehicle Reg. No.: {item.regNo}</strong></h3>
                    <h5 className='text-dark ps-3'><strong>+92 {item.number}</strong></h5>
                    <h5 className='text-dark ps-3'><strong>{item.school}</strong></h5>
                    <h5 className='text-dark ps-3 pb-3'><strong>{item.route}</strong></h5>
                  </div>
                </div>
                <div className='my-3'>
                  <button
                    onClick={() => editApi(item._id)}
                    style={{ width: '33.5%' }} className='btn btn-outline-warning'>
                    Edit</button>
                  <button
                    onClick={() => delApi(item._id)}
                    style={{ width: '66.5%' }} className='btn btn-outline-danger'>
                    Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Drivers