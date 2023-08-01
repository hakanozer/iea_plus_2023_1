import React from 'react'
import { arr, appTitle } from '../datas/product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Home() {

    return (
        <>
            <Navbar/>
            <h1>{appTitle}</h1>
            <div className="row">
                { arr.map(( item, index ) =>  
                <div key={index} className='mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src={item.image} className="card-img-top" alt={item.title} title={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.detail}</p>
                            <div className='row'>
                                <div className='mb-1 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                    <a href="?#" className="btn btn-danger w-100">Add</a>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                    <a href="?#" className="btn btn-primary w-100">Detail</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                )}
            </div>
            <Footer/>
        </>
    )
}

export default Home