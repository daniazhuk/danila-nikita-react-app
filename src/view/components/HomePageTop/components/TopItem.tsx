import React, { FC } from "react";
import { IProd } from "../../../../types";
import "../top.css";

interface TopItemProps {
  product: IProd;
  number: number;
  key: any;
}

const TopItem: FC<TopItemProps> = ({ product, number, key }) => {
  return (
    <div className="post">
      <div className="data">{product.name}</div>
      <div className="img-and-title">
        <div className="post-img">
          <img src={product.url} alt="img" />
        </div>
        <div className="post-content">
          <div className="post-title">{product.description}</div>
          <div className="post-text">{product.price} $</div>
        </div>
      </div>
      <img src="https://i.gifer.com/origin/d6/d6abed6047c79b8073fda9af7ba85358.gif"  className="sign" alt="img"/>
    </div>
  );
};

export default TopItem;
