import React from 'react'
import Login from '../components/Login'
import Hak from '../components/Hak'
// import Navbar from '../app/Navbar';
function page() {
  return (
    <>
    {/* Navbar section */}
    {/* <Navbar/> */}
    {/* end Navbar section */}

    {/* login sections */}
    <section>
      <Login/>
    </section>
    {/* end login sections */}

    {/* Hak sections*/}
    <Hak/>
    {/* end Hak sections*/}
    </>
  )
}

export default page