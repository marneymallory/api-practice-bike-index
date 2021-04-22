/* eslint max-len: 0 */

export default class BikeTracker {
  static lookForBikes(howFar, stolenness) {
    return fetch(
      `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=${howFar}&stolenness=${stolenness}`
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
