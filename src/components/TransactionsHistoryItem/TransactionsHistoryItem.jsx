import { Component } from "react";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import s from "./TransactionsHistoryItem.module.scss";

class TransactionsHistoryItem extends Component {
  state = {
    isContextOpen: false,
  };

  handleToggleContext = () => {
    this.setState((prevState) => ({ isContextOpen: !prevState.isContextOpen }));
  };

  render() {
    const { transaction, contextId, transType, deleteTransaction } = this.props;
    return (
      <li className={s.item} key={transaction.id}>
        <div>
          <p className={s.date}>
            <span>
              {format(new Date(transaction.date), "E, dd MMM yyyy", {
                locale: uk,
              })}
            </span>
            <span>{transaction.time}</span>
          </p>
          <p>{transaction.comment}</p>
        </div>
        <p className={s.sum}>
          <span className={s.price}>{transaction.sum}</span>
          <span className={s.currency}>{transaction.currency}</span>
        </p>
        <div className={s.contextWrap}>
          <ButtonWithIcon
            icon="#icon-navigation-more"
            className={s.btn}
            cbOnClick={() => this.props.changeContextId(transaction.id)}
          />
          {transaction.id === contextId && (
            <ul className={s.contextContainer}>
              <li>
                <button
                  className={s.buttonContext}
                  onClick={() => deleteTransaction(transType, transaction.id)}
                  type="button"
                >
                  Удалить
                </button>
              </li>
              <li>
                <button
                  className={s.buttonContext}
                  onClick={() => {}}
                  type="button"
                >
                  Редактировать
                </button>
              </li>
            </ul>
          )}
        </div>
      </li>
    );
  }
}
export default TransactionsHistoryItem;
