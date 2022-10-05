import React, { FC } from "react";
import { IProduct } from "../../types";
import StoreList from "./components/StoreList";

const Store: FC<IProduct> = () => {
  return <div>
    <StoreList/>
  </div>;
};

export default Store;
