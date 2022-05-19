import axios from 'axios'
import authHeader from './auth.header';
const host = "http://localhost:8082/api/v2";



// get all product categories
export const getProductCategories = async() => {
    try{
    const res = await axios.get(`${host}/item/itemTypes`);
    return res.data
    }
    catch(e){
        console.log(e)
    }
}


// get all product sub categories
export const getProductSubCategories = async() => {
    try{
    const res = await axios.get(`${host}/item/itemTypes`);
    return res.data
    }
    catch(e){
        console.log(e)
    }
}

// get all products
export const getAllProducts = async() => {
    try{
    const res = await axios.get(`${host}/item`);
    return res.data
    }
    catch(e){
        console.log(e)
    }
}

// add new product
export const addProduct = async(params) =>{
    console.log("sdkfkf", params)
    try{
        // let res = await axios.post(`${host}/item`,{headers: authHeader()})
        let res = await axios.post(host+ "/item",params,{headers: authHeader()})

        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// update existing product
export const updateProduct = async(id, params)=>{
    try{
        let res = await axios.put(`${host}/item/${id}`,params)
        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}

// add to cart
export const addToCart = async(params) =>{
    console.log("cart items",params)
    try{
        let response = await axios.post(`${host}/cart/addItem`,params)
        return response.data
    }catch(e){
        console.log("error found :", e.message)
    }
}


// delete existing item
export const deleteProduct = async(id, params)=>{
    try{
        let res = await axios.delete(`${host}/item/${id}`,params)
        return res.data
    }catch(e){
        console.log("error found :", e.message)
    }
}


