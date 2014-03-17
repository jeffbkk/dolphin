$(function() {
	var toggle = $('#toggle'),
        body = $('body')
	      sidebar = $('#sidebar'),
	      pl = $('.avatar-link'),
        closeModal = $('.modal-close'),
        contentListing =$('.contents-listing'),
        contentList =$('.contents-items'),
	      filters = $('.filters'),
	      h = $('header:first'),
	      wrapper = $('#wrapper'),
        contentEdit = $('.edit-contents'),
	      main = $('#main');

        closeModal.bind("click", function(){
          body.toggleClass("modal-open");
          return false;

        });


        contentEdit.bind('click',function(event) {
          body.addClass("modal-open");
          return false;
        });


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





       // Login / Forgot passowrd form switching
       // Caching element

       var $forms = $('#login-form-container form'),
           $currentForm = $('form.active'),
           hidden = false,
           $linkForm = $forms.find('.linkform');

           // $forms.each(function(){
           //    var theForm = $(this);

           //    if (!theForm.hasClass('active')) 
           //        theForm.hide();
           // });


           // je clique sur le lien

           // le formulaire visible se barre
              // on enleve la class visible et on met la class hidden du formulaire ou peut etre la class visible partout
              // une fois la class visible enleve ==> on met notre formaulaure sur display none 
              // nous mettons le formulaire sur display block 
              // nous enlevons le class hidden et ajoutons la class visible

              // je renvois faux 

           $linkForm.bind('click', function(){

             var $link = $(this),
                 target = $link.attr('rel');
                 $currentForm =  $('form:visible');
                 console.log($currentForm);
             
             $('form').attr('class','').addClass('offset').delay(100).queue(function(){
                $(this).attr('class','').addClass('hidden');
                $currentForm = $('form.'+target);

                $currentForm.removeClass('hidden').addClass('in').delay(100).queue(function(){
                   $(this).removeClass('in').addClass('slideIn', 'active');
                });

             });

             return false;
           });


	      
});