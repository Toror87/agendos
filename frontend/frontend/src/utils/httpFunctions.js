const axios = require('axios');

const baseUrl = 'http://localhost:8000/'

export const httpGet = async (endpoint) => {
  return axios.get(baseUrl + endpoint, {
    headers:
       localStorage.getItem('token') ?  {
      authorization: 'Bearer ' + localStorage.getItem('token')
    } : {}
  })
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseUrl + endpoint, data, {
      headers: 
      endpoint==='api/register/' ?  {} : localStorage.getItem('token') ? {
        authorization: 'Bearer ' + localStorage.getItem('token')
      } : {}
    }) 
}

/*
export const httpGetProfile = async (endpoint, id) => {
  axios.get(baseUrl + endpoint, {
    headers:
       localStorage.getItem('token') ? {
      authorization: 'Bearer ' + localStorage.getItem('token')
    } : {}
  }).then((res) => {
      id===res.data.id ?
        return res.data : {} })
}
*/