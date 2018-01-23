const fetchJsonp = require('fetch-jsonp');
const behanceKey = require('../config').behance;

// Intefaces with our Behance API layer
export default class Behansome {
  static async getPagedProjects(field, page = 1) {
    const query = {
      q: '',
      page: page,
      field: field,
      sort: 'featured_date',
      time: 'all'
    };

    let res = await Behansome._queryProjects(query);

    return res.projects;
  }
  
  static async _queryProjects(query) {
    return await behanceProjects(query);
  }
}

async function behanceProjects(query) {
  const endingUrl = `&client_id=${behanceKey}&callback=JSONPCallback`
  let queryString = encodeData(query);

  let response = await fetchJsonp(`http://behance.net/v2/projects/?${queryString}${endingUrl}`);

  return await response.json();
}

function encodeData(data) {
  return Object.keys(data).map(function(key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
  }).join("&");
} 