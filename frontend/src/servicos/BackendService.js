/* eslint-disable import/no-anonymous-default-export */
import api from "../backend";

const getCursos = async () => {
  const { data } = await api.get("/cursos");
  return data;
};

const getAulas = async () => {
  const { data } = await api.get("/aulas");
  return data;
};

export default {
  getCursos,
  getAulas,
};
