import { useEffect, useRef } from "react"
import { connect } from "react-redux"
import { setExchange, setRates, setSum } from "../redux/mainReducer"
import Convertor from "./Convertor"

const ConvertorContainer = (props) => {
  const percent = useRef()
  const valuta = useRef()

  const changeValuta = () => {
    const total = (
      props.sum * props.exchangeRates[percent.current.value]
    ).toFixed(2)
    props.setExchange(total)
  }

  const changeBasicValuta = (e) => {
    props.setRates(e.target.value)
  }

  const onSumChange = (e) => {
    props.setSum(e.currentTarget.value)

    const total = (
      e.currentTarget.value * props.exchangeRates[percent.current.value]
    ).toFixed(2)
    props.setExchange(total)
  }

  useEffect(() => {
    props.setRates("USD")
  }, [])

  useEffect(() => {
    const total = (
      props.sum * props.exchangeRates[percent.current.value]
    ).toFixed(2)
    props.setExchange(total)
  }, [props.exchangeRates])

  const date = new Date()
  const time = `${date.getDate()}.${
    String(date.getMonth()).length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1
  }.${date.getFullYear()}`

  const commission =
    (props.sum && `${(props.sum * 0.005).toFixed(2)}$`) || "0.5%"

  return (
    <Convertor
      commission={commission}
      time={time}
      sum={props.sum}
      onSumChange={onSumChange}
      exchangeRates={props.exchangeRates}
      changeValuta={changeValuta}
      exchange={props.exchange}
      percent={percent}
      valuta={valuta}
      changeBasicValuta={changeBasicValuta}
    />
  )
}

const mapStateToProps = (state) => ({
  sum: state.mainReducer.sum,
  exchangeRates: state.mainReducer.exchangeRates,
  exchange: state.mainReducer.exchange,
})

export default connect(mapStateToProps, { setSum, setRates, setExchange })(
  ConvertorContainer
)
