import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { getTransactions } from "./redux/transactions/transactionOperations";
import {
  getCostsCategories,
  getIncomesCategories,
} from "./redux/categories/categoriesOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions("costs"));
    dispatch(getTransactions("incomes"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCostsCategories());
    dispatch(getIncomesCategories());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
      <Route
        path="/transactions/:transType"
        element={<TransactionsHistoryPage />}
      />
    </Routes>
  );
};

export default App;
