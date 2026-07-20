/*
	Project Name : Manufactor
	
	-- Google Map
	
	## Document Scroll		
		
	## Document Ready
		-- Scrolling Navigation
		-- Find all anchors
		-- Add Easing Effect
		-- Responsive Caret	
		-- Remove p empty tag for Shortcode		
		-- Expand Panel		
		-- Slider Section
		-- Portfolio Section
		-- Client Section
		-- Testimonial Section
		-- Accordion Latestblog Section
		-- Subscribe Section
		-- WeAre Section
		-- WhyChoose Us Section
		-- Testimonial 2 Section
		-- Latest News Section
		-- Team Section
		-- AboutUs Section
		-- ServiceDetail
		-- Project Single
		-- ContactUs Section
		-- Shop
		-- Star Rating
		-- Price Filter		
		-- Contact Map
		-- Quick Contact Form
		-- Expanding Search

	## Window Load
		-- Site Loader
*/

(function($) {

	"use strict"	
	
	/* -- Google Map */
	function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = "images/marker.png";
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom") ,10);		
		var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);	
		
		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");
		
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map,marker);
		});	
	}
	
	/* -- iPad touch hover effect:: Home 1 Latest Blog */
	$('.post-img').on('click touchend', function(e) {
		var el = $(this);
	});
	
	/* -- iPad touch hover effect:: Blog Page Entry Ccver */
	$('.entry-cover').on('click touchend', function(e) {
		var el = $(this);
	});
	
	/* ## Document Scroll - Window Scroll */
	$( document ).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height )
		{
			$(".menu-block").addClass("navbar-fixed-top animated fadeInDown").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top animated fadeInDown");
		} 

		if ($(this).scrollTop() >= 50)
		{	
			/* If page is scrolled more than 50px */
			$("#back-to-top").fadeIn(200); /* Fade in the arrow */
		}
		else
		{
			$("#back-to-top").fadeOut(200); /* Else fade out the arrow */
		}
	});
		
	/* ## Document Ready - Handler for .ready() called */
	$(document).ready(function($) {
		/* -- Scrolling Navigation */
		var scroll	=	$(window).scrollTop();
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$(".menu-block").addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		}
		else
		{
			$(".menu-block").removeClass("navbar-fixed-top");
		} /* set sticky menu - end */
		
		/* local url of page (minus any hash, but including any potential query string) */
		var url = location.href.replace(/#.*/,'');

		/* -- Find all anchors */
		$("#navbar").find("a[href]").each(function(i,a) {

			var $a = $(a);
			var href = $a.attr("href");

			/* check is anchor href starts with page's URI */
			if ( href.indexOf(url+'#') == 0 ) {

				/* remove URI from href */
				href = href.replace(url,'');

				/* update anchors HREF with new one */
				$a.attr("href",href);
			}
		});

		/* -- Add Easing Effect on Section Scroll */
		$('.navbar-nav li a[href*=#]:not([href=#]), .site-logo a[href*=#]:not([href=#])').on('click', function() {

		   if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html, body').animate( { scrollTop: target.offset().top - 83 }, 1000, 'easeInOutExpo' );
					return false;
				}
			}
		});	
		
		/* -- Responsive Caret */
		$(".ddl-switch").on("click", function() {

			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* -- Remove p empty tag for Shortcode */
		$( "p" ).each(function() {
			var $this = $( this );
				if( $this.html().replace(/\s|&nbsp;/g, '').length == 0) {
				$this.remove();
			}
		});
		
		
		/* -- Expand Panel */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		/* Collapse Panel */
		$("#closeit").on ("click", function() {
			$("#slidepanel").slideUp("slow");	
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click */
		$("#toggle a").on ("click", function () {
			$("#toggle a").toggle();
		});
		
		/* -- Slider Section */		
		function doAnimations( elems ) {
			/* Cache the animationend event in a variable */
			var animEndEv = 'webkitAnimationEnd animationend';

				elems.each(function () {
				var $this = $(this),
					$animationType = $this.data('animation');
					$this.addClass($animationType).one(animEndEv, function () {
					$this.removeClass($animationType);
				});
			});
		}
		var $myCarousel = $('#home-slider'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");		
		$myCarousel.carousel();
		doAnimations($firstAnimatingElems);
		$myCarousel.carousel('pause');
		$myCarousel.on('slide.bs.carousel', function (e) {
			var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
			doAnimations($animatingElems);
		});

		/* -- Introduction Section */
		if( $(".introduction-section").length ) {
			$(".introduction-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".introduction-section .col-md-6").addClass( "animated fadeInLeft" );
					$(".introduction-section .row:last-of-type").addClass( "animated fadeInUp" );
				});
			});
		}		
		
		/* -- Portfolio Section */
		if( $(".portfolio-section").length){
			setTimeout(function() {
				var $container = $('.portfolio-list');
				$container.isotope({
				  itemSelector: '.portfolio-list > li',
				  gutter: 0,
				  transitionDuration: "0.5s"
				});

				$('#filters a').on('click',function(){
					$('#filters a').removeClass('active');
					$(this).addClass('active');
					var selector = $(this).attr('data-filter');
					$container.isotope({ filter: selector });		
					return false;
				});
			}, 4000);
			
			$(".portfolio-section").magnificPopup({
				delegate: ".zoom",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] 
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",
				}
			});
			
			$(".portfolio-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".portfolio-section").addClass( "animated slideInRight");
				});
			});
		}
		
		/* -- Client Section */
		if( $(".client-section").length ) {
			$(".client-logo-block").owlCarousel({
				loop: true,
				nav: false,
				dots: false,
				margin: 20,
				smartSpeed: 200,				
				autoplay: true,
				responsive:{
					0:{
						items: 2
					},
					480:{

						items: 3
					},
					640:{

						items: 3
					},
					992:{
						items: 5
					}
				}
			})
			
			$(".client-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".client-section").addClass( "animated bounceInLeft");
				});
			});
		}
		
		/* -- Testimonial Section */
		if( $(".testimonial-section").length ) {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				nav: false,
				dots: false,				
				margin: 20,
				smartSpeed: 200,				
				autoplay: true,
				responsive:{
					0:{
						items: 1
					},
					639:{

						items: 2
					},
					768:{

						items: 2
					},
					992:{
						items: 3
					}
				}
			})
		}
		
		/* -- Accordion Latestblog Section */
		if( $(".accordion-latestblog-section").length ) {
			$(".accordion-latestblog-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".accordion-section").addClass( "animated fadeInLeft");
					$(".latestblog-section").addClass( "animated fadeInRight");
				});
			});
		}
	
		/* -- Subscribe Section */
		if( $(".subscribe-section").length ) {
			$(".subscribe-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".subscribe-section").addClass( "animated fadeInUp");
				});
			});
		}
		
		/* -- WeAre Section */
		if( $(".weare-section").length ) {
			$(".weare-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".weare-section").addClass( "animated fadeInLeft");
				});
			});
		}
		
		/* -- WhyChoose Us Section */
		if( $(".whychooseus").length ) {
			$(".whychooseus").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".whychooseus .col-md-6:nth-child(odd)").addClass( "animated slideInLeft");
					$(".whychooseus .col-md-6:nth-child(even)").addClass( "animated slideInRight");
				});
			});
		}
		
		/* -- Testimonial 2 Section */
		if( $(".testimonial2-section").length ) {
	
			$( "#testimonial2 .total_index" ).html( $("#testimonial2 .item").length );
			if( $("#testimonial2 .item").length > 1 ){
				if( $("#testimonial2 .item.active").index() == 0 ){
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
				} else if( $("#testimonial2 .item.active").index() == $("#testimonial2 .item").length - 1 ) {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
					$( "#testimonial2 .index_next" ).html( 1 );
				} else {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
				}
			} else {
				$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
				$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item").length );
			}
			
			$("#testimonial2").on("slide.bs.carousel", function () {
				
				if( $("#testimonial2 .item").length > 1 ){
					if( $("#testimonial2 .item.active").index() == 0 ){
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
						$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
					} else if( $("#testimonial2 .item.active").index() == $("#testimonial2 .item").length - 1 ) {
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
						$( "#testimonial2 .index_next" ).html( 1 );
					} else {
						$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item.active").index() );
						$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item.active").index() + 2 );
					}
				} else {
					$( "#testimonial2 .index_prev" ).html( $("#testimonial2 .item").length );
					$( "#testimonial2 .index_next" ).html( $("#testimonial2 .item").length );
				}
			});	
			
			$(".testimonial2-section").each(function () {
				
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".testimonial2-section").addClass( "animated lightSpeedIn");
				});
			});
		}
		
		/* -- Latest News Section */
		if( $(".latestnews-section").length ) {
			$(".latestnews-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".latestnews-section").addClass( "animated fadeInRight");
				});
			});
		}
		
		/* -- Team Section */
		if( $(".team-section").length ) {
			$(".team-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".team-section").addClass( "animated pulse");
				});
			});
		}
		
		/* -- AboutUs Section */
		if( $(".aboutus-section").length ) {
			$(".aboutus-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".aboutus-section .aboutus-image").addClass( "animated slideInLeft");
					$(".aboutus-section .aboutus-content").addClass( "animated slideInRight");
				});
			});
		}		
		
		/* -- ServiceDetail  */		
		function service_details(){
			var width	=	$(window).width();
			if( width <= 767 ){
				
				$('.servicedetail-tab .nav-tabs li > a').on('click', function() {
					$('html, body').animate({ scrollTop: $(".tab-content").offset().top - 130}, 2000 );
				});
			}
		}
		
		service_details();
		
		if( $(".servicedetail").length ) {
			$(".servicedetail").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".servicedetail .col-md-3").addClass( "animated slideInLeft");
					$(".servicedetail .col-md-9").addClass( "animated slideInRight");
				});	
			});
		}
		
		/* -- Project Single */
		if( $(".projectsingle").length ) {
			$(".projectsingle").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".projectsingle .projectsingle-content_part").addClass( "animated slideInLeft");
					$(".projectsingle .projectsingle-img_part").addClass( "animated slideInRight");
				});
			});
		}	
			
		/* -- ContactUs Section */
		if( $(".contactus-section").length ) {
			$(".contactus-section").each(function () {
				var $this = $(this);
				var myVal = $(this).data("value");
				$this.appear(function() {
					$(".contactus-section .col-md-4:nth-of-type(1)").addClass( "animated slideInLeft");
					$(".contactus-section .col-md-4:nth-of-type(2)").addClass( "animated slideInDown");
					$(".contactus-section .col-md-4:nth-of-type(3)").addClass( "animated slideInRight");		
				});
			});
		} 
		
		/* -- Shop */
		$( '.wc-tabs-wrapper, .woocommerce-tabs' )
			.on( 'init', function() {
				$( '.wc-tab, .woocommerce-tabs .panel:not(.panel .panel)' ).hide();

				var hash  = window.location.hash;
				var url   = window.location.href;
				var $tabs = $( this ).find( '.wc-tabs, ul.tabs' ).first();

				if ( hash.toLowerCase().indexOf( 'comment-' ) >= 0 || hash === '#reviews' ) {
					$tabs.find( 'li.reviews_tab a' ).on("click")
				} else if ( url.indexOf( 'comment-page-' ) > 0 || url.indexOf( 'cpage=' ) > 0 ) {
					$tabs.find( 'li.reviews_tab a' ).on("click")
				} else {
					$tabs.find( 'li:first a' ).on("click")
				}
			})
			.on( 'click', '.wc-tabs li a, ul.tabs li a', function() {
				var $tab          = $( this );
				var $tabs_wrapper = $tab.closest( '.wc-tabs-wrapper, .woocommerce-tabs' );
				var $tabs         = $tabs_wrapper.find( '.wc-tabs, ul.tabs' );

				$tabs.find( 'li' ).removeClass( 'active' );
				$tabs_wrapper.find( '.wc-tab, .panel:not(.panel .panel)' ).hide();

				$tab.closest( 'li' ).addClass( 'active' );
				$tabs_wrapper.find( $tab.attr( 'href' ) ).show();

				return false;
			})
			.trigger( 'init' );

		$( 'a.woocommerce-review-link' ).on("click" ,function() {
			$( '.reviews_tab a' ).on("click");
			return true;
		});
		
		/* -- Star Rating  */
		$( '#rating' ).hide().before( '<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>' );

		$( 'body' )
			.on( 'click', '#respond p.stars a', function() {
				var $star   	= $( this ),
					$rating 	= $( this ).closest( '#respond' ).find( '#rating' ),
					$container 	= $( this ).closest( '.stars' );

				$rating.val( $star.text() );
				$star.siblings( 'a' ).removeClass( 'active' );
				$star.addClass( 'active' );
				$container.addClass( 'selected' );

				return false;
			})
			.on( 'click', '#respond #submit', function() {
				var $rating = $( this ).closest( '#respond' ).find( '#rating' ),
					rating  = $rating.val();

				if ( $rating.size() > 0 && ! rating && wc_single_product_params.review_rating_required === 'yes' ) {
					window.alert( wc_single_product_params.i18n_required_rating_text );

					return false;
				}
			});
		
		/* -- Price Filter */
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 15000,
			values: [ 0, 10000 ],
			slide: function( event, ui ) {
				$( "#amount" ).html( "$" + ui.values[ 0 ] )
				$( "#amount2" ).html( "$" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount2" ).html( " $" + $(  "#slider-range" ).slider( "values", 1 ) );		
		
		/* -- Contact Map */
		if($("#map-canvas-contact").length==1){
			initialize("map-canvas-contact");
		}
		
		/* -- Quick Contact Form */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();				
					}			
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
			return false;
			$("#contact-form").attr("action", "saveQuery").submit();
		});
		
		/* -- Quick Contact Form 2 */
		$( "#btn_submit2" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact2.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");
						$("#input_name").val("");
						$("#input_email").val("");
						$("#input_phone").val("");
						$("#textarea_message").val("");
						$("#alert-msg").show();				
					}
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
			return false;
			$("#contact-form2").attr("action", "saveQuery").submit();
		});	
		
		/* -- Expanding Search */
		new UISearch( document.getElementById( "sb-search" ) );
		
	});	/* -- Document Ready /- */
	
	/* ## Window Load - Handler for .load() called */
	$(window).load(function() {
		/* -- Site Loader */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
	});

})(jQuery);

jQuery(document).ready(function(){
	
	/* This button will increment the value*/
	$(".qtyplus").on( "click", function(e){
		/* Stop acting like a button */
		e.preventDefault();

		/* Get the field name */
		fieldName = $(this).attr('data-field');

		/* Get its current value */
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		
		/* If is not undefined */
		if (!isNaN(currentVal)) {
			/* Increment */
			$('input[name='+fieldName+']').val(currentVal + 1);
		} else {
			/* Otherwise put a 0 there */
			$(this).find('input[name='+fieldName+']').val(0);
		}
	});

	/* This button will decrement the value till 0 */
	$(".qtyminus").on( "click" , function(e) {		
		e.preventDefault();		
		fieldName = $(this).attr('data-field');		
		var currentVal = parseInt($('input[name='+fieldName+']').val());		
		if (!isNaN(currentVal) && currentVal > 0) {			
			$('input[name='+fieldName+']').val(currentVal - 1);
		} else {			
			$('input[name='+fieldName+']').val(0);
		}
	});
});