import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionsHistoryItem from "../TransactionsHistoryItem/TransactionsHistoryItem";
import s from "./TransactionsHistoryPage.module.scss";

const TransactionsHistoryPage = ({ transactions, toggleMain, transType }) => {
  const onGoBack = () => toggleMain();

  return (
    <>
      <HeaderWihtGoBack
        title={transType === "costs" ? "Витрати" : "Доходи"}
        withBtn
        onGoBack={onGoBack}
      />
      <ul className={s.list}>
        {transactions.map((transaction) => (
          <TransactionsHistoryItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionsHistoryPage;
