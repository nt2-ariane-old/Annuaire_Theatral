WebFont.load({
  google: {
    families: ["Lekton:regular","Yellowtail:regular","Playfair Display:regular,italic,700"]
  }
});
jQuery(".fancybox-video").fancybox({
	type: "iframe",
	// other API options
});
   jQuery(document).ready(function($) {

   /* Preloader */

   /* jquery counter */
   // eg: 01/01/2017 00:00:00
   if (jQuery('.countdown').length) {
      var time = jQuery('.countdown').attr('data-countdown');
      jQuery('.countdown').downCount({
      date: time,
      offset: +1
   });     	
   }
   jQuery('.get-bg').each(function($){
      var data_bg = jQuery(this).attr('data-bg');
      jQuery(this).attr('style',data_bg);
   });

   $('.filter-cont .filters').click(function(){ 
      if($("a.button").is(":checked")) { 
      }else { 
         return false;
      }
   });
      // // handle links with @href started with '#' only
      // $('.link-nav-2').on('click', 'a[href^="#"]', function(e) {
      //     // target element id
      //     var id = $(this).attr('href');
          
      //     // target element
      //     var $id = $(id);
      //     if ($id.length === 0) {
      //         return;
      //     }
          
      //     // prevent standard hash navigation (avoid blinking in IE)
      //     e.preventDefault();
          
      //     // top position relative to the document
      //     var pos = $(id).offset().top;
          
      //     // animated top scrolling
      //     $('body, html').animate({scrollTop: pos});
      // });
   });
