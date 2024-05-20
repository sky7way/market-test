import { FC, useEffect } from 'react';
import { ProductList } from '../../components/UI/ProductList/ProductList';
import { productApi } from '../../api/products';

export const Goods: FC = () => {
  const fechProduct = async () => {
    const result = await productApi.getProduct();
  };

  useEffect(() => {
    fechProduct();
  }, []);
  return <ProductList />;
};
