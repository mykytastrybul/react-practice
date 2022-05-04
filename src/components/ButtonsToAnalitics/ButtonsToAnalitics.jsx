import s from "./ButtonsToAnalitics.module.scss";

const ButtonsToAnalitics = ({ toggleMain }) => {
  return (
    <div className={s.container}>
      <button
        onClick={() => toggleMain("costs")}
        className={s.btn}
        type="button"
      >
        Всі витрати
      </button>
      <button
        onClick={() => toggleMain("incomes")}
        className={s.btn}
        type="button"
      >
        Всі доходи
      </button>
    </div>
  );
};

export default ButtonsToAnalitics;
