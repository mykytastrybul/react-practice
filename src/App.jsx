import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { useLoaderContext } from "./context/LoaderProvider";
import { getCategoriesApi, getTransactionsApi } from "./utils/apiService";
import { getCosts, getIncomes } from "./redux/transactions/transactionsActions";
import {
  getCostsCats,
  getIncomesCats,
} from "./redux/categories/categoriesSlice";

const App = () => {
  const dispatch = useDispatch();
  const setIsLoading = useLoaderContext();

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        try {
          const costs = await getTransactionsApi("costs");
          dispatch(getCosts(costs));
        } catch (error) {
          console.log(error);
        }
        try {
          const incomes = await getTransactionsApi("incomes");
          dispatch(getIncomes(incomes));
        } catch (error) {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        await getCategoriesApi({ transType: "incomes" }).then((res) =>
          dispatch(getIncomesCats(res))
        );
        await getCategoriesApi({ transType: "costs" }).then((res) =>
          dispatch(getCostsCats(res))
        );
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
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
