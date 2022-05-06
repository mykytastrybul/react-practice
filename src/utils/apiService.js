import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export function getTransactionsApi(transType) {
  return axios.get(transType).then(({ data }) => data);
}

export function addTransactionApi(transType, transaction) {
  return axios.post(transType, transaction).then(({ data }) => data);
}

export function removeTransactionApi({ transType, id }) {
  return axios.delete(transType + "/" + id);
}
