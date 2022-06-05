import * as axios from "axios"

export const currencyAPI = {
  getRates: (urlValuta) => {
    return axios
      .get(`https://api.exchangerate.host/latest?base=${urlValuta}`)
      .then((response) => response.data.rates)
  },
}
