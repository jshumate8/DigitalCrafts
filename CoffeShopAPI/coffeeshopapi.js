let url = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let customersContainer = document.getElementById("customersContainer")

$("#displayOrders").on("click", function() {
$('#customersContainer').html("")
$.get(url,function(data){
    
    for(elements in data) {         
        $("<div>").addClass("order")        
        .append($("<div>").addClass("customerID").append($("<h3>Customer: &nbsp&nbsp</h3>")).append($("<p>").html(elements)))
        .append($("<div>").addClass("emailID").append($("<h3>Email: &nbsp&nbsp</h3>")).append($("<p>").html(data[elements].emailAddress)))        
        .append($("<div>").addClass("coffeeID").append($("<h3>Coffee: &nbsp&nbsp</h3>")).append($("<p>").html(data[elements].coffee)))
        .appendTo(customersContainer)
  
    }})
    
})

$("#searchButton").on("click", function() {
    var orderSearch = $('#searchOrders').val()
    var orderURL = ('http://dc-coffeerun.herokuapp.com/api/coffeeorders/' + orderSearch)
    $('#customersContainer').html("")
    $.get(orderURL,function(data){
               
            $("<div>").addClass("order")        
            .append($("<div>").addClass("emailID").append($("<h3>Email: &nbsp&nbsp</h3>")).append($("<p>").html(data.emailAddress)))        
            .append($("<div>").addClass("coffeeID").append($("<h3>Coffee: &nbsp&nbsp</h3>")).append($("<p>").html(data.coffee)))
            .appendTo(customersContainer)

    
        })})
    // if(orderSearch==data[elements].emailAddress) {
    // $('#customersContainer').text(orderSearch)}
    // else {
    //     $('#customersContainer').text("Order not found")

    // }

    // }




