import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

function Master( {item} ) {

  return (
    <>
        <Navbar/>
        <div className='row mt-3'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                <Menu/>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9'>
                {item}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Master