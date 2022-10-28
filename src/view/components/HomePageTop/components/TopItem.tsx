import React, { FC } from "react";
import { IProd } from "../../../../types";

interface TopItemProps {
  product: IProd;
  number: number;
  key: any;
}

const TopItem: FC<TopItemProps> = ({ product, number, key }) => {
  return (
    <div className="interesting-post">
      <div className="interesting-post-img">
        <img src={product.url} alt="img" />
      </div>
      <div className="interesting-post-content">
        <div className="data">{product.name}</div>
        <div className="interesting-post-title">{product.description}</div>
        <div className="interesting-post-text">
          {product.price} $
        </div>
      </div>
    </div>
  );
};

export default TopItem;
