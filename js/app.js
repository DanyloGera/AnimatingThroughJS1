$('.spoiler1').hide();

$('.spoilerButton1').on('click', function () {
  $('.spoilerButton1').hide();
  $('.spoiler1').slideDown(2000);
});

$('.spoiler1').on('click', function () {
  $('.spoiler1').hide();
  $('.spoilerButton1').slideDown(2000);
});
$('.spoiler2').hide();

$('.spoilerButton2').on('click', function () {
  $('.spoilerButton2').hide();
  $('.spoiler2').slideDown(2000);
});

$('.spoiler2').on('click', function () {
  $('.spoiler2').hide();
  $('.spoilerButton2').slideDown(2000);
});
