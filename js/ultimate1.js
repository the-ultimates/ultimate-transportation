
$(document).ready(function(){
 console.log("hey")
 var total = 0;
$('#b').on('keydown',function(){
  var value=$('#b').val();
  console.log(value);
  $('#output').text(value*90);
});

$('#b').on('change',function(){
  var value=$('#b').val();
  console.log(value);
  $('#output').text(value*90 + "DT");
total=$('#b').val()*90;
});

console.log(total);
var balance = 7000;
console.log(balance)
$('#sub').on('click',function(){
   if (total <= balance  ){
alert("Congrats !");
}
else {alert("Sorry! You don't have enough money !");}
});
})








