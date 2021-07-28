$('.color-palette li').on('click', function() {
  $(this).siblings().removeClass('selected');
  $(this).toggleClass('selected');
});
