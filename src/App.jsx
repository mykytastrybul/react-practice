import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
// import CategoriesList from "./components/CategoriesList/CategoriesList";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
// import data from "./data/data.json";

class App extends Component {
  state = {
    activePage: "main",
    costs: [],
    incomes: [],
  };

  componentDidMount() {
    const costs = JSON.parse(localStorage.getItem("costs"));
    const incomes = JSON.parse(localStorage.getItem("incomes"));

    if (costs) {
      this.setState({ costs: costs });
    }
    if (incomes) {
      this.setState({ incomes: incomes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
  }

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
    const { activePage, costs, incomes } = this.state;

    switch (activePage) {
      case "main":
        return (
          <MainPage
            toggleMain={this.toggleMain}
            addTransaction={this.addTransaction}
          />
        );

      case "costs":
        return (
          <TransactionsHistoryPage
            toggleMain={this.toggleMain}
            transactions={costs}
            transType="costs"
          />
        );

      case "incomes":
        return (
          <TransactionsHistoryPage
            toggleMain={this.toggleMain}
            transactions={incomes}
            transType="incomes"
          />
        );

      default:
        return;
    }
  }
}

export default App;
