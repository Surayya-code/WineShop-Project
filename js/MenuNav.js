// function change(knopka){
//     var aktivdirmi =knopka.classList.value.indexOf('active');
//     var navbar = document.getElementById('site-wrap');

//     if(aktivdirmi!=-1){
//         navbar.classList.remove('show');

//     }
//     console.log(knopka.classList);
// }
$(document).ready(function() {
  $(".menu-icon").click(function() {
    $(".site-mobile-menu").toggleClass("active");
  });

  $(".sideBarBtn").click(function() {
    $(".site-mobile-menu").toggleClass("active");
  });

  // $('.sideBarBtn').click(function(){
  //     $(".site-menu-body").hide('');
  // });
});
