import { Component } from "react";
import s from "./TransactionForm.module.scss";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import CategoriesList from "../CategoriesList/CategoriesList";
import { addTransactionApi } from "../../utils/apiService";

const curDate = format(new Date(), "yyyy-MM-dd", {
  locale: uk,
});

const curTime = format(new Date(), "HH:mm");

class TransactionForm extends Component {
  state = {
    date: curDate,
    time: curTime,
    category: "різне",
    sum: "",
    currency: "UAH",
    comment: "",
    transType: "costs",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    addTransactionApi(this.state.transType, this.state).then((transaction) =>
      this.props.cbOnSubmit(transaction)
    );
  };

  setCategory = (category) => {
    this.setState({ category });
    this.props.toggleCategoryList();
  };

  render() {
    const { date, time, category, sum, currency, comment, transType } =
      this.state;
    const { isCategoryOpen, toggleCategoryList } = this.props;

    return !isCategoryOpen ? (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <ButtonWithIcon icon={"#icon-checkmark"} type={"submit"} />

        <label>
          <span className={s.title}>Витрати</span>
          <input
            name="transType"
            value="costs"
            type="radio"
            checked={transType === "costs"}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span className={s.title}>Доходи</span>
          <input
            name="transType"
            value="incomes"
            type="radio"
            checked={transType === "incomes"}
            onChange={this.handleChange}
          />
        </label>

        <label>
          <span className={s.title}>День</span>
          <input
            name="date"
            value={date}
            type="date"
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span className={s.title}>Час</span>
          <input
            name="time"
            value={time}
            type="time"
            onChange={this.handleChange}
          />
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
            onChange={this.handleChange}
          />
        </label>
        <label>
          <span className={s.title}>Валюта</span>
          <input
            name="currency"
            type="button"
            value={currency}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name="comment"
            value={comment}
            type="text"
            placeholder="Коментар"
            onChange={this.handleChange}
          />
        </label>
      </form>
    ) : (
      <CategoriesList
        onGoBack={toggleCategoryList}
        setCategory={this.setCategory}
      />
    );
  }
}

export default TransactionForm;
