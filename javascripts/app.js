$('label[for="country"],#country').hide();
$('#contact div').append('<label for="imhuman"> <input type="checkbox" id="imhuman" name="imhuman" style="display: none;"><span class="custom checkbox"></span>  I am human!</label>');
/* Foundation v2.1.3 http://foundation.zurb.com */
$(document).ready(function () {	
	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
	  var $activeTab = $tab.closest('dl').find('a.active'),
	      contentLocation = $tab.attr("href") + 'Tab';

	  //Make Tab Active
	  $activeTab.removeClass('active');
	  $tab.addClass('active');

    //Show Tab Content
		$(contentLocation).closest('.tabs-content').find('li').hide();
		$(contentLocation).show();
	}

	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
		  activateTab($(this));
		});
	});

	if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]'));
  }


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* DROPDOWN NAV ------------- */
	/*
	$('.nav-bar li a, .nav-bar li a:after').each(function() {
		$(this).data('clicks', 0);
	});
	$('.nav-bar li a, .nav-bar li a:after').bind('touchend click', function(e){
		e.stopPropagation();
		e.preventDefault();
		var f = $(this).siblings('.flyout');
		$(this).data('clicks', ($(this).data('clicks') + 1));
		if (!f.is(':visible') && f.length > 0) {
			$('.nav-bar li .flyout').hide();
			f.show();
		}
	});
	$('.nav-bar li a, .nav-bar li a:after').bind(' touchend click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		if ($(this).data('clicks') > 1) {
			window.location = $(this).attr('href');
		}
	});
	$('.nav-bar').bind('touchend click', function(e) {
		e.stopPropagation();
		if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
			e.preventDefault();
		}
	});
	$('body').bind('touchend', function(e) {
		if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
			$('.nav-bar li .flyout').hide();
		}
	});
	*/
	var contact = $('#contact');
	contact.submit(function(){
		contact.fadeOut('slow');
		$('h2#title').text('Message sent!');
		$.post("contactme.php",contact.serialize());		
		return false;
	});
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27936244-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();