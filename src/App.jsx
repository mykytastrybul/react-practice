import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { useLoaderContext } from "./context/LoaderProvider";
import {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
} from "./utils/apiService";

const App = () => {
  const setIsLoading = useLoaderContext();
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [error, setError] = useState(null);
  const transactions = { costs, incomes };
  if (error) console.log("error", error);

  const deleteTransaction = (transType, id) => {
    setIsLoading(true);
    removeTransactionApi({ transType, id })
      .then(() => {
        transType === "costs" &&
          setCosts((prev) => prev.filter((el) => el.id !== id));
        transType === "incomes" &&
          setIncomes((prev) => prev.filter((el) => el.id !== id));
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const addTransaction = (transaction) => {
    const { transType } = transaction;
    setIsLoading(true);
    addTransactionApi(transType, transaction)
      .then((transaction) => {
        transType === "costs" && setCosts((prev) => [...prev, transaction]);
        transType === "incomes" && setIncomes((prev) => [...prev, transaction]);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        try {
          const costs = await getTransactionsApi("costs");
          setCosts(costs);
        } catch (error) {
          setError(error);
        }
        try {
          const incomes = await getTransactionsApi("incomes");
          setIncomes(incomes);
        } catch (error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<MainPage addTransaction={addTransaction} />} />
      <Route
        path="/transactions/:transType"
        element={
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            transactions={transactions}
          />
        }
      />
    </Routes>
  );
};

export default App;
