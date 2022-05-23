import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export function getTransactionsApi(transType) {
  return axios.get(transType).then(({ data }) => data);
}

export function addTransactionApi(transaction) {
  const { transType } = transaction;
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

export function removeCategoryApi({ transType, id }) {
  return axios.delete(transType + "Cats/" + id);
}

const url = {
  auth: "https://identitytoolkit.googleapis.com/v1/",
};

const endpoint = {
  register: "accounts:signUp",
  login: "accounts:signInWithPassword",
};

const apiKey = "AIzaSyDCFT02bDJCY4LTj4X3EZH_FHR7rneEzJ0";

export function registerUserApi({ email, password }) {
  axios.defaults.baseURL = url.auth;
  axios.defaults.params = {
    key: apiKey,
  };
  return axios
    .post(endpoint.register, { email, password, returnSecureToken: true })
    .then(({ data }) => data);
}
