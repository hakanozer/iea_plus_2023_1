import React from 'react'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-body-dark">
    <div className="container-fluid">
        <div className="navbar-brand" >Kategoriler</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
        </div>
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar