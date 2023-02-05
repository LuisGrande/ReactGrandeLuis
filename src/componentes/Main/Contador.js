import React from "react";
import { useState } from "react";

const Contador = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
     
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
   
    }
  };

  const handleConfirmar = () => {
    onAdd(cantidad)
  }

  return (
    <div className="containerContador">
      <div className="contador">
        <div className="BotonesAgregar">
          <button disabled = {cantidad == 1}onClick={restar}>-</button>
          <p className="cantidad">{cantidad}</p>
          <button disabled={cantidad === stock} onClick={sumar}>
            +
          </button>
        </div>
      <button className="btn btnConfirmar" onClick={handleConfirmar}>
        confirmar
      </button>
      </div>
    </div>
  );
};

export default Contador;
