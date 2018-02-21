window.onscroll = function() {myFunction()};
var header = document.getElementsByTagName('header')[0];
var menu = document.getElementById('menu');
var sticky = 1;
console.log(sticky);
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
