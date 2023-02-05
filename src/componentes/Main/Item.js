import React from "react";
import {Link} from "react-router-dom"
import Contador from "./Contador";

const Item = ({producto}) => {
  
    return(
        <div className="item">
            <img className="imgProducto" src={producto.image}  alt={producto.title}/>
            <article className="info">
                <h2 className="title">{producto.title}</h2>
                <hr/>
                <h5 className="price">${producto.price}</h5>
                <hr/>
            </article>
            <div className="buttom">
                <Link className="btn" to={`/detalle/${producto.id}`} >Detalle del Producto</Link>
                <button className="btn">Agregar al Carrito</button>
            </div>

        </div>
    )
}

export default Item