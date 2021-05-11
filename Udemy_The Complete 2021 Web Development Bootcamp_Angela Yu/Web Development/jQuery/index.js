$("h1").css("color", "purple");
$("a").attr("href", "https://www.yahoo.com");

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  console.log("fuck");
});

$("h1").before("<button>fuck</button>");

$("button").on("click", function () {
  $("h1").animate({opacity: 0.5});
});
