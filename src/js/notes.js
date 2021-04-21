function Pizza() {
  this.toppings = []
  this.price = 0
}

const myPizza = new Pizza()

Pizza.prototype.getPrice = function () {
  this.price = 0
  this.toppings.forEach((topping, i) => {
    const priceOfTopping = priceDict[topping]
    this.price += priceOfTopping
  })
}
  