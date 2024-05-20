import { useParams } from 'react-router-dom';
import style from './InsideProduct.module.scss';
import { SuperButton } from '../../Button/Button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addProductCart } from '../../../store/slices/cartSlice';

export const InsideProduct = () => {
  const params = useParams();
  const [isImageLarged, setIsImageLarged] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  const findeProduct = products.find((el) => el.id === Number(params?.id));
  // let lableProduct = `-${findeProduct?.lable}%`;
  // let discountAmount = (Number(findeProduct?.price) * (Number(findeProduct?.lable) / 100));
  // let discountPrice = Math.floor(Number(findeProduct?.price) - discountAmount);

  const includeProduct = useAppSelector(
    (state) => !!state.cart.products.find((el) => el.id === findeProduct?.id)
  );

  const onClickHandlerImg = () => {
    setIsImageLarged(!isImageLarged);
  };

  if (!findeProduct) {
    return <span>Продукт не найден</span>;
  }

  const addToCart = () => {
    dispatch(addProductCart(findeProduct));
  };

  return (
    <div
      className={`${style.container_product} ${
        isImageLarged ? style.container_larged : ''
      }`}
    >
      <div className={style.product}>
        <div className={style.product_top}>
          {isImageLarged ? (
            <img
              className={`${style.product_img} ${
                isImageLarged ? style.product_img_larged : ''
              }`}
              src={
                'https://img.freepik.com/free-photo/teen-girls-fencing-costumes-with-swords-hands-isolated-white-studio-background-young-female-models-practicing-training-motion-action-copyspace-sport-youth-healthy-lifestyle_155003-30898.jpg?w=1380&t=st=1714039103~exp=1714039703~hmac=78247e913d42dcddfd9e03c3e53cc987a8059456ec2df3066d5bb89284dfe1a1'
              }
              alt="product"
              onClick={onClickHandlerImg}
            />
          ) : (
            <img
              className={style.product_img}
              src={
                'https://img.freepik.com/free-photo/teen-girls-fencing-costumes-with-swords-hands-isolated-white-studio-background-young-female-models-practicing-training-motion-action-copyspace-sport-youth-healthy-lifestyle_155003-30898.jpg?w=1380&t=st=1714039103~exp=1714039703~hmac=78247e913d42dcddfd9e03c3e53cc987a8059456ec2df3066d5bb89284dfe1a1'
              }
              alt="product"
              onClick={onClickHandlerImg}
            />
          )}
          {10 > 0 ? <div className={style.product_lable}>-{10}%</div> : null}
        </div>
        <div className={style.product_bottom}>
          <span className={style.product_name}>{findeProduct.title}</span>
          <p>{findeProduct.body}</p>
          <div className={style.product_prices}>
            <div className={style.product_price__discount}>{100} ₽</div>
            <div className={style.product_price__common}>{100} ₽</div>
          </div>
          <SuperButton
            name={!includeProduct ? 'Купить' : 'В корзине'}
            onClick={addToCart}
            className={style.product_button}
            disabled={includeProduct}
          />
        </div>
      </div>
    </div>
  );
};
