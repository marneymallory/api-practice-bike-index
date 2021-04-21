// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import BikeTracker from "./bike-tracker"

function clearFields() {
  $(`#location`).val(``)
  $(`.showErrors`).text(``)
  $(`.showHumidity`).text(``)
  $(`.showTemp`).text(``)
}

function addText(response) {
  console.log(response)
}

$(document).ready(() => {
  $(`#weatherLocation`).click(() => {
    const city = $(`#location`).val()
    clearFields()
    BikeTracker.lookForBikes(city).then(response => {
      addText(response)
    })
  })
})
