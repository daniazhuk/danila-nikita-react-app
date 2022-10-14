<<<<<<< HEAD
import React, {FC, useState, useEffect, useContext} from "react";
=======
import React, { FC, useState, useEffect } from "react";
import { urlToHttpOptions } from "url";
>>>>>>> 5f42409aefcba157e061ee97d265aa27a5879cad
import { IProd } from "../../../types";
import Select from "../../common/Select/Select";
import StoreList from "./components/StoreList";
import {ModalContext} from "../../common/Modal/ModalContext";

const Store: FC<IProd> = () => {
  const [products, setProducts] = useState<IProd[]>([]);
<<<<<<< HEAD
  const [selectedSort, setSelectedSort] = useState()
  const {modal, close, open} = useContext(ModalContext)
=======
  const [selectedSort, setSelectedSort] = useState<number>()
>>>>>>> 5f42409aefcba157e061ee97d265aa27a5879cad


  useEffect(() => {
    fetch("store.json")
      .then((response) => response.json())
      .then((products: IProd[]) => {
        setProducts(products);
        console.log(products);
        
      });
  }, []);

  const sortProducts = (sort: any) => {
    if (sort === 'price') {
      setSelectedSort(sort)
      console.log(sort)
      setProducts([...products].sort((a,b) => (a as any)[sort] - (b as any)[sort]))
    }
    if (sort === '') {
      setSelectedSort(sort)
      console.log(sort)
    } else {
      setSelectedSort(sort)
      console.log(sort)
    setProducts([...products].sort((a,b) => (a as any)[sort].localeCompare((b as any)[sort])))
    }
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
       { modal && <Modal title="Are you sure that you want but this old items?" onClose={open}>

       </Modal> }
    </div>
  );
};

export default Store;
