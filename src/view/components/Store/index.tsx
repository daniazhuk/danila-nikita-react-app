import React, { FC, useState, useEffect } from "react";
import { IProd } from "../../../types";
import StoreList from "./components/StoreList";

const Store: FC<IProd> = () => {
  const [products, setProducts] = useState<IProd[]>([]);

  useEffect(() => {
    fetch("/public/Store.json")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return (
    <div>
      <StoreList products={products}/>
    </div>
  );
};

export default Store;
