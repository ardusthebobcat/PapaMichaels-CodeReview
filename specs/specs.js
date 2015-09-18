describe("pizza", function() {
  it('creates 1 medium cheese pizza with no toppings', function() {
    var cheesePizza = new Pizza(1,"M",0,0); // 1 pizza, Medium, 0 meat addins, 0 veggie addins
    expect(cheesePizza.quantity).to.equal(1);
    expect(cheesePizza.pizzaSize).to.equal("M");
    expect(cheesePizza.meats).to.equal(0);
    expect(cheesePizza.veggies).to.equal(0);
  });

  it('tests the cost function on a small pepperoni pizza (1,S, 1, 0)', function() {
    var pepperoniPizza = new Pizza(1,"S", 1, 0);
    pepperoniPizza.pizzaCost();
    expect(pepperoniPizza.cost).to.equal(8);
  });
});
