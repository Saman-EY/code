import axios from 'axios';

let BASE_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=220&page=1&sparkline=false';

let getCoins = async () => {
    let response = await axios.get(BASE_URL);
    return response.data;
};

export { getCoins };
