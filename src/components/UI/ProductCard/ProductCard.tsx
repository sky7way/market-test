import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../config/route/route';
import style from './ProductCard.module.scss';
import { SuperButton } from '../../Button/Button';
import {
  addProductCart,
  productIsIncludeProduct,
} from '../../../store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ApiProduct } from '../../../api/products';

export const ProductCard: FC<ApiProduct> = ({ body, id, title, userId }) => {
  const includeProduct = useAppSelector((state) =>
    productIsIncludeProduct(state.cart)(id)
  );

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    nav(`${RoutePath.goods}/${id}`);
  };

  const addToCart = () => {
    dispatch(addProductCart({ body, id, title, userId }));
  };

  return (
    <div className={style.products}>
      <div className={style.products_top}>
        <img
          className={style.products_img}
          src={
            'https://img.freepik.com/free-photo/teen-girls-fencing-costumes-with-swords-hands-isolated-white-studio-background-young-female-models-practicing-training-motion-action-copyspace-sport-youth-healthy-lifestyle_155003-30898.jpg?w=1380&t=st=1714039103~exp=1714039703~hmac=78247e913d42dcddfd9e03c3e53cc987a8059456ec2df3066d5bb89284dfe1a1'
          }
          onClick={() => handleClick(id)}
        />
        {10 > 0 ? <div className={style.products_lable}>-{10}%</div> : null}
      </div>
      <div className={style.products_bottom}>
        <div className={style.products_prices}>
          {10 > 0 ? (
            <div className={style.products_price__discount}>
              {Math.floor(100 - 29 * (10 / 100))} ₽
            </div>
          ) : (
            ''
          )}
          <div className={style.products_price__common}>{100} ₽</div>
        </div>
        <div className={style.products_about}>
          <span
            className={style.products_about__name}
            onClick={() => handleClick(id)}
          >
            {title}
          </span>
          <p className={style.products_about__about}>{body}</p>
        </div>
        <div className={style.products_buttons}>
          <div
            className={
              !includeProduct
                ? style.products_count__none
                : style.products_count
            }
          >
            <button>-</button>
            <span>{}</span>
            <button>+</button>
          </div>
          <SuperButton
            name={!includeProduct ? 'Купить' : 'В корзине'}
            onClick={addToCart}
            className={
              !includeProduct
                ? style.products_button
                : style.products_button_disable
            }
            disabled={includeProduct}
          />
        </div>
      </div>
    </div>
  );
};
