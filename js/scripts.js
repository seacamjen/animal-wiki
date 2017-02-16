$(function(){
  var animal = parseInt(prompt("If you would like to learn about Tarantulas enter 1, if you want to learn about Ant-Eaters enter 2, if you want to learn about Kommodo Dragons enter 3"));

  if (animal === 1) {
    $('#spider').show();
  } else if (animal === 2) {
    $('#ant').show();
  } else if (animal === 3) {
    $('#dragon').show();
  } else {
    alert("Please refresh page and enter only 1, 2, or 3!");
  }

  $(".spiderToggle").click(function() {
    $("#spider").show();
    $("#ant, #dragon").hide();
  });

  $(".antToggle").click(function() {
    $("#ant").show();
    $("#spider, #dragon").hide();
  });

  $(".dragonToggle").click(function(){
    $("#dragon").show();
    $("#ant, #spider").hide();
  });
});
