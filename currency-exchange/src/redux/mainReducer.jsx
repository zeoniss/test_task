import { currencyAPI } from "../api/api"

const initialState = {
  sum: "",
  exchangeRates: [],
  exchange: "",
}

const mainReducer = (state = initialState, action) => {
  if (action.type === "SET-SUM") {
    return {
      ...state,
      sum: action.sum,
    }
  }

  if (action.type === "SET-RATES") {
    return {
      ...state,
      exchangeRates: action.exchangeRates,
    }
  }

  if (action.type === "SET-EXCHANGE") {
    return {
      ...state,
      exchange: action.exchange,
    }
  }

  return state
}

export const setExchange = (exchange) => ({ type: "SET-EXCHANGE", exchange })

export const setRatesAC = (exchangeRates) => ({
  type: "SET-RATES",
  exchangeRates,
})

export const setSum = (sum) => ({ type: "SET-SUM", sum })

export const setRates = (urlValuta) => (dispatch) => {
  currencyAPI.getRates(urlValuta).then((data) => dispatch(setRatesAC(data)))
}

export default mainReducer
