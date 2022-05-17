import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";
import { Navigate, Route, Routes } from "react-router-dom";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useState } from "react";
import { addTransactionApi } from "../../utils/apiService";
import { useLoaderContext } from "../../context/LoaderProvider";
import { useDispatch } from "react-redux";
import {
  addCosts,
  addIncomes,
} from "../../redux/transactions/transactionsActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const setIsLoading = useLoaderContext();

  const [category, setCategory] = useState("");

  const addTransaction = (transaction) => {
    const { transType } = transaction;
    setIsLoading(true);
    addTransactionApi(transType, transaction)
      .then((transaction) => {
        transType === "costs" && dispatch(addCosts(transaction));
        transType === "incomes" && dispatch(addIncomes(transaction));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <Routes>
      <Route index element={<Navigate to={"costs"} />} />
      <Route
        path=":transType"
        element={
          <>
            <HeaderWihtGoBack title={"Журнал видатків"} />
            <TransactionForm cbOnSubmit={addTransaction} category={category} />
            <ButtonsToAnalitics />
          </>
        }
      />
      <Route
        path=":transType/list"
        element={<CategoriesList setCategory={setCategory} />}
      />
    </Routes>
  );
};

export default MainPage;
