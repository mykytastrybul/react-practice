import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import s from "./ContextMenuButton.module.scss";

export default function ContextMenuButton({
  id,
  changeContextId,
  contextId,
  transType,
  deleteTransaction,
}) {
  return (
    <div className={s.contextWrap}>
      <ButtonWithIcon
        icon="#icon-navigation-more"
        className={s.btn}
        cbOnClick={() => changeContextId(id)}
      />
      {id === contextId && (
        <ul className={s.contextContainer}>
          <li>
            <button
              className={s.buttonContext}
              onClick={() => deleteTransaction(transType, id)}
              type="button"
            >
              Удалить
            </button>
          </li>
          <li>
            <button
              className={s.buttonContext}
              onClick={() => {}}
              type="button"
            >
              Редактировать
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
