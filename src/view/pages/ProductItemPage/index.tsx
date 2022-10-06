import React, { FC, useState, useEffect } from "react";
import { IProd } from "../../../types";

const ProductItemPage: FC = () => {
  const [product, setProduct] = useState<IProd | null>(null);

  useEffect(() => {
    fetch("store.json")
      .then((response) => response.json())
      .then((products: IProd[]) => {
        setProduct(product);
        console.log(product);
      });
  }, []);
  return (
    <></>
  );
};

export default ProductItemPage;
