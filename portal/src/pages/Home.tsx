import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Home() {

  const [proObj, setProObj] = useState<IProducts>()

  useEffect( () => {
    getAllProducts().then( res => {
      // işlem başarılı, datalar geldi.
      const dt = res.data
      setProObj(dt)
    }).catch(err => {
      // işlemde hata varsa çalışacak kodlar.
      alert('Servis Hatası Oluştu!')
    })
  }, [])

  return (
    <>
      <div className='row'>
       { proObj && proObj.products.map( (item, index) => 
          <ProductItem item={item} key={index} />
       )}
      </div>
    </>
  )
}

export default Home