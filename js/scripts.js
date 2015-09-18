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

$(document).ready(function () {
  var order = [];

  $("#addPizza").submit(function() {
    event.preventDefault();
    var pizzaSize = $("input[name='size']").val();
    var quantity = $("input#quantity").val();
    var meatlist = [];
    var meats = $("input[name='meats']:checked").map(function() {meatlist.push(this)}).get();

    var veggielist = [];
    var veggies = $("input[name='veggies']:checked").map(function() {veggielist.push(this)}).get();

    var newPizza = new Pizza(quantity, pizzaSize, meatlist.length, veggielist.length);
    newPizza.pizzaCost();

    var updatedCost = (parseInt($('#costs').text()));

    updatedCost += newPizza.cost;
    $("#costs").text(updatedCost);
  });
});
