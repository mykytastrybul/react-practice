import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { getTransactions } from "./redux/transactions/transactionOperations";
import {
  getCostsCategories,
  getIncomesCategories,
} from "./redux/categories/categoriesOperations";
import AuthPage from "./page/AuthPage";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => Boolean(state.auth.idToken));

  useEffect(() => {
    dispatch(getTransactions("costs"));
    dispatch(getTransactions("incomes"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCostsCategories());
    dispatch(getIncomesCategories());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/*" element={<MainPage />} />
            <Route
              path="/transactions/:transType"
              element={<TransactionsHistoryPage />}
            />
          </>
        ) : (
          <>
            <Route path="/:authType" element={<AuthPage />} />
            {/* <Route path="/login" element={<h1>LoginPage</h1>} /> */}
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
