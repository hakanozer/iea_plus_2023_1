import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bilgiler, IContent } from '../models/IContent'

function Footer() {

  const [arr, setArr] = useState<Bilgiler[]>([])
  useEffect(() => {
    const url = 'https://jsonbulut.com/json/contentShow.php'
    const sendObj = {
      ref: '1fb75fa2eef1d2cc11c3e21b6fe18613',
      start: 0,
      count: 20
    }
    axios.get<IContent>(url, {params: sendObj}).then( res => {
      const dt = res.data
      if (dt) {
        const bilgiler = dt.contents[0].bilgiler
        setArr(bilgiler)
      }
    })
  }, [])
  

  return (
    <>
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <NavLink to={'/'} className="nav-link px-2 text-body-secondary">Home</NavLink>
            </li>
            { arr && arr.map((item, index) => 
              <li key={index} className="nav-item">
                  <NavLink to={'/contentDetail/'+item.contentId} reloadDocument className="nav-link px-2 text-body-secondary">{item.title}</NavLink>
              </li>
            )}
            
            </ul>
            <p className="text-center text-body-secondary">© 2023 Portal E-Commerce</p>
        </footer>
    </div>
    </>
  )
}

export default Footer