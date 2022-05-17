import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import s from "./CategoriesList.module.scss";
import sprite from "../../assets/images/sprite.svg";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryApi } from "../../utils/apiService";
import {
  addCostsCats,
  addIncomesCats,
} from "../../redux/categories/categoriesSlice";
import { useLoaderContext } from "../../context/LoaderProvider";

const CategoriesList = ({ setCategory }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setIsLoading = useLoaderContext();
  const categories = useSelector((state) => state.categories);
  const [newCategory, setNewCategory] = useState("");
  const { transType } = useParams();

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const addCategory = ({ transType, category }) => {
    setIsLoading(true);
    addCategoryApi({ transType, category })
      .then((category) => {
        transType === "incomes" && dispatch(addIncomesCats(category));
        transType === "costs" && dispatch(addCostsCats(category));
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ transType, category: { title: newCategory } });
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    newCategory && setNewCategory("");
  }, [categories]);

  return (
    <>
      <HeaderWihtGoBack title="Категорії" withBtn onGoBack={goBack} />
      <ul className={s.list}>
        {categories[transType + "Cats"].map(({ id, title }) => (
          <li className={s.item} key={id}>
            <span
              className={s.title}
              onClick={() => {
                setCategory(title);
                navigate(-1);
              }}
            >
              {title}
            </span>
            <button className={s.btn} type="button">
              <span>
                <svg className={s.icon}>
                  <use href={sprite + "#icon-navigation-more"} />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="newCategory"
          value={newCategory}
          onChange={handleChange}
        />
        <ButtonWithIcon icon="#icon-plus" type="submit" />
      </form>
    </>
  );
};

export default CategoriesList;
