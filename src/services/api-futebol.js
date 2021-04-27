import axios from "axios";
const prodToken = 'live_ec011b9e3f4a03d66e449bf85c0e8a';
const devToken = 'test_2030a0fb67f1101f1055d1b5ffe919';
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