import sprite from "../../../assets/images/sprite.svg";
import s from "./ButtonWithIcon.module.scss";

const ButtonWithIcon = ({ icon, className, type = "button", cbOnClick }) => {
  return (
    <button
      onClick={cbOnClick}
      type={type}
      className={className ? className : s.btn}
    >
      <svg className={s.svg}>
        <use href={sprite + icon} />
      </svg>
    </button>
  );
};

export default ButtonWithIcon;
