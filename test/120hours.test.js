// test/weather-api2.test.js
const assert = require('assert');
const WeatherAPI2 = require('../src/120hours.js');

describe('WeatherAPI2', () => {
  const apiKey = 'a6bf121fb8mshe4bf035989fadf8p1191f6jsn0ee7cd56d0ca';
  const weatherApi = new WeatherAPI2(apiKey);

  it('should fetch hourly forecast data', async () => {
    try {
      const hourlyForecastData = await weatherApi.getHourlyForecast('35.5', '-78.5', 'metric', 'en', 120);
      assert.ok(hourlyForecastData); 
    } catch (error) {
      assert.fail('Unexpected error:', error);
    }
  });
});
