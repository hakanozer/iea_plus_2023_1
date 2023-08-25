import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../Api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import SimpleImageSlider from "react-simple-image-slider";

// import images
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';

function Home() {

  const images = [
    { url: img1 },
    { url: img2 },
  ];

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
      <div className='mb-3' style={{ position: 'relative',}} >
        <SimpleImageSlider
          width={'100%'}
          height={300}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <div className='row'>
       { proObj && proObj.products.map( (item, index) => 
          <ProductItem item={item} key={index} />
       )}
      </div>
    </>
  )
}

export default Home