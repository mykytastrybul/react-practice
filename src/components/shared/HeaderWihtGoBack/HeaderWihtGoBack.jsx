import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authSlice";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import s from "./HeaderWihtGoBack.module.scss";

const HeaderWihtGoBack = ({ title, withBtn, onGoBack }) => {
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      {withBtn && (
        <ButtonWithIcon icon="#icon-arrow-left2" cbOnClick={onGoBack} />
      )}
      <h1 className={s.title}>{title}</h1>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </header>
  );
};

export default HeaderWihtGoBack;
