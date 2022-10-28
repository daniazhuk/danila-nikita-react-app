import React, { FC } from "react";
import {IProd} from "../../../../types" 
import TopItem from "./TopItem";


interface TopListProps{
  products:IProd[]
}

const TopList: FC<TopListProps> = ({ products }) => {
  if (!products.length) {
    return (
      <p className="no-posts">
        there are no items with this name..... sad.......
      </p>
    );
  }

  return (
    <div className="interesting-posts-container">
      <hr  />
      <strong >
        Top Products
      </strong>
      <div className="interesting-posts">
        {products.map((product, index) => (
          <TopItem number={index + 1} product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default TopList;
