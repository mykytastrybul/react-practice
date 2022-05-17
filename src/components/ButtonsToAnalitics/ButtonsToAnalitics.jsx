import { useNavigate } from "react-router-dom";
import s from "./ButtonsToAnalitics.module.scss";

const ButtonsToAnalitics = ({ toggleMain }) => {
  const navigate = useNavigate();

  const openTransactions = (transType) => {
    navigate("/transactions/" + transType);
  };

  return (
    <div className={s.container}>
      <button
        onClick={() => openTransactions("costs")}
        className={s.btn}
        type="button"
      >
        Всі витрати
      </button>
      <button
        onClick={() => openTransactions("incomes")}
        className={s.btn}
        type="button"
      >
        Всі доходи
      </button>
    </div>
  );
};

export default ButtonsToAnalitics;
