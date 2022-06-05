import style from "./Main.module.css"

const Header = (props) => {
  return (
    <div className={style.header}>
      <h1>Калькулятор обміну (конвертації) валют</h1>
      <p>
        Тут ви можете переглянути актуальний курс для обміну однієї іноземної
        валюти на іншу
      </p>
    </div>
  )
}

export default Header
