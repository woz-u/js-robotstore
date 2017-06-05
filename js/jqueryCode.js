//Handle select
$(function() {
  $("#fullname").focus(function(){
    /*$( "fieldset" ).css("background-color", "grey");*/
    $(".contact-focus").css("background-color", "white");
    $("#fullname").css("background-color", "yellow");
  });
  $("#email").focus(function(){
    $(".contact-focus").css("background-color", "white");
    $("#email").css("background-color", "yellow");
  });
  $("#yloc").focus(function(){
    $(".contact-focus").css("background-color", "white");
    $("#yloc").css("background-color", "yellow");
  });
  $("#question").focus(function(){
    $(".contact-focus").css("background-color", "white");
    $("#question").css("background-color", "yellow");
  });
});
$(function(){
  $( "fieldset" ).mouseenter(function() {
    $(this).css("background-color", "yellow");
  });
  $( "fieldset" ).mouseleave(function() {
    $(this).css("background-color", "grey");
  });
});
$(function(){
  $( "#robo1" ).mouseenter(function() {
    $("#robo1").css("background-color", "yellow");
  });
  $( "#robo1" ).mouseleave(function() {
    $("#robo1").css("background-color", "grey");
  });
});
$(function(){
  $( "#robo2" ).mouseenter(function() {
    $("#robo2").css("background-color", "yellow");
  });
  $( "#robo2" ).mouseleave(function() {
    $("#robo2").css("background-color", "grey");
  });
});
$(function(){
  $( "#robo3" ).mouseenter(function() {
    $(this).css("background-color", "yellow");
  });
  $( "#robo3" ).mouseleave(function() {
    $("#robo3").css("background-color", "grey");
  });
});
$(function(){
  $("button").click(function() {
  var output = [];
  $.each($("input[name='checkbox1']:checked"), function(){
    output.push($(this).val());
  });
  console.log(output);
});
});
$(function(){
  $("button").click(function() {
    var radiovalue1 = $("input[name='CPU']:checked").val();
    console.log(radiovalue1);
  });
});
$(function(){
  $("button").click(function() {
    var radiovalue2 = $("input[name='ram']:checked").val();
    console.log(radiovalue2);
  });
});
jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};
$(function(){
  $("#searchbox").keyup(function(){
  var searchbox = $("#searchbox").val();
  /*searchbox = searchbox.toUpperCase();*/
  console.log(searchbox);
  $('#robot-display > li:not(:Contains(' + searchbox + '))').hide();
$('#robot-display > li:Contains(' + searchbox + ')').show();
});
});
