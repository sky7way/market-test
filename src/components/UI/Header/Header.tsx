import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Search } from '../Search/Search';
import { RoutePath } from '../../../config/route/route';
import { ShoppingCartIcon } from '../../Icons/ShoppingCartIcon';
import { Container } from '../../Common/Container/Container';
import { useAppDispatch } from '../../../hooks/redux';
import { searchProduct } from '../../../store/slices/productSlice';
import { SearchIcon } from '../../Icons/SearchIcon';

type LinkType = { to: string; lable: string | React.ReactNode };

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const links: LinkType[] = [
    {
      to: RoutePath['/'],
      lable: 'Главная',
    },
    {
      to: RoutePath.goods,
      lable: 'Товары',
    },
    {
      to: RoutePath.about,
      lable: 'О нас',
    },
    {
      to: RoutePath.contacts,
      lable: 'Контакты',
    },
    {
      to: RoutePath.cart,
      lable: <ShoppingCartIcon />,
    },
  ];

  const searchClick = () => {
    const productName = search.trim().toLowerCase();
    dispatch(searchProduct(productName));
    setIsSearching(false);
  };

  const onCangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value.trim().toLowerCase();
    setSearch(newSearch);
    if (isSearching) {
      dispatch(searchProduct(newSearch));
    }
  };

  const resClick = () => {
    setSearch('');
    dispatch(searchProduct(''));
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <span className={styles.navbar_logo}>Market Test</span>
          <div className={styles.header_search}>
            <Search
              className={styles.navbar_search}
              value={search}
              onChange={onCangeHandler}
            />
            <div className={styles.navbar_searchRes} onClick={resClick}>
              x
            </div>
            <div className={styles.navbar_searchIcon} onClick={searchClick}>
              <SearchIcon />
            </div>
          </div>
          <nav>
            <ul className={styles.ul}>
              {links.map(({ lable, to }) => (
                <li key={to} className={styles.li}>
                  <Link to={to}>{lable}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
