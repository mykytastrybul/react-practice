import {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
} from "../../utils/apiService";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
  getCostsError,
  getCostsRequest,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequest,
  getIncomesSuccess,
  removeCostsError,
  removeCostsRequest,
  removeCostsSuccess,
  removeIncomesError,
  removeIncomesRequest,
  removeIncomesSuccess,
} from "./transactionsActions";

export const getTransactions = (transType) => (dispatch, getState) => {
  const { localId, idToken } = getState().auth;

  transType === "costs" && dispatch(getCostsRequest());
  transType === "incomes" && dispatch(getIncomesRequest());
  getTransactionsApi({ transType, localId, idToken })
    .then((transactions) => {
      transType === "costs" && dispatch(getCostsSuccess(transactions));
      transType === "incomes" && dispatch(getIncomesSuccess(transactions));
    })
    .catch((error) => {
      transType === "costs" && dispatch(getCostsError(error.message));
      transType === "incomes" && dispatch(getIncomesError(error.message));
    });
};

export const addTransaction = (transaction) => (dispatch, getState) => {
  const { localId, idToken } = getState().auth;
  const { transType } = transaction;
  transType === "costs" && dispatch(addCostsRequest());
  transType === "incomes" && dispatch(addIncomesRequest());
  addTransactionApi({ transaction, localId, idToken })
    .then((transaction) => {
      transType === "costs" && dispatch(addCostsSuccess(transaction));
      transType === "incomes" && dispatch(addIncomesSuccess(transaction));
    })
    .catch((error) => {
      transType === "costs" && dispatch(addCostsError(error.message));
      transType === "incomes" && dispatch(addIncomesError(error.message));
    });
};

export const removeTransaction =
  ({ transType, id }) =>
  (dispatch) => {
    transType === "costs" && dispatch(removeCostsRequest());
    transType === "incomes" && dispatch(removeIncomesRequest());
    removeTransactionApi({ transType, id })
      .then(() => {
        transType === "costs" && dispatch(removeCostsSuccess(id));
        transType === "incomes" && dispatch(removeIncomesSuccess(id));
      })
      .catch((error) => {
        transType === "costs" && dispatch(removeCostsError(error.message));
        transType === "incomes" && dispatch(removeIncomesError(error.message));
      });
  };
