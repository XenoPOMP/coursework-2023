import axios from 'axios';

const API_URL = 'https://cex.io/api/';

axios.defaults.baseURL = API_URL;

export const BitcoinCurrencyService = {
  async getBitcoinCurrency() {
    return axios.get(`/last_price/BTC/USD`);
  },
};
