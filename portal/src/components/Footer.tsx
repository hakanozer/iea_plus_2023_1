import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <NavLink to={'/'} className="nav-link px-2 text-body-secondary">Home</NavLink>
            </li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2023 Portal E-Commerce</p>
        </footer>
    </div>
    </>
  )
}

export default Footer