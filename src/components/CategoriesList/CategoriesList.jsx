import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import s from "./CategoriesList.module.scss";
import sprite from "../../assets/images/sprite.svg";

const CategoriesList = () => {
  return (
    <>
      <HeaderWihtGoBack title="Категорії" withBtn />
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.title}>Різне</span>
          <button className={s.btn} type="button">
            <span>
              <svg className={s.icon}>
                <use href={sprite + "#icon-navigation-more"} />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default CategoriesList;
