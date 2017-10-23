$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#user-text").val().split(" ");
    var newArray = [];
    sentence.forEach(function(word) {
      if(word.length >= 3) {
       newArray.push(word);
      }
    });
    newArray.join(", ");
    console.log(newArray);
  });
});
