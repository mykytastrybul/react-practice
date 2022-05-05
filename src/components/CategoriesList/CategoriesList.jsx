import HeaderWihtGoBack from "../shared/HeaderWihtGoBack/HeaderWihtGoBack";
import s from "./CategoriesList.module.scss";
import sprite from "../../assets/images/sprite.svg";

const categories = [
  {
    id: 1,
    title: "Different 1",
  },
  {
    id: 2,
    title: "Different 2",
  },
  {
    id: 3,
    title: "Different 3",
  },
];

const CategoriesList = ({ onGoBack, setCategory }) => {
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
    </>
  );
};

export default CategoriesList;
