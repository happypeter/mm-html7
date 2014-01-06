$('document').ready(function(){
  $('.user-detail-content').children('.my-books').show();
  $('.user-detail-list ul li').click(function(e){
    $('.user-detail-list ul li').removeClass('active');
    var thisClass = $(this).attr('class');
    $(this).addClass('active');
    $('.user-detail-content').children().hide();
    $('.user-detail-content').children('.' + thisClass).show();
    e.preventDefault();
  });
});
