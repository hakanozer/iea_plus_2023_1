import React from 'react'

function Home() {
    return (
        <>
            <h1>App Title</h1>
            <div className="row">
                <div className='d-none d-md-block mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src="https://picsum.photos/640/360?1" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='row'>
                                <div className='mb-1 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                    <a href="#" className="btn btn-danger w-100">Add</a>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                    <a href="#" className="btn btn-primary w-100">Detail</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src="https://picsum.photos/640/360?2" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src="https://picsum.photos/640/360?3" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src="https://picsum.photos/640/360?4" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='mb-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                    <div className="card">
                        <img src="https://picsum.photos/640/360?5" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home