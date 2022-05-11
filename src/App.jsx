import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { useLoaderContext } from "./context/LoaderProvider";
import {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
} from "./utils/apiService";

const App = () => {
  const setIsLoading = useLoaderContext();
  const [activePage, setActivePage] = useState("main");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [error, setError] = useState(null);

  if (error) console.log(error);

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

  const toggleMain = (activePage = "main") => {
    setActivePage(activePage);
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
      <Route
        path="/"
        element={
          <MainPage toggleMain={toggleMain} addTransaction={addTransaction} />
        }
      >
        <Route
          path="/:transType"
          element={
            <TransactionForm
              deleteTransaction={deleteTransaction}
              transactions={costs}
              transType="costs"
            />
          }
        />
      </Route>
      <Route
        path="/transactions/:transType"
        element={
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            transactions={costs}
            transType="costs"
          />
        }
      />
    </Routes>
  );
};

export default App;
