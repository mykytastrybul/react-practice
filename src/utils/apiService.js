import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4040";
const url = {
  auth: "https://identitytoolkit.googleapis.com/v1/",
  db: "https://wallet-react-practice-default-rtdb.firebaseio.com/",
};

const endpoint = {
  register: "accounts:signUp",
  login: "accounts:signInWithPassword",
};

const apiKey = "AIzaSyDCFT02bDJCY4LTj4X3EZH_FHR7rneEzJ0";

const setBaseUrl = (url) => (axios.defaults.baseURL = url);
//"https://wallet-react-practice-default-rtdb.firebaseio.com/users/localId/name.json?auth=<ID_TOKEN>"

export function getTransactionsApi({ transType, localId, idToken }) {
  setBaseUrl(url.db);
  return axios
    .get(`users/${localId}/${transType}.json?auth=${idToken}`)
    .then(({ data }) =>
      data
        ? Object.entries(data).map(([id, transaction]) => ({
            ...transaction,
            id,
          }))
        : []
    );
}
//[[key,value],]
export function addTransactionApi({ transaction, localId, idToken }) {
  setBaseUrl(url.db);
  const { transType } = transaction;
  return axios
    .post(`users/${localId}/${transType}.json?auth=${idToken}`, transaction)
    .then(({ data }) => ({ ...transaction, id: data.name }));
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

export function registerUserApi({ email, password }) {
  axios.defaults.baseURL = url.auth;
  axios.defaults.params = {
    key: apiKey,
  };
  return axios
    .post(endpoint.register, { email, password, returnSecureToken: true })
    .then(({ data }) => data);
}

export function loginUserApi({ email, password }) {
  axios.defaults.baseURL = url.auth;
  axios.defaults.params = {
    key: apiKey,
  };
  return axios
    .post(endpoint.login, {
      email,
      password,
      returnSecureToken: true,
    })
    .then(({ data }) => {
      const { localId, email, idToken } = data;
      return { localId, email, idToken };
    });
}
