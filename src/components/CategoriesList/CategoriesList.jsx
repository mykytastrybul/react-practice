import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import s from "./CategoriesList.module.scss";
import sprite from "../../assets/images/sprite.svg";
import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import { useContext, useState } from "react";
import { CategoryContext } from "../../context/CategoriesProvider";

const CategoriesList = ({ onGoBack, setCategory, transType }) => {
  const [newCategory, setNewCategory] = useState("");
  const { incomesCats, costsCats, addCategory } = useContext(CategoryContext);

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCategory);
    addCategory({ transType, category: { title: newCategory } });
  };

  const categories =
    transType === "costs"
      ? costsCats
      : transType === "incomes"
      ? incomesCats
      : [];

  return (
    <>
      <HeaderWihtGoBack title="Категорії" withBtn onGoBack={onGoBack} />
      <ul className={s.list}>
        {categories.map(({ id, title }) => (
          <li className={s.item} key={id}>
            <span className={s.title} onClick={() => setCategory(title)}>
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
