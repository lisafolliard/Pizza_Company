function Pizza(quantity, orderSize, ifToppings) {
  this.quantity = quantity;
  this.orderSize = orderSize;
  this.ifToppings = ifToppings;
}

Pizza.prototype.cost = function() {
  var cost = 9;

  if(this.quantity > 1) {
    cost * quantity;
  }

  if(this.orderSize === "medium") {
    cost += 4;
  }

  if(this.orderSize === "large") {
    cost += 8;
  }

  if(this.ifToppings === "premium") {
    cost += 5;
  }
return cost;
}
