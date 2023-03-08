import axios from "axios";
const BASE_URL = "http://localhost:8585/";
const ALLPLACES_URL = "http://localhost:8585/allplaces";
const LOGIN_URL = "http://localhost:8585/user/login";
const ADMINLOGIN_URL = "http://localhost:8585/admin/login";
const GOVTOFFICIALLOGIN_URL = "http://localhost:8585/govtofficial/login";

//--------- save products----------
// export async function addPlace(add) {
//   return axios.post(BASE_URL, add);
// }

export async function addPlace(add) {
  return axios.post(`${BASE_URL}/place/add${add}`);
}

export async function getPlaceById(id) {
  return axios.post(`${BASE_URL}/place/${id}`);
}

//--------- get all productss----------
export async function getAllPlacesFromServer() {
  return axios.get(ALLPLACES_URL);
}

//--------- user login details ----------
export async function getLoginDetailsFromServer(formValues) {
  return axios.post(LOGIN_URL, formValues);
}
//--------- admin login details  ----------
export async function getAdminLoginDetailsFromServer(formValues) {
  return axios.post(ADMINLOGIN_URL, formValues);
}
//--------- govt official login details  ----------
export async function getGovtOfficialDetailsFromServer(formValues) {
  return axios.post(GOVTOFFICIALLOGIN_URL, formValues);
}
