import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { firstUpper } from '../util'
import { singleCategoryProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Category() {

  const [proObj, setProObj] = useState<IProducts>()
  const { catName } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    singleCategoryProducts(catName!).then( res => {
        const dt = res.data
        if ( dt ) {
            if ( dt.products.length === 0 ) {
                navigate('/')
            }else {
                setProObj(dt)
            }
        }
    })
  }, [])
  

  return (
    <>
        <NavBar/>
        <div className='container-fluid'>
            <h2>{firstUpper(catName!)}</h2>
            <div className='row'>
                { proObj && proObj.products.map( (item, index) => 
                    <ProductItem item={item} key={index} />
                )}
            </div>
        </div>
        
    </>
  )
}

export default Category