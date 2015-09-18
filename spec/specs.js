describe("Pizza", function() {
  it("create a new pizza and determine quantity", function() {
    var newPizza = new Pizza(1);
    expect(newPizza.quantity).to.equal(1);
  });

  it("create a new pizza and determine size", function() {
    var newPizza = new Pizza(1, "Small");
    expect(newPizza.orderSize).to.equal("Small");
  });

  it("create a new pizza and determine toppings", function() {
    var newPizza = new Pizza(1, "Small", "Premium");
    expect(newPizza.ifToppings).to.equal("Premium");
  });

  it("determine the cost of a pizza", function() {
    var newPizza = new Pizza(1, "Medium", "Premium");
    expect(newPizza.cost()).to.equal(18);
  });
});
