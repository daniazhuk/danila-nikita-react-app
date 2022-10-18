import React, {FC, useState, useEffect, useContext} from "react";
import {IProd} from "../../../types";
import Select from "../../common/Select/Select";
import StoreList from "./components/StoreList";
import {ModalContext} from "../../common/Modal/ModalContext";
import Modal from "../../common/Modal/Modal";
import "./product.css"
import ModalQuestion from "../ModalQuestion";

const Store: FC<IProd> = () => {
    const [products, setProducts] = useState<IProd[]>([]);
    const {modal, open, close} = useContext(ModalContext)
    const [selectedSort, setSelectedSort] = useState<number>()
    const optionsArray = [
        {value: "type", name: "by type"},
        {value: "price", name: "by price"},
        {value: "name", name: "by name"},
        {value: "", name: "none"}
    ]


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
            setProducts([...products].sort((a, b) => (a as any)[sort] - (b as any)[sort]))
        }
        if (sort === '') {
            setSelectedSort(sort)
        } else {
            setSelectedSort(sort)
            setProducts([...products].sort((a, b) => (a as any)[sort].localeCompare((b as any)[sort])))
        }
    }
    return (
        <div>

            <Select
                value={selectedSort}
                onChange={sortProducts}
                defaultValue="Sort"
                options={optionsArray}/>

            <StoreList products={products}/>

            <button
                className="modal-button"
                onClick={open}
            >Click it!
            </button>

            {modal && <Modal title="Are you sure that you want buy this old items?" onClose={close}>
                <ModalQuestion/>
            </Modal>}

        </div>
    );
};

export default Store;
