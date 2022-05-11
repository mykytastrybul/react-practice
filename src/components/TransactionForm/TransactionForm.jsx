import { useState } from "react";
import s from "./TransactionForm.module.scss";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useNavigate } from "react-router-dom";
// import { addTransactionApi } from "../../utils/apiService";

const curDate = format(new Date(), "yyyy-MM-dd", {
  locale: uk,
});

const curTime = format(new Date(), "HH:mm");

const TransactionForm = (toggleCategoryList, isCategoryOpen, cbOnSubmit) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    date: curDate,
    time: curTime,
    category: "різне",
    sum: "",
    currency: "UAH",
    comment: "",
    transType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "transType") navigate("/" + value);

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  const setCategory = (category) => {
    setForm((prev) => ({ ...prev, category }));
    toggleCategoryList();
  };

  const { date, time, category, sum, currency, comment, transType } = form;

  return !isCategoryOpen ? (
    <form className={s.form} onSubmit={handleSubmit}>
      <ButtonWithIcon icon={"#icon-checkmark"} type={"submit"} />

      <label>
        <span className={s.title}>Витрати</span>
        <input
          name="transType"
          value="costs"
          type="radio"
          checked={transType === "costs"}
          onChange={handleChange}
        />
      </label>
      <label>
        <span className={s.title}>Доходи</span>
        <input
          name="transType"
          value="incomes"
          type="radio"
          checked={transType === "incomes"}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className={s.title}>День</span>
        <input name="date" value={date} type="date" onChange={handleChange} />
      </label>
      <label>
        <span className={s.title}>Час</span>
        <input name="time" value={time} type="time" onChange={handleChange} />
      </label>
      <label>
        <span className={s.title}>Категорія</span>
        <input
          name="category"
          type="button"
          value={category}
          onClick={toggleCategoryList}
        />
      </label>
      <label>
        <span className={s.title}>Сума</span>
        <input
          name="sum"
          value={sum}
          type="text"
          placeholder="Введіть суму"
          onChange={handleChange}
        />
      </label>
      <label>
        <span className={s.title}>Валюта</span>
        <input
          name="currency"
          type="button"
          value={currency}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          name="comment"
          value={comment}
          type="text"
          placeholder="Коментар"
          onChange={handleChange}
        />
      </label>
    </form>
  ) : (
    <CategoriesList
      onGoBack={toggleCategoryList}
      setCategory={setCategory}
      transType={transType}
    />
  );
};

export default TransactionForm;
