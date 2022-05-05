import { Component } from "react";
import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem";
import s from "./TransactionsHistoryPage.module.scss";

// = ({ transactions, toggleMain, transType }) =>
class TransactionsHistoryPage extends Component {
  state = {
    contextId: null,
  };

  changeContextId = (id) => {
    this.setState({ contextId: id });
  };

  onGoBack = () => this.props.toggleMain();

  render() {
    const { transactions, transType, deleteTransaction } = this.props;
    return (
      <>
        <HeaderWihtGoBack
          title={transType === "costs" ? "Витрати" : "Доходи"}
          withBtn
          onGoBack={this.onGoBack}
        />
        <ul className={s.list}>
          {transactions.map((transaction) => (
            <TransactionsHistoryItem
              transType={transType}
              deleteTransaction={deleteTransaction}
              contextId={this.state.contextId}
              changeContextId={this.changeContextId}
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TransactionsHistoryPage;
