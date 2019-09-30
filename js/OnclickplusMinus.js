$(document).ready(function(){


  $('.up_count').click(function(){
      var cariKnopka=this;
      var monitor =$(cariKnopka).prev();
      var value= $(monitor).val();
      value++;
      $(monitor).val(value);
    
  });

  $('.down_count').click(function(){
    var cariKnopka=this;
    var monitor =$(cariKnopka).next();
    var value= $(monitor).val();
    value--;
    $(monitor).val(value);
  
});




});


  