// test/weather-api4.test.js
const assert = require('assert');
const WeatherAPI4 = require('../src/alerts.js');

describe('WeatherAPI4', () => {
  const apiKey = 'a6bf121fb8mshe4bf035989fadf8p1191f6jsn0ee7cd56d0ca';
  const weatherApi = new WeatherAPI4(apiKey);

  it('should fetch weather alerts data', async () => {
    try {
      const alertsData = await weatherApi.getWeatherForecast('35.5', '-78.5');
      assert.ok(alertsData); 
    } catch (error) {
      assert.fail('Unexpected error:', error);
    }
  });
});
