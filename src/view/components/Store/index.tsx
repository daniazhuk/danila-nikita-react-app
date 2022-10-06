import React, { FC, useState, useEffect } from "react";
import { IProd } from "../../../types";
import StoreList from "./components/StoreList";

const Store: FC<IProd> = () => {
  const [products, setProducts] = useState<IProd[]>([]);

  useEffect(() => {
    fetch("store.json")
      .then((response) => response.json())
      .then((products: IProd[]) => {
        setProducts(products);
        console.log(products);
        
      });
  }, []);
  return (
    <div>
      <StoreList products={products}/>
    </div>
  );
};

export default Store;
