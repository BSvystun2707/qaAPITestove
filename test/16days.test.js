// test/weather-api.test.js
const assert = require('assert');
const WeatherAPI5 = require('../src/16days.js');

describe('WeatherAPI', () => {
  const apiKey = 'a6bf121fb8mshe4bf035989fadf8p1191f6jsn0ee7cd56d0ca';
  const weatherApi = new WeatherAPI5(apiKey);

  it('should show 5-day weather forecast', async () => {
    try {
      const forecastData = await weatherApi.getWeatherForecast('38.5', '-78.5', 16);
      assert.ok(forecastData); 
    } catch (error) {
      assert.fail('Unexpected error:', error);
    }
  });
});
