import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { getCustomer } from '../util'
import { useNavigate } from 'react-router-dom'
import { userCart } from '../Api'
import { UserCartModel } from '../models/UserCartModel'
import {Helmet} from "react-helmet";

function Cart() {

  const navigate = useNavigate()
  const [cartInfo, setCartInfo] = useState<UserCartModel>()
  useEffect(() => {
    pullCart()
  }, [])

  const pullCart = () => {
    const customer = getCustomer()
    if ( customer !== null ) {
        userCart(customer.id).then(res => {
            const dt = res.data
            if (dt) {
                setCartInfo(dt)
            }
        })
    }else {
        navigate('/')
    }
  }

  const deleteProduct = ( pid: number ) => {
    console.log(pid)
    pullCart()
  }
  

  return (
    <>
        <Header />
        <NavBar />
        { cartInfo &&
            <>
                <Helmet>
                    <title>E-Commerce - Cards</title>
                    <meta name='description' content={'E-Commerce - Cards'}></meta>
                </Helmet>
                <h2>Product List</h2>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">total</th>
                    <th scope="col">-%</th>
                    <th scope="col">Discounted Price</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>    
                <tbody>

                    { cartInfo.carts[0].products.map( (item, index) =>  
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.price}₺</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                            <td>{item.discountPercentage}</td>
                            <td>{item.discountedPrice}₺</td>
                            <td>
                                <i role='button' onClick={() => deleteProduct(item.id)} className="bi bi-trash3 text-danger"></i>
                            </td>
                        </tr>
                    )}

                    <tr className='customRow'>
                        <td colSpan={5}></td>
                        <td><b>Total</b></td>
                        <td>{cartInfo.carts[0].total }₺</td>
                    </tr>
                    <tr className='customRow'>
                        <td colSpan={5}></td>
                        <td><b>Discounted Total</b></td>
                        <td>{cartInfo.carts[0].discountedTotal }₺</td>
                    </tr>
                    <tr className='customRow'>
                        <td colSpan={5}></td>
                        <td><b>Total Products</b></td>
                        <td>{cartInfo.carts[0].totalProducts }</td>
                    </tr>
                    <tr className='customRow'>
                        <td colSpan={5}></td>
                        <td><b>Total Quantity</b></td>
                        <td>{cartInfo.carts[0].totalQuantity }</td>
                    </tr>
                    <tr className='customRow noBorder'>
                        <td colSpan={5}></td>
                        <td></td>
                        <td>
                        <button className='btn btn-success'><i className="bi bi-credit-card"></i> Payment</button> 
                        </td>
                    </tr>
                    
                </tbody>
                </table>
            </>
        }
    </>
  )
}

export default Cart