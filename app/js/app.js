$(document).ready(function() {
  $('.nav__item').on('click', function(e) {
    $('.nav__item').removeClass("is-active"); //you can list several class names
    $(this).toggleClass("is-active"); //you can list several class names
    e.preventDefault();
  });

  $('.actionmenu__voicebutton').on('click', function(e) {
    $('.actionmenu-soundtrack').toggleClass("is-active"); 
    e.preventDefault();
  });
})
