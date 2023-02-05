import { useContext } from "react";
import { contexto } from "../Context/CustomProvider";

const Cart = () => {

    const {carrito,agregarProducto} = useContext(contexto)

    const handleClick = () => {
        agregarProducto()
    }
    
    
    return(
        <div className="carritoDeCompras">
            <h1>este es el carrito</h1>
           <button onClick={handleClick}>agregar</button>
            {JSON.stringify(carrito)}
        </div>
    )
}

export default Cart