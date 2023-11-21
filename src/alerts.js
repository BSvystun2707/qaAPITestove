// src/WeatherAPI.js
const axios = require('axios');

class WeatherAPI4 {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiHost = 'weatherbit-v1-mashape.p.rapidapi.com';
    this.baseURL = 'https://weatherbit-v1-mashape.p.rapidapi.com/alerts';
  }

  async getWeatherForecast(lat, lon) {
    const options = {
      method: 'GET',
      url: this.baseURL,
      params: {
        lat,
        lon
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

module.exports = WeatherAPI4;
