
// header
$(document).ready(function(){
    $(".humberger i").click(function(){
        $(this).toggleClass("fa-times");
        $(".header_menu").toggleClass("active");
    })
})

//header sticky

window.addEventListener('scroll', function() {
    var head = document.querySelector('.header');
    head.classList.toggle('sticky', window.scrollY > 50);
  });

//   active menu 
  $(document).ready(function(){
    $(".header_menu  a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
  })