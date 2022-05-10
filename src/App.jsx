import { useState, useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
// import CategoriesList from "./components/CategoriesList/CategoriesList";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { useLoaderContext } from "./context/LoaderProvider";
// import data from "./data/data.json";
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
  // const [isLoading, setIsLoading] = useState(false);
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
  }, []);

  switch (activePage) {
    case "main":
      return (
        <>
          {/* {isLoading && <h2 style={loaderStyles}>Loading</h2>} */}
          <MainPage toggleMain={toggleMain} addTransaction={addTransaction} />
        </>
      );

    case "costs":
      return (
        <>
          {/* {isLoading && <h2 style={loaderStyles}>Loading</h2>} */}
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            toggleMain={toggleMain}
            transactions={costs}
            transType="costs"
          />
        </>
      );

    case "incomes":
      return (
        <>
          {/* {isLoading && <h2 style={loaderStyles}>Loading</h2>} */}
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            toggleMain={toggleMain}
            transactions={incomes}
            transType="incomes"
          />
        </>
      );

    default:
      return;
  }
};

export default App;
