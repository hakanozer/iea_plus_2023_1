import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addCard, get4RandomProducts, getSingleProduct } from '../Api'
import { IProducts, Product } from '../models/IProducts'
import { toast } from 'react-toastify'
import { Rating } from 'react-simple-star-rating'
import ImageGallery from "react-image-gallery";
import ProductItem from '../components/ProductItem'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { getCustomer } from '../util'
import {Helmet} from "react-helmet";
import { Animate }  from 'react-simple-animate';

function Detail() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState<Product>()
  const [images, setImages] = useState<any[]>()
  const [isLoad, setIsLoad] = useState(false)

  useEffect( () => {
    const idNum = Number(id)
    if ( Number.isNaN(idNum) || idNum < 1 ) {
        navigate('/')
    }else {
        // servis ziyaretinde bulun
        setIsLoad(false)
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
            setTimeout(() => {
                setIsLoad(true)
            }, 800);
        }).catch(err => {
            toast.dismiss()
            toast.error('Servis Hatası!')
        })
    }
  }, [])

  const [proObj, setProObj] = useState<IProducts>()
  useEffect(() => {
    const skip = Math.floor(Math.random() * 96)
    get4RandomProducts(4, skip).then( res => {
        const dt = res.data
        setProObj(dt)
    } )
  }, [])
  

  const addBasket = () => {
    const customer = getCustomer()
    if ( customer === null ) {
        navigate('/login')
    }else {
        addCard(customer.id, item!.id).then(res => {
            const dt = res.data
            if (dt) {
                toast.success("Add basket success")
            }
        }).catch(err => {
            toast.error("Add Basket Fail")
        })
    }
  }


  return (
    <>
        { item &&
            <>
                <Helmet>
                    <title>{item.title}</title>
                    <meta name='description' content={item.description}></meta>
                </Helmet>
                <Header />
                <NavBar />
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3'>
                        <Animate
                            play={isLoad}
                            start={{ 
                                opacity: 0,
                                transform: "translateX(100px)" 
                            }}
                            end={{ 
                                opacity: 1,
                                transform: "translateX(0px)"  
                            }}
                        >
                            <h2>{item.title}</h2>
                        </Animate>
                        
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
                        <button onClick={addBasket} className='btn btn-outline-secondary'><i className="bi bi-cart-plus"></i> Add Basket</button>
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

                <h2>Sizin için seçtiklerimiz</h2>
                <hr></hr>
                <div className='row'>
                { proObj && proObj.products.map( (item, index) => 
                    <ProductItem item={item} key={index} />
                )}
                </div>
            </>
        }
    </>
  )
}

export default Detail