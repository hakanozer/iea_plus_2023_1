import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../Api'
import { Product } from '../models/IProducts'

function Detail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState<Product>()

  useEffect( () => {
    const idNum = Number(id)
    if ( Number.isNaN(idNum) || idNum < 1 ) {
        navigate('/')
    }else {
        // servis ziyaretinde bulun
        getSingleProduct(idNum).then( res => {
            const dt = res.data
            setItem(dt)
        }).catch(err => {
            alert("Service Error")
        })
    }
  }, [])

  return (
    <>
        { item &&
            <>
                <h1>{item.title}</h1>
            </>
        }
    </>
  )
}

export default Detail