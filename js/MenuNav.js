// function change(knopka){
//     var aktivdirmi =knopka.classList.value.indexOf('active');
//     var navbar = document.getElementById('site-wrap');

//     if(aktivdirmi!=-1){
//         navbar.classList.remove('show');

//     }
//     console.log(knopka.classList);
// }
$(document).ready(function(){
    $('#menu-nav').click(function(){
        $("#show-menu").toggle();
        console.log(function())
    });

});

$(document).ready(function(){
    $('#close').click(function(){
        $("#menu-body").hide();
    });

});