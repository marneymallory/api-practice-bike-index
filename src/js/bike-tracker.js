/* eslint max-len: 0 */

export default class BikeTracker {
  static getWeather(city) {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => error)
  }
}
