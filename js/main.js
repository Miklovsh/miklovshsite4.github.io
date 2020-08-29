$(document).ready(function(){
  $('.feedback__slider').slick({
  dots:true
})
});

function open_modal(i){
  $('#modal').fadeIn();
  modal__window.fadeIn(1);
  $(modal__window[i]).fadeIn();
}

function close_modal(){
  $('#modal').fadeOut();
}
