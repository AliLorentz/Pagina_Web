var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;

function openMenu(event) {
  
  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');

  event.preventDefault();
  event.stopImmediatePropagation();
}
  
function closeMenu(event) {
  if (navButton.classList.contains('active')) {
    navButton.classList.remove('active');
    navMenu.classList.remove('active');
  }
}
  navButton.addEventListener('click', openMenu, false);

win.addEventListener('click',closeMenu, false);


window.addEventListener('scroll',function(){
  console.log(window.pageYOffset); //Gracias a esto nos retornara el valor donde esta ubicada la camara en la pagina
  
});

let elegirno = $('.elegirnos').offset().top,
time = $('.timeline-fondo').offset().top,
Contac =  $('.contact').offset().top;

window.addEventListener('resize',function(){
  let elegirno = $('.elegirnos').offset().top,
      time = $('.timeline-fondo').offset().top,
      Contac =  $('#Contact').offset().top;
});

$('#Base').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop:0
  });
});

$('#Habilidades').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop:elegirno-150
  });
});

$('#Acerca').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop:time+150
  });
});

$('#Contact').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop:Contac
  });
});
