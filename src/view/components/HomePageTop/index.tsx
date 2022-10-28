import React, {FC, useState, useEffect} from 'react';
import { IProd } from '../../../types';
import TopList from './components/TopList';

const HomePageTop:FC<IProd> = () => {
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
            <TopList products={products}/>
        </div>
    );
};

export default HomePageTop;
