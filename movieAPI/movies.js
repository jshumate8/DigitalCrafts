let url = ' http://www.omdbapi.com/?s=batman&apikey=67bd9c76'
let movies = document.getElementById("movies")

$.get(url,function(data){
  
  $(data.Search).each(function(index ,element){
    $("<div>").addClass("movieContainer").append($("<li>").addClass("movieTitle").html(element.Title)).append($("<img>", {src:element.Poster})).append($("<li>").html(element.Year)).appendTo(movies)
  })
})

// $.getJSON(calledMovie)

// $("<div>").append("<li>").html(data).appendTo("movies")


// .then(function(data){
//     $("<div></div>").addClass("movieContainer").append($("<li>").html(search.Title)).append($("<li>").html(search.year)).appendTo("movies")
// });
// }

// apiCall()
//   $(data).each(function(index ,movie){
//     $("<div></div>").addClass("userContainer").append($("<li>").html(user.name)).append($("<li>").html(user.username)).append($("<li>").html(user.email)).appendTo($("#users")).append($("<li>").html(user.address.street)).append($("<li>").html(user.address.suite)).append($("<li>").html(user.address.city)).append($("<li>").html(user.address.zipcode)).appendTo("users")
// })
// })
