import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesList from "../CategoriesList/CategoriesList";

const MainPage = ({ addTransaction }) => {
  const [category, setCategory] = useState("");

  return (
    <>
      <Routes>
        <Route
          path=":transType"
          element={
            <>
              <HeaderWihtGoBack title={"Журнал видатків"} />
              <TransactionForm
                cbOnSubmit={addTransaction}
                category={category}
              />
              <ButtonsToAnalitics />
            </>
          }
        />
        <Route
          path=":transType/list"
          element={<CategoriesList setCategory={setCategory} />}
        />
      </Routes>
    </>
  );
};

export default MainPage;
