import axios from "axios";
const prodToken = 'live_2debccb41fb710acee7d3945d0708f';
const devToken = 'test_f0653b77e6d1faf1c088ad28ef5146';
const headers = { 'Authorization': `Bearer ${prodToken}`};;
const urlBase = 'https://api.api-futebol.com.br'

function getCampeonatos(id = ``) {
  const url = `/v1/campeonatos/${id}`;
  return axios.get(`${urlBase}${url}`, { headers });
}

function getCampeonatosChaves(id, key = ``) {
  const url = `/v1/campeonatos/${id}/fases/${key ? key : ``}`;
  return axios.get(`${urlBase}${url}`, { headers });
}

export default { getCampeonatos, getCampeonatosChaves }