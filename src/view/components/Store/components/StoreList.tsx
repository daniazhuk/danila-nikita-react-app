import React, { FC } from "react";
import { IProd } from "../../../../types";
import StoreItem from "./StoreItem";

interface ProdListProps{
  products:IProd[]
}

const StoreList: FC<ProdListProps> = ({ products }) => {
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
        INTERESTING
      </strong>
      <div className="interesting-posts">
        {products.map((product, index) => (
          <StoreItem number={index + 1} product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
