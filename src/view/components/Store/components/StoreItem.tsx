import React, { FC } from "react";
import { IProd } from "../../../../types";

interface PostItemProps {
  product:IProd
  number:number
  key:any
}

const StoreItem: FC<PostItemProps> = ({product, number, key}) => {
  return (
    <div className="interesting-post">
      <div className="interesting-post-img">
        <img src="https://www.seekpng.com/png/detail/55-556729_wutang-logo-licences-products-wu-tang-clan-logo.png" />
      </div>
      <div className="interesting-post-content">
        <div className="data">Feb 23   8 min read</div>
        <div className="interesting-post-title">
        {product.description}
        </div>
        <div className="interesting-post-text">
          War of the masses, the outcome disastrous Many of the victim families
          save their ashes A million names on walls, 
        </div>
      </div>
    </div>
    
  );
};


export default StoreItem;
