import { Component } from "react";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import s from "./TransactionsHistoryItem.module.scss";
import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";

class TransactionsHistoryItem extends Component {
  state = {
    isContextOpen: false,
  };

  handleToggleContext = () => {
    this.setState((prevState) => ({ isContextOpen: !prevState.isContextOpen }));
  };

  render() {
    const {
      transaction,
      contextId,
      transType,
      changeContextId,
      deleteTransaction,
    } = this.props;
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
        <ContextMenuButton
          id={transaction.id}
          contextId={contextId}
          transType={transType}
          changeContextId={changeContextId}
          deleteTransaction={deleteTransaction}
        />
      </li>
    );
  }
}
export default TransactionsHistoryItem;
