import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { SuperButton } from '../../Button/Button';
import { deleteProductCart } from '../../../store/slices/cartSlice';
import style from './Cart.module.scss';
import { ApiProduct } from '../../../api/products';

export const CartComponents: FC = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const deleteProduct = (product: ApiProduct) => {
    dispatch(deleteProductCart(product));
  };

  return (
    <>
      <h2>Ваша корзина</h2>
      {products.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        products.map((el) => (
          <div key={el.id} className={style.container_product}>
            <div className={style.card_product}>
              <SuperButton
                name={'X'}
                onClick={() => deleteProduct(el)}
                className={style.delete_product}
              />
              <div className="left_product">
                <img
                  src={
                    'https://img.freepik.com/free-photo/teen-girls-fencing-costumes-with-swords-hands-isolated-white-studio-background-young-female-models-practicing-training-motion-action-copyspace-sport-youth-healthy-lifestyle_155003-30898.jpg?w=1380&t=st=1714039103~exp=1714039703~hmac=78247e913d42dcddfd9e03c3e53cc987a8059456ec2df3066d5bb89284dfe1a1'
                  }
                  alt={el.title}
                  className={style.img_product}
                />
                {10 > 0 && <div className={style.lable_product}>-{10}%</div>}
              </div>
              <div className={style.right_product}>
                <div className={style.name_product}>{el.title}</div>
                <div className={style.body_product}>{el.body}</div>
                <div className={style.price_product}>
                  {10 > 0 && (
                    <div className={style.discountPrice}>
                      {Math.floor(100 - 30 * (10 / 100))} ₽
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
