import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { getCategoriesApi } from "./utils/apiService";
import {
  getCostsCats,
  getIncomesCats,
} from "./redux/categories/categoriesSlice";
import { getTransactions } from "./redux/transactions/transactionOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions("costs"));
    dispatch(getTransactions("incomes"));
  }, [dispatch]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        await getCategoriesApi({ transType: "incomes" }).then((res) =>
          dispatch(getIncomesCats(res))
        );
        await getCategoriesApi({ transType: "costs" }).then((res) =>
          dispatch(getCostsCats(res))
        );
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
  }, []);

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
