import React, {FC, useState, useEffect, useContext} from "react";
import { IProd } from "../../../types";
import Select from "../../common/Select/Select";
import StoreList from "./components/StoreList";
import {ModalContext} from "../../common/Modal/ModalContext";

const Store: FC<IProd> = () => {
  const [products, setProducts] = useState<IProd[]>([]);
  const [selectedSort, setSelectedSort] = useState()
  const {modal, close, open} = useContext(ModalContext)


  useEffect(() => {
    fetch("store.json")
      .then((response) => response.json())
      .then((products: IProd[]) => {
        setProducts(products);
        console.log(products);
        
      });
  }, []);

  const sortProducts = (sort: any) => {
    setSelectedSort(sort)
    setProducts([...products].sort((a,b) => a[sort].localeCompare(b[sort])))
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
        {value: "name", name:"by name"}
      ]}/>
      <StoreList products={products}/>
       { modal && <Modal title="Are you sure that you want but this old items?" onClose={open}>

       </Modal> }
    </div>
  );
};

export default Store;
