$(document).ready(function(){

  setTimeout(function(){
    $(".bgv_check_det").addClass("active");
   }, 1000);

   $(".close_check_details").click(function(){
     $(".bgv_check_det").removeClass("active");
   })

  $(".modal_open").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    let modal = $(this).attr("data-modalName");
    $("#"+modal+"").addClass("active");
  })

  $(".custom_modal .close").click(function(){
    // console.log("close");
    $(this).closest(".custom_modal").removeClass("active");
  })

  // scroll_actions -active
  $(".scroll_actions li span").click(function(){
    $(this).parent().parent().parent(".scroll_actions").toggleClass("active");
  })

  // profile_card_show
  $(".open_popup").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).children(".action_popup").toggleClass("active");
  });
  $(".open_filter").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).siblings(".filter_wrap").toggleClass("active");
  });

  $(".close_popup").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).closest(".filter_wrap").removeClass("active");
  })

  $(".popup_level_2 .popup_body").click(function(e){
    e.stopPropagation();
    e.preventDefault();
  })
  
  $(".docs_mainwrap p, .info_table .accordion-toggle").click(function(e){
    e.stopPropagation();
    e.preventDefault();
  })

  // sidebar add class
  $(".side_menu").click(function() {
    $(".leftSideBar").toggleClass("active");
  })
})
$(function() {
  $('.box').matchHeight();
});
