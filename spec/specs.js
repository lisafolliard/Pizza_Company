describe("Pizza", function() {
  it("create a new pizza and determine quantity", function() {
    // var newPizza = newPizza(1, "Large", "Premium");
    var newPizza = new Pizza(1);
    expect(newPizza.quantity).to.equal(1);
  });
});
