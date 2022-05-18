import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";
import { Navigate, Route, Routes } from "react-router-dom";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/transactions/transactionOperations";

const MainPage = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");

  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction));
  };

  return (
    <Routes>
      <Route index element={<Navigate to={"costs"} />} />
      <Route
        path=":transType"
        element={
          <>
            <HeaderWihtGoBack title={"Журнал видатків"} />
            <TransactionForm
              cbOnSubmit={handleAddTransaction}
              category={category}
            />
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
