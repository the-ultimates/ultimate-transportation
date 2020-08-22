
$(document).ready(function(){
  var body = $('#body');
 var backgrounds = [ 
      'url(https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg)',
      'url(https://static.bangkokpost.com/media/content/20200307/3555039.jpg)',
      'url(https://www.glinche-automobiles.com/imagesUp/vehicules/14734-1.jpg)',
      'url(https://p0.pikist.com/photos/483/233/excavators-shovel-catapillar-machine-machines-construction-machine-construction-tool-site.jpg)',
      'url(https://www.counterpointresearch.com/wp-content/uploads/2019/04/digger-4055456_1280.jpg)'  ];

  body.css({'background-image': backgrounds[0],backgroundRepeat: "no-repeat",backgroundSize: "120%"}); 
var randomizes = function(){     
var index =0; 
index = Math.floor(Math.random()*backgrounds.length)  
     body.css('background-image', backgrounds[index]); 
      console.log(index)
     //setTimeout(randomize, 2000); 
}
 setInterval(function () {
  randomizes()
 }, 2000)
 })