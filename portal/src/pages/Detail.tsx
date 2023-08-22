import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../Api'
import { Product } from '../models/IProducts'
import { toast } from 'react-toastify'
import { Rating } from 'react-simple-star-rating'
import ImageGallery from "react-image-gallery";

function Detail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState<Product>()
  const [images, setImages] = useState<any[]>()

  useEffect( () => {
    const idNum = Number(id)
    if ( Number.isNaN(idNum) || idNum < 1 ) {
        navigate('/')
    }else {
        // servis ziyaretinde bulun
        toast('Yükleniyor', {
            position: "top-center",
            theme: "light",
            hideProgressBar: true,
        })
        getSingleProduct(idNum).then( res => {
            const dt = res.data
            setItem(dt)
            const arr = []
            for (let i = 0; i < dt.images.length; i++) {
                const item = dt.images[i];
                const image = {
                    original: item,
                    thumbnail: item
                }
                arr.push(image)
            }
            setImages(arr)
            toast.dismiss()
        }).catch(err => {
            toast.dismiss()
            toast.error('Servis Hatası!')
        })
    }
  }, [])

  return (
    <>
        { item &&
            <>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3'>
                        <h2>{item.title}</h2>
                        <div className="card">
                            <div className="card-body">
                            {item.description}
                            </div>
                        </div>
                        <span className="badge text-bg-success fs-5 p-2 mt-3 mb-3">{item.price}₺</span>
                        <span className='float-end mt-3 mb-3' style={{marginLeft: 10,}}>
                            <Rating initialValue={item.rating} readonly={true} size={22} showTooltip={true} tooltipDefaultText={item.rating.toString()} />
                        </span>
                        <div>
                            <span className="badge text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>-% {item.discountPercentage}</span>
                            <span className="badge text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>Stok: {item.stock}</span>
                            <span className="badge text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}> {item.brand}</span>
                            <span className="badge text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}> {item.category}</span>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                        { images &&
                            <ImageGallery 
                            items={images}
                            showNav={false}
                            useBrowserFullscreen={false}
                            showPlayButton={false}
                            autoPlay={true}
                            />
                        }
                    </div>
                </div>
                
            </>
        }
    </>
  )
}

export default Detail