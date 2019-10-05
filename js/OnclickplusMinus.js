$(document).ready(function() {
  $(".input-group-prepend").click(function() {
    let cariKnopka = this;
    let monitor = $(cariKnopka).next()[0];

    let value = $(monitor).val();
    if (value <= 0) {
      value = 0;
    } else {
      value--;
    }
    $(monitor).val(value);
  });

  $(".input-group-append").click(function() {
    let cariKnopka = this;
    let monitor = $(cariKnopka).prev()[0];
    let value = $(monitor).val();
    value++;
    $(monitor).val(value);
  });
});
