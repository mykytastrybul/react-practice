import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import s from "./HeaderWihtGoBack.module.scss";

const HeaderWihtGoBack = ({ title, withBtn, onGoBack }) => {
  return (
    <header className={s.header}>
      {withBtn && (
        <ButtonWithIcon icon="#icon-arrow-left2" cbOnClick={onGoBack} />
      )}
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default HeaderWihtGoBack;
