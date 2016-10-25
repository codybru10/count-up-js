$(document).ready(function() {

  $("form#inputs").submit(function(event) {
    debugger;
    var firstInput = parseInt($("#first-input").val());
    var secondInput = parseInt($("#second-input").val());

    for (firstInput; firstInput <= 30; firstInput += 5) {
      console.log(firstInput);
    };


    for (secondInput; secondInput <= 50; secondInput += 7) {
      console.log(secondInput);
    };


    event.preventDefault();
  });

});
