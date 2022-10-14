import React, { FC, useState, useEffect } from "react";
import { IProd } from "../../../types";
import Select from "../../common/Select/Select";
import StoreList from "./components/StoreList";

const Store: FC<IProd> = () => {
  const [products, setProducts] = useState<IProd[]>([]);
  const [selectedSort, setSelectedSort] = useState<number>()


  useEffect(() => {
    fetch("store.json")
      .then((response) => response.json())
      .then((products: IProd[]) => {
        setProducts(products);
        console.log(products);
        
      });
  }, []);

  const sortProducts = (sort: number) => {
    setSelectedSort(sort)
    setProducts([...products].sort((a,b) => (a as any)[sort].localeCompare((b as any)[sort])))
  }
  return (
    <div>
      <Select 
      value={selectedSort}
      onChange={sortProducts}
      defaultValue="Sort"
      options={[
        {value: "type", name:"by type"},
        {value: "price", name:"by price"},
        {value: "name", name:"by name"},
        {value: "", name:"none"}
      ]}/>
      <StoreList products={products}/>
    </div>
  );
};

export default Store;
