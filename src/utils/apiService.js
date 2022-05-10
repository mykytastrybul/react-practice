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

export function addCategoryApi({ transType, category }) {
  return axios.post(transType + "Cats", category).then(({ data }) => data);
}

export function getCategoriesApi({ transType }) {
  return axios.get(transType + "Cats").then(({ data }) => data);
}
