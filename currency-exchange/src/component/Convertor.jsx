import style from "./Main.module.css"

const Convertor = (props) => {
  return (
    <div className={style.convertor}>
      <div className={style.inputCurr}>
        <p>Ви віддаєте:</p>
        <div>
          <input
            value={props.sum}
            onChange={props.onSumChange}
            type='number'
            placeholder='Введіть суму'
            name='inputCurr'
            id=''
          />
          <select onChange={props.changeBasicValuta} ref={props.valuta}>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='UAH'>UAH</option>
            <option value='BTC'>BTC</option>
            <option value='PLN'>PLN</option>
            <option value='AED'>AED</option>
          </select>
        </div>
        <p>Курс обміну актуальний на {props.time}</p>
      </div>
      <div className={style.arrows}>
        <div className={style.arrow1}>
          <div></div>
        </div>
        <div className={style.arrow2}>
          <div></div>
        </div>
      </div>
      <div className={style.outputCurr}>
        <p>Ви отримуєте:</p>
        <div>
          <input
            readOnly
            value={props.exchange}
            type='number'
            name='outputCurr'
            id=''
          />
          <select ref={props.percent} onChange={props.changeValuta}>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='UAH'>UAH</option>
            <option value='BTC'>BTC</option>
            <option value='PLN'>PLN</option>
            <option value='AED'>AED</option>
          </select>
        </div>
        <p>Комісія: {props.commission}</p>
      </div>
    </div>
  )
}

export default Convertor
