function follow(event){

var circle = document.getElementById('circle');

  var x = event.clientX - circle.clientWidth /2;
  var y = event.clientY - circle.clientHeight /2;




document.getElementById('circle').style.top = y +"px";
document.getElementById('circle').style.left = x +"px";

}