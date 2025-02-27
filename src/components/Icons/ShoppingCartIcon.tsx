import React from 'react';
import style from '../UI/Header/Header.module.scss'
import { useAppSelector } from '../../hooks/redux';

const SvgCart = () => {
  return (
    <svg className={style.svg} focusable="false" aria-hidden="true" viewBox="-8 -8 40 40" fill="currentColor">
    <path d="m17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2">
    </path>
    </svg>
  )
}

export const ShoppingCartIcon: React.FC = () => {

  const productstLenght = useAppSelector(state => state.cart.products.length);

  return (
    <div style={{display: "flex", alignItems: "center"}}>
    <SvgCart/>
    <div className={style.count}>{productstLenght}</div>
    </div>
  )
};
