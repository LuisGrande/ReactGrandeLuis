import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const agregarProducto = () => {

    const testProducto = {
      id: 1,
      nombre: "producto1",
      precio: 10000,
      cantidad: 5,
    };

    setCarrito([testProducto]);
    setTotal(testProducto.precio * testProducto.cantidad);
    setCantidad(testProducto.cantidad);
  };

  const valorDelContexto = {
    carrito,
    total,
    cantidad,
    agregarProducto,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
