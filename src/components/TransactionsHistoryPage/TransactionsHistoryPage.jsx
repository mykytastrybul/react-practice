import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import s from "./TransactionsHistoryPage.module.scss";
import { format } from "date-fns";
import { uk } from "date-fns/locale";

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
              <span className={s.price}>{transaction.price}</span>
              <span className={s.currency}>{transaction.currency}</span>
            </p>
            <ButtonWithIcon icon="#icon-navigation-more" className={s.btn} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionsHistoryPage;
