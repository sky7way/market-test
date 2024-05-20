import api from './api';

export interface ApiProduct {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const endPoints = {
  product: 'posts',
};

class Product {
  async getProduct() {
    const { data } = await api.get<ApiProduct[]>(endPoints.product);
    return data;
  }
}

export const productApi = new Product();
