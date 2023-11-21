// test/weather-api.test.js
const assert = require('assert');
const WeatherAPI1 = require('../src/current.js');

describe('WeatherAPI1', () => {
  const apiKey = 'a6bf121fb8mshe4bf035989fadf8p1191f6jsn0ee7cd56d0ca';
  const weatherApi = new WeatherAPI1(apiKey);

  it('should fetch current weather forecast', async () => {
    try {
      const curData = await weatherApi.getWeatherForecast('38.5', '-78.5');
      assert.ok(curData); 
    } catch (error) {
      assert.fail('Unexpected error:', error);
    }
  });
});
