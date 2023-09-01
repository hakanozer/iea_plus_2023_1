import axios from 'axios'
import { IProducts, Product } from './models/IProducts';
import { UserModel } from './models/UserModel';
import { CardModel } from './models/CardModel';

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

// User Login
export const login = ( username: string, password: string ) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<UserModel>('auth/login', sendObj)
}

// Add Card
export const addCard = ( userId: number, id: number ) => {
    const sendObj = {
        userId: userId,
        products: [
          {
            id: id,
            quantity: 1,
          }
        ]
    }
    return config.post<CardModel>('carts/add', sendObj)
}
