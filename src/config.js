const BASE_URL = 'http://172.20.10.3:3000';

export const API = {
  LOGIN: `${BASE_URL}/users/signin`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LIST: `${BASE_URL}/products`,
  DETAIL: `${BASE_URL}/products`,
  CART: `${BASE_URL}/carts`,
  ORDER: `${BASE_URL}/order`,
};
