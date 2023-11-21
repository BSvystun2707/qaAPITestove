// test/weather-api2.test.js
const assert = require('assert');
const WeatherAPI3 = require('../src/30minutes.js');

describe('WeatherAPI3', () => {
  const apiKey = 'a6bf121fb8mshe4bf035989fadf8p1191f6jsn0ee7cd56d0ca';
  const weatherApi = new WeatherAPI3(apiKey);

  it('should fetch 30-min forecast data', async () => {
    try {
      const minutesForecastData = await weatherApi.getHourlyForecast('35.5', '-78.5', 30);
      assert.ok(minutesForecastData); 
    } catch (error) {
      assert.fail('Unexpected error:', error);
    }
  });
});
