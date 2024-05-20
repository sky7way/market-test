import { RouteProps } from "react-router-dom";
import { Cart } from "../../pages/Cart/Cart";
import { Goods } from "../../pages/Goods/Goods";
import { About } from "../../pages/About/About";
import { Contacts } from "../../pages/Contacts/Contacts";
import { InsideGoods } from "../../pages/Goods/InsideGoods";

export enum AppRoutes {
  MAIN = '/',
  ABOUT = 'about',
  CART = 'cart',
  GOODS = 'goods',
  CONTACTS = 'contacts',
  INSIDEGOODS = 'product'
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.GOODS]: '/goods',
  [AppRoutes.CONTACTS]: '/contacts',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.INSIDEGOODS]: '/goods/:id'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath['/'],
    element: <Goods/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About/>
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <Cart />
  },
  [AppRoutes.GOODS]: {
    path: RoutePath.goods,
    element: <Goods/>
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <Contacts/>
  },
  [AppRoutes.INSIDEGOODS]: {
    path: RoutePath.product,
    element: <InsideGoods/>
  }
};
