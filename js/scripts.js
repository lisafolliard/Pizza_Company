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

  if(this.ifToppings) === "standard" {
    cost = cost;
  }

  if(this.ifToppings === "premium") {
    cost += 5;
  }
return cost;
}


$(document).ready(function() {
  $("form#order-create").submit(function(event) {
    var inputtedOrderSize = $("input[name=order-size]:checked").val();
    var inputtedIfToppings = $("input[name=if-toppings]:checked").val();

    var newPizza = new Pizza(inputtedOrderSize, inputtedIfToppings);

    $(".order-show").show();








    event.preventDefault();
  });
});
