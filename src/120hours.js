// src/WeatherAPI2.js
const axios = require('axios');

class WeatherAPI2 {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiHost = 'weatherbit-v1-mashape.p.rapidapi.com';
    this.baseURL = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly';
  }

  async getHourlyForecast(lat, lon, units = 'metric', lang = 'en', hours = 120) {
    const options = {
      method: 'GET',
      url: this.baseURL,
      params: {
        lat,
        lon,
        units,
        lang,
        hours
      },
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': this.apiHost
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = WeatherAPI2;
