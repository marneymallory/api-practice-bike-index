// STYLE
import "../styles/core.scss"
import "../styles/font-face.scss"
// UI
import $ from "jquery"
// BIZ
import BikeTracker from "./bike-tracker"

function clearFields() {
  $(`#stolenness`).val(``)
  $(`#how-far`).text(``)
}

function addText(response) {
  console.log(response)
}

$(document).ready(() => {
  $(`#bike-tracker`).on(`submit`, event => {
    event.preventDefault()
    const howFar = $(`input#how-far`).val()
    const stolenness = $(`input[name=stolenness]`).val()
    clearFields()
    BikeTracker.lookForBikes(howFar, stolenness).then(response => {
      addText(response)
    })
  })
})

const numbers = [230, 16, 652, 13]

numbers.forEach(number => {
  console.log(number)
})
