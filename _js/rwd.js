(function(win, $, undefined){
	$(function() {
		
		var $navHeadings = $('h1.sections-heading');

		$navHeadings.each(function() {
			$hed = $(this);

			// modify DOM and attrs on nav
			$hed.parent().addClass('reeler');
			$hed.next().is('ul') ? $hed.next().addClass('reel-content-closed') : null; // do something smarter, like look elsewhere in DOM for collapsible content
			$hed.wrapInner('<a href="#" class="reel-toggle"></a>');
			var toggle = $('.reel-toggle');

			// add open, close and toggle events
			$hed
				.bind('open', function(e) {
					$ul = $(this).next();
					$ul.addClass('reel-open');					
				})
				.bind('close', function() {
					$ul.addClass('reel-closed');
				})
				.bind('toggleReel', function(e) {
					$ul = $(this).next();
					
					if ( $ul.hasClass('reel-open') ) {
						$ul.removeClass('reel-open');
						$(this).trigger('close');
					} else {
						$ul.hasClass('reel-closed') ? $ul.removeClass('reel-closed') : null;
						$(this).trigger('open');
					}
					
				});
				
			$hed.click(function(e) {
				$(this).trigger('toggleReel');
				e.preventDefault();
			});
		});
		
		
	});

})(window, jQuery);