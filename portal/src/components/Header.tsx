import React, { FormEvent, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getCustomer } from '../util'
import { UserModel } from '../models/UserModel'
import { userCart } from '../Api'

function Header() {

  const [customer, setCustomer] = useState<UserModel>()
  const [totalProduct, setTotalProduct] = useState(0)
  useEffect(() => {
    const customer = getCustomer()
    if (customer !== null ) {
      setCustomer(customer)
      userCart(customer.id).then( res => {
        const dt = res.data
        if (dt) {
          setTotalProduct( dt.carts[0].totalProducts )
        }
      } )
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('customer')
    window.location.href = '/'
  }

  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const fncSendSearch = (evt:FormEvent) => {
    evt.preventDefault()
    //navigate('/search/'+search)
    window.location.href = '/search/'+search
  }
  
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to={'/'} className="navbar-brand" >Portal</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                { !customer && 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                  </li>
                </>
                }

                { customer && 
                <>
                  <li className="nav-item">
                    <a onClick={logout} className="nav-link" role='button'>Logout</a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={'/cart'}>Cart ( {totalProduct} )</NavLink>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">{ customer.firstName + ' ' + customer.lastName }</a>
                  </li>
                </>
                }

            </ul>
            <form onSubmit={fncSendSearch} className="d-flex" role="search">
                <input onChange={(evt) => setSearch(evt.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Header