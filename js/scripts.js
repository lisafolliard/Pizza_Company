function Pizza(quantity, orderSize, ifToppings) {
  this.quantity = quantity;
  this.orderSize = orderSize;
  this.ifToppings = ifToppings;
}

Pizza.prototype.cost = function() {
  var cost = 9;

  // if(this.quantity > 1) {
  //   cost = cost * quantity;
  //   // cost += 10;
  // }

  if(this.orderSize === "small") {
    cost += 0;
  }

  if(this.orderSize === "medium") {
    cost += 4;
  }

  if(this.orderSize === "large") {
    cost += 8;
  }

  if(this.ifToppings === "standard") {
    cost += 0;
  }

  if(this.ifToppings === "premium") {
    cost += 5;
  }
return cost;
};


$(document).ready(function() {
  $("form#order-create").submit(function(event) {
    var inputtedQuantity = parseInt($("input#select-quantity").val());
    var inputtedOrderSize = $("input[name=order-size]:checked").val();
    var inputtedIfToppings = $("input[name=if-toppings]:checked").val();

    var newPizza = new Pizza(inputtedQuantity, inputtedOrderSize, inputtedIfToppings);

    $(".order-show").show();

    $(".order-details").append("Order Size: " + inputtedOrderSize + "</br> Toppings: " + inputtedIfToppings);

    $(".order-cost").text(newPizza.cost());

    event.preventDefault();
  });
});
