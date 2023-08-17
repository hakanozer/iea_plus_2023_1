import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api'
import { IProducts } from '../models/IProducts'

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
       { proObj && proObj.products.map( (item, index) => 
          <div key={index}>
            <div>{item.title} - {item.price}</div>
            <div> {item.images[0]} </div>
          </div>
       )}
    </>
  )
}

export default Home