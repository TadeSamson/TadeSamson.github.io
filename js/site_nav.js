
$(function () {
    
    var main_container = $('.st-content' ),
        filter_bar = $(".nav_pane"),
        db_sidebar = $(".nav_sidebar"),
        mobile_menu = $(".admin_nav"),
        desktop_nav_holder = $(".right_nav"),
        mobile_menu_holder = $(".mobile_menu"),
        filter_trigger = $('.panel_handle');
        
    
    //on resize, move search and top nav position according to window width
	var resizing = false;
	moveNavigation();
	$(window).on('resize', function(){
		if( !resizing ) {
			(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
			resizing = true;
		}
	});
    
    function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.st-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}

	function moveNavigation(){
  		var mq = checkMQ();
        
        if ( mq == 'mobile') {
            detachElements();
			mobile_menu.appendTo(mobile_menu_holder);
            filter_bar.addClass("panel_rendered");
            db_sidebar.addClass("panel_rendered");
		} else if ( ( mq == 'tablet') || ( mq == 'desktop')  ) {
            detachElements();
            mobile_menu.appendTo(desktop_nav_holder);
            filter_bar.removeClass("panel_rendered");
            db_sidebar.removeClass("panel_rendered");
		}
		resizing = false;
	}
    
    function detachElements() {
		mobile_menu.detach();
	}
    
    filter_trigger.on('click', function() {
        setTimeout( function() {
            db_sidebar.toggleClass("is_opened");
            filter_bar.toggleClass("is_opened");
        }, 25 );
    });
        
}); 

/*File upload Script 
Changes the name of the upload button to the name of the file selected for upload
*/

;( function( $, window, document, undefined )
{
    $( '.inputfile' ).each( function()
    {
        var $input   = $(this),
            $label   = $input.next( 'label' ),
            labelVal = $label.html();

        $input.on( 'change', function( e )
        {
            var fileName = '';

            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else if( e.target.value )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                $label.find( 'span' ).html( fileName );
            else
                $label.html( labelVal );
        });

        // Firefox bug fix
        $input
        .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
        .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
})( jQuery, window, document );

/*End of file upload script*/