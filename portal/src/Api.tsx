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

// Get 4 Random Product
export const get4RandomProducts = (limit: number, skip:number) => {
    const sendObj = {
        limit: limit,
        skip: skip
    }
    return config.get<IProducts>('products', { params: sendObj })
}

// Get all categories
export const getAllCats = () => {
    return config.get<string[]>('products/categories')
}

// Single Category in Products
export const singleCategoryProducts = (catName: string) => {
    return config.get<IProducts>('products/category/'+catName)
}
