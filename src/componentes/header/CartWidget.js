import { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "../../img/carrito.svg";
import { contexto } from "../Context/CustomProvider";

const CartWidget = () => {

    const {cantidad} = useContext(contexto)

 
    return(
       <div className="containerCarrito">
        <Link to="/cart">
         <img src={carrito} alt="carrito"/>
        </Link>
       
        <span className="cantidadProductos">
         {cantidad}
        </span>
       
       </div>
    )
}

export default CartWidget;