$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var randomInput = $("input#randomtext").val();
    $(".randomtext").text(randomInput);

    $("#letter").show();
    $("#letter").toUpperCase();

    event.preventDefault();
  });
});
