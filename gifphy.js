$("button").on("click", function () {
    console.log("Click works");
    var gifph = $(this).attr("data-gifph");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifph + "&api_key=iy6p2PZMP6SXU1rtA4ZGuU3BtpzwD8zV&limit=10";

    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
        console.log(response)
      var results = response.data;
      

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

          var rating = results[i].rating;
          console.log(results[i])

          var p = $("<p>").text("Rating: " + rating);

          var gifphImage = $("<img>");
          gifphImage.attr("data-still", results[i]
          .images.fixed_height_still.url);

          gifphImage.attr("data-animate", results[i]
          .images.fixed_height.url);

          gifphImage.attr("data-state", "still");

          gifphImage.attr("src", results[i]
          .images.fixed_height_still.url);

          gifDiv.prepend(p);
          gifDiv.prepend(gifphImage);

          $("#gifs-appear-here").prepend(gifDiv);
      }
    });
  });

$(document).on("click", "img", function () {
    console.log("img click works");
   // if or else statement
   if ($(this).attr("data-state") === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
   }else{
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
   }
})        


  

  //data-state
  //data-still
  //data-animate

  //Use if else statement to go between still and animate 