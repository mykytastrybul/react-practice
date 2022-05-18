import React, { createContext, useEffect, useState } from "react";
import { addCategoryApi, getCategoriesApi } from "../utils/apiService";

export const CategoryContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [incomesCats, setIncomesCats] = useState([]);
  const [costsCats, setCostsCats] = useState([]);

  const addCategory = ({ transType, category }) => {
    addCategoryApi({ transType, category }).then((category) => {
      transType === "incomes" && setIncomesCats((prev) => [...prev, category]);
      transType === "costs" && setCostsCats((prev) => [...prev, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        await getCategoriesApi({ transType: "incomes" }).then((res) =>
          setIncomesCats(res)
        );
        await getCategoriesApi({ transType: "costs" }).then((res) =>
          setCostsCats(res)
        );
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ incomesCats, costsCats, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoriesProvider;
