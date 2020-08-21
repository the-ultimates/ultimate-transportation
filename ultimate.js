$(document).ready(function(){
  var body = $('body');
 var backgrounds = [ 
      'url(https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg)',
      'url(https://static.bangkokpost.com/media/content/20200307/3555039.jpg)',
      'url(https://www.ival.dz/sites/default/files/styles/large/public/658.png?itok=1sOM4XWF)',
      'url(https://www.publiquip.com/photo/Liebherr-PR-716.jpg)',
      'url(https://www.indiantradebird.com/itb-admin/members/1564/images/0_74d0f6b1.jpg)'  ];

  body.css('background-image', backgrounds[0]); 
var randomize = function(){     
var index =0; 
index = Math.floor(Math.random()*backgrounds.length)  
     body.css('background-image', backgrounds[index]); 
      console.log(index)
     setTimeout(randomize, 2000); 
}
 setTimeout(randomize, 2000)

  
})



