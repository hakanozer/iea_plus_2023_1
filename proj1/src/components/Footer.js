import React from 'react'

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img className="bi me-2" src='google_icon.png' alt=''></img>
        </a>

        <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="?#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="?#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="?#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li className="nav-item"><a href="?#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li className="nav-item"><a href="?#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
    </footer>
  )
}

export default Footer