window.addEventListener('load',windowYuklendi);

function windowYuklendi(){

    // window.addEventListener('resize',function(e){
    //   console.log(e.currentTarget.innerHeight,e.currentTarget.innerWidth);
    // });


    window.addEventListener('scroll',function(melumat){
        var navTop=document.querySelector('site-navbar ul');
        
        if(window.scrollY>=111)
        {
        navTop.classList.add('site-navbar');
        }
        else
        {
        navTop.classList.remove('site-navbar');
        }
        
    });
}