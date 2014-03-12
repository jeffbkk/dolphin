$(function() {
	var toggle = $('#toggle'),
	      sidebar = $('#sidebar'),
	      pl = $('.avatar-link'),
            contentListing =$('.contents-listing'),
            contentList =$('.contents-items'),
	      filters = $('.filters'),
	      h = $('header:first'),
	      wrapper = $('#wrapper'),
	      main = $('#main');


                  pl.bind('click', function(){
                  	// alert('yes');
                  	h.toggleClass('visible');
                  	return false;
                  });


                  // Filter for the contents part 

                 filters.bind('click', function(){
                     dt = $(this).attr('data-type');
                      if ( dt =='all') {
                         return false;
                     };
                     var $filter = contentList.filter(function(){
                         return $(this).attr('data-type') == dt;
                     });

                     contentList.addClass('hidden');
                     contentList.attr("[data-type='"+dt+"']").removeClass('hidden').addClass('fadeinUp');
                    
                     // contentList.addClass('fadeinUp');
                    return false;
                 });


	      
});