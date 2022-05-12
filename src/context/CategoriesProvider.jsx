import React, { createContext, useEffect, useState } from "react";
import { addCategoryApi, getCategoriesApi } from "../utils/apiService";
import { useLoaderContext } from "./LoaderProvider";

export const CategoryContext = createContext();

const CategoriesProvider = ({ children }) => {
  const setIsLoading = useLoaderContext();
  const [incomesCats, setIncomesCats] = useState([]);
  const [costsCats, setCostsCats] = useState([]);

  const addCategory = ({ transType, category }) => {
    setIsLoading(true);
    addCategoryApi({ transType, category })
      .then((category) => {
        transType === "incomes" &&
          setIncomesCats((prev) => [...prev, category]);
        transType === "costs" && setCostsCats((prev) => [...prev, category]);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        await getCategoriesApi({ transType: "incomes" }).then((res) =>
          setIncomesCats(res)
        );
        await getCategoriesApi({ transType: "costs" }).then((res) =>
          setCostsCats(res)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
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
