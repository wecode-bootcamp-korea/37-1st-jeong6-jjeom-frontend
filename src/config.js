const BASE_URL = 'http://192.168.254.104:3000';

export const API = {
  LOGIN: `${BASE_URL}/users/signin`,
  SIGNUP: `${BASE_URL}/users/signup`,
  LIST: `${BASE_URL}/products`,
  DETAIL: `${BASE_URL}/products`,
  CART: `${BASE_URL}/carts`,
  ORDER: `${BASE_URL}/order`,
};
