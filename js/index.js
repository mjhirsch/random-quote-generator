var tweet = "https://twitter.com/intent/tweet?text=";
function getQuote(){
  $.ajax({
    headers: {
      "X-Mashape-Key": "NeFdmNg56tmshLv1KdgErm4jNgwIp1u9zXFjsnEx3SAwhDqCK0",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
    success: function(result){
      var r = JSON.parse(result);
      var quote = r.quote;
      var author = r.author;

      var html = "";
      html += "<div class='quoteQuote color'><i class='fa fa-quote-left' aria-hidden='true'></i>" + quote + "<br>" + "</div>";
      html += "<div class='quoteAuthor text-right'> - " + author + "</div><br>";
      tweet += quote+" -"+author;
      // $("a").attr("href", tweet);
      $(".quoteContent").html(html);

  }
    
  })
}

$(document).ready(function(){
  var colorArray = ["#043227","#097168","#ffcc88","#fa482e","#f4a32e"]
  $("#getQuote").on("click", function(){
    // $(".quoteContent").html("Hello this is working")
    var newColor = Math.floor(Math.random()*5);
    getQuote();
    $(".backgroundColor, .color").css("background-color",colorArray[newColor]);
    $(".color").css("color",colorArray[newColor]);
    $(".tweet").css("background-color","white");

  }) 

  $(".tweet").click(function(){
    window.open(tweet);
    return false;
  });

})