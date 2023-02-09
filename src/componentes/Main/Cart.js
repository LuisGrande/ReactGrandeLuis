import { useContext } from "react";
import { contexto } from "../Context/CustomProvider";

const Cart = () => {

    const {carrito,agregarProducto} = useContext(contexto)

    const handleClick = () => {
        agregarProducto()
    }
    
    console.log(carrito.cantidad)
    
    return(
        <div className="carritoDeCompras">
            <div className="infoCartProduct">
                <span className="cantidadProductoCarrito">
                  {carrito.cantidad}
                </span>
                <p className="tituloProductoCarrito">
                    {carrito.title}
                </p>
                <span className="precioProductoCarrito">
                    $80
                </span>
            </div>

            <h1>este es el carrito</h1>
            <h3>{contexto.title}</h3>
            <h3>{contexto.price}</h3><br/>
            <br/>
           <button onClick={handleClick}>agregar</button>
            {JSON.stringify(carrito)}
        </div>
    )
}

export default Cart


