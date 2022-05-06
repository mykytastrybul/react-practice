import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
// import CategoriesList from "./components/CategoriesList/CategoriesList";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
// import data from "./data/data.json";
import { getTransactionsApi, removeTransactionApi } from "./utils/apiService";

const loaderStyles = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "50px",
};

class App extends Component {
  state = {
    activePage: "main",
    costs: [],
    incomes: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const getTransactions = (transType) => {
      this.setState({ isLoading: true });
      getTransactionsApi(transType)
        .then((transactions) => {
          this.setState({ [transType]: transactions });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    };
    getTransactions("costs");
    getTransactions("incomes");
  }

  deleteTransaction = (transType, id) => {
    this.setState({ isLoading: true });
    removeTransactionApi(transType, id)
      .then(() =>
        this.setState((prev) => ({
          [transType]: prev[transType].filter((el) => el.id !== id),
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleMain = (activePage = "main") => {
    this.setState({
      activePage,
    });
  };

  addTransaction = (transaction) => {
    const { transType } = transaction;
    this.setState((prev) => ({
      [transType]: [...prev[transType], transaction],
    }));
  };

  render() {
    const { activePage, costs, incomes, isLoading } = this.state;

    switch (activePage) {
      case "main":
        return (
          <>
            {isLoading && <h2 style={loaderStyles}>Loading</h2>}
            <MainPage
              toggleMain={this.toggleMain}
              addTransaction={this.addTransaction}
            />
          </>
        );

      case "costs":
        return (
          <>
            {isLoading && <h2 style={loaderStyles}>Loading</h2>}
            <TransactionsHistoryPage
              deleteTransaction={this.deleteTransaction}
              toggleMain={this.toggleMain}
              transactions={costs}
              transType="costs"
            />
          </>
        );

      case "incomes":
        return (
          <>
            {isLoading && <h2 style={loaderStyles}>Loading</h2>}
            <TransactionsHistoryPage
              deleteTransaction={this.deleteTransaction}
              toggleMain={this.toggleMain}
              transactions={incomes}
              transType="incomes"
            />
          </>
        );

      default:
        return;
    }
  }
}

export default App;
