function Pizza(quantity, orderSize, ifToppings) {
  this.quantity = quantity;
  this.orderSize = orderSize;
  this.ifToppings = ifToppings;
}

Pizza.prototype.cost = function() {
  var cost = 9;

  if(this.orderSize === "Small") {
    cost = (cost += 0) * this.quantity;
  }

  if(this.orderSize === "Medium") {
    cost = (cost += 5) * this.quantity;
  }

  if(this.orderSize === "Large") {
    cost = (cost += 9) * this.quantity;
  }

  if(this.ifToppings === "Standard") {
    cost += 0;
  }

  if(this.ifToppings === "Premium") {
    cost += 5;
  }
  return cost;
};

function resetFields() {
  $("input#select-quantity").val("");
}


$(document).ready(function() {
  $("form#order-create").submit(function(event) {
    var inputtedQuantity = parseInt($("input#select-quantity").val());
    var inputtedOrderSize = $("input[name=order-size]:checked").val();
    var inputtedIfToppings = $("input[name=if-toppings]:checked").val();

    var newPizza = new Pizza(inputtedQuantity, inputtedOrderSize, inputtedIfToppings);

    $(".order-show").show();

    $(".order-details").append("Order Quantity: " + inputtedQuantity + "</br> Order Size: " + inputtedOrderSize + "</br> Toppings: " + inputtedIfToppings);

    $(".order-cost").text(newPizza.cost());

    $(resetFields());

    event.preventDefault();
  });
});
