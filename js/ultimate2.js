$(document).ready(function(){
 
$('#b').on('keydown',function(){
  var value=$('#b').val();
  console.log(value);
  $('#output').text(value*300);
})

$('#b').on('change',function(){
  var value=$('#b').val();
  console.log(value);
  $('#output').text(value*300 +" DT");
})
})