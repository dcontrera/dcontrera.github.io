/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
  let root = document.documentElement;
  let exclass = 'hide';
  let bar = document.querySelector('.bar');
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "normal", "swing");
      // bar.classList.remove(exclass);
      root.style.setProperty('--height', '1');
      root.style.setProperty('--barpos', 0);
      return false;
  });
});
 /*Scroll to top when arrow up clicked END*/
 
$(window).scroll(function() {
  header_height_fn();
  check_section();
  animateScroll();
});