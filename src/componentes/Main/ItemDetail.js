import React, { useContext, useState } from "react";
import { contexto } from "../Context/CustomProvider";
import Contador from "./Contador";


const ItemDetail = ({ item }) => {

    const cuota = item.price / 3

    const [confirmado,setConfirmado] = useState(false)
    const {agregarProducto} = useContext(contexto)
    const [cantidadAux, setCantidadAux] = useState(1)

    const onAdd = (cantidad) => {
      setCantidadAux(cantidad)
        setConfirmado(true)

    }
    
    const handleClickAux = () => {
      agregarProducto(item,cantidadAux)
    }
  return (
    <div className="detailContainer">
    
      <img className="imgDetalle" src={item.image} alt="imagen producto seleccionado"></img>
      <div className="detalles">
        <h1>{item.title}</h1>
        <h2>${item.price}</h2>
        <p>Todos los precios están expresados en Pesos </p>
        <hr/>
        <p className="detalleCuota">Hasta <b>3</b> cuotas sin interés de <b>${cuota.toFixed(2)}</b></p>
        <hr/>
        <Contador stock = {10} onAdd={onAdd}/>
        {confirmado && <button onClick={handleClickAux} className="agregarAlCarrito btn">Agregar al carrito</button>}
      </div>
    
    </div>
  );
};

export default ItemDetail;
