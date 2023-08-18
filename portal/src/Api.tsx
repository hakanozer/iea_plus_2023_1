import axios from 'axios'
import { IProducts, Product } from './models/IProducts';

const baseURL = 'https://dummyjson.com/';
const config = axios.create({
    baseURL: baseURL,
    timeout: 15000
})

// Get All Product
export const getAllProducts = () => {
    return config.get<IProducts>('products')
}

// Single Product
export const getSingleProduct = ( id: number ) => {
    return config.get<Product>('products/'+id) 
}
