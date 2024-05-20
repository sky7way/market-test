import { FC, useEffect } from 'react';
import style from './ProductList.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getProduct } from '../../../store/slices/productSlice';
import { ProductCard } from '../ProductCard/ProductCard';
export const ProductList: FC = () => {
  const productList = useAppSelector((state) => state.product.currentProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className={style.products_list}>
      {productList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};
