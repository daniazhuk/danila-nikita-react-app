import React, {FC} from 'react';
import Store from '../../components/Store/index'

const ProductPage:FC = () => {
    return (
        <div>
            <Store id={0} type={''} brand={''} url={''} name={''} description={''} price={0} status={''} />
        </div>
    );
};

export default ProductPage;