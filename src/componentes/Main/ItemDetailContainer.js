import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../helpers/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})

    const {idProduct} = useParams()
    console.log(idProduct)
    
    
    useEffect(()=>{
        const getProduct = () => {
            return new Promise((res,rej)=>{
                
                const productoEncontrado = products.find((prod) =>  prod.id =2)
              
                setTimeout(() => {
                    res(productoEncontrado)
                }, 500);
            })
        }
    getProduct()
    .then((res)=>{
        setItem(res)
    })
    .catch((error)=>{
        console.log(error)
    })
    },[])


    return(
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail  item={item}/>
        </div>
    )
}

export default ItemDetailContainer;