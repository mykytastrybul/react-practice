import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";

const MainPage = ({ toggleMain, addTransaction }) => {
  return (
    <>
      <HeaderWihtGoBack title={"Журнал видатків"} />
      <TransactionForm cbOnSubmit={addTransaction} />
      <ButtonsToAnalitics toggleMain={toggleMain} />
    </>
  );
};

export default MainPage;
