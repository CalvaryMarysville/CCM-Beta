window.onscroll = function() {myFunction()};
var header = document.getElementsByTagName('header')[0];
var nav = document.getElementsByTagName('nav')[0];
var sticky = 1;
console.log(sticky);
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    nav.classList.add("navScroll");
  } else {
    header.classList.remove("sticky");
    nav.classList.remove("navScroll");
  }
}
var menu = document.getElementById('menu');
menu.addEventListener("click", function(){
  if (nav.style.display == 'block') {
    menu.classList.add("menuOpen");
    menu.innerHTML = '<i class="fas fa-bars"></i> Menu';
    $("nav").fadeOut("fast");
  } else {
    menu.classList.remove("menuOpen");
    menu.innerHTML = '<i class="fas fa-times"></i> Menu';
    $("nav").fadeIn("fast");
  }
});
