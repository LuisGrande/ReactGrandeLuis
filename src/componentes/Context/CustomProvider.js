import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = (producto, cantidad) => {
    producto.cantidad = cantidad
    setCarrito([producto]);
    setTotal(producto.precio * cantidad);
    setCantidad(cantidad);
  };

  const eliminarProducto = () => {

  }

  const vaciarCarrito = () => {

  }
  
  const estaEnCarrito = () => {
    //retorna true o false si esta en el carrito
  }

  const valorDelContexto = {
    carrito,
    total,
    cantidad,
    agregarProducto,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
