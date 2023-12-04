import http from "./http-common";

const getAll = () => {
  return http.get("/surveys");
};

const get = (id: number) => {
  return http.get(`/surveys/${id}`);
};
const create = (data: any) => {
  return http.post("/survey", data);
};
const update = (data: any) => {
  return http.put("/survey", data);
};
const remove = (data: any) => {
  return http.delete(`/remove/${data}`);
};
const removeAll = (data: any) => {
  return http.delete(`/removeAll/${data}`);
};

const SurveyServices = {
  getAll,
  get,
  create,
  remove,
  removeAll,
};
export default SurveyServices;
