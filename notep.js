$(function() {
  $('#time_area').hide();
  $('body').click(function  () {
      if ($('#task_list_container').is(":visible")) {
        $('#task_list_container').hide();
        $('#time_area').show();
      }else{
        $('#task_list_container').show();
        $('#time_area').hide();
      }
  });
  $('#quick_btn').draggable();
  $('#task_list_container').click(function  () {
      console.log('bbbbbbbbbbbbbb');
      return false;
  });
});