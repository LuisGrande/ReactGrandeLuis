import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { products } from "../../helpers/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);

  // const aux = useParams()
  const { categoryName } = useParams();

  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        // console.log(products)
       const productoFiltrado = products.filter((prod)=>prod.category === categoryName)

        const prodListados = categoryName 
        ? productoFiltrado 
        : products

        setTimeout(() => {
          res(prodListados);
        }, 500);
      });
    };
    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className="container container-page">
      <h2>{saludo}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
