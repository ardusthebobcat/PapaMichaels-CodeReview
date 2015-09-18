function Pizza(quantity, pizzaSize, meats, veggies) {
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.meats = meats;
  this.veggies = veggies;
  this.cost = 0;
  this.pizzaCost;
}

Pizza.prototype.pizzaCost = function() {

  var sizeHash = new Object({S: 6, M: 8, L: 10, XL: 11});

  this.cost += (this.quantity * (sizeHash[this.pizzaSize] + (this.meats * 2) + (this.veggies * 1)));
}
