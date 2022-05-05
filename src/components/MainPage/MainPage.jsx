import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";
import { Component } from "react";

class MainPage extends Component {
  state = {
    isCategoryOpen: false,
  };

  toggleCategoryList = () => {
    this.setState((prev) => ({ isCategoryOpen: !prev.isCategoryOpen }));
  };

  render() {
    const { toggleMain, addTransaction } = this.props;
    const { isCategoryOpen } = this.state;

    return (
      <>
        {!isCategoryOpen && <HeaderWihtGoBack title={"Журнал видатків"} />}
        <TransactionForm
          toggleCategoryList={this.toggleCategoryList}
          cbOnSubmit={addTransaction}
          isCategoryOpen={isCategoryOpen}
        />
        {!isCategoryOpen && <ButtonsToAnalitics toggleMain={toggleMain} />}
      </>
    );
  }
}

export default MainPage;
