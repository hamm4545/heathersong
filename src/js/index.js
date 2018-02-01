var $ = require("jquery");
import './es6code'; // hello there!
import './jQuery-easing-v1.3'; 
import backgroundVideo from '../img/background-video.mp4';
import mobileBackground from '../img/mobile-background.jpg';


$(window).on('load', function() { // makes sure the whole site is loaded 
  $('.status').fadeOut(); // will first fade out the loading animation 

  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
 
  // $('#preloader').delay(350).fadeOut('slow', function(){
  //     $(window).css("overflow","auto");
  // });
  $('body').delay(350).removeClass('loading');
  // $('body').delay(350).css({'overflow-y':'visible'});
});




var $page		= $('html, body');
var	workSection		= $('#details');
var topMargin	= 75;
var duration	= 800;

// $('.arrow').click(function(e){
//    e.preventDefault();
// 	var navId = workSection;
// 	indexNav(navId);
// });


$('.arrow').on('click', function(e){
   e.preventDefault();
  var navId = workSection;
  indexNav(navId);
});

function indexNav(navId){
	var id = navId;
	var scrollEnd =$(id).offset().top - topMargin;
	
	$page.animate({scrollTop:scrollEnd},duration,"easeInOutExpo");
}

$('.toTop').on('click', function(e){
  e.preventDefault();

	$('html, body').animate({
      scrollTop: 0
    }, duration, "easeInOutExpo");

    return false;
});



// Get IE or Edge browser version
var version = detectIE();

if (version === false) {
  //document.getElementById('result').innerHTML = '<s>IE/Edge</s>';
  
} else if (version >= 11) {
  //document.getElementById('result').innerHTML = 'Edge ' + version;
  $('.browser-version').addClass('show').parent().find('main').addClass('hide');
} else {
  //document.getElementById('result').innerHTML = 'IE ' + version;
  $('.browser-version').addClass('show').parent().find('main').addClass('hide');
  // $('body').addclass('hide');
}


var isIE = /*@cc_on!@*/false || !!document.documentMode, // Internet Explorer 6-11
    isEdge = !isIE && !!window.StyleMedia; // Edge 20+
 
// Check if Internet Explorer 6-11 OR Edge 20+
if(isIE || isEdge) {
 	$('.browser-version').addClass('show').parent().find('main').addClass('hide');
}


// add details to debug result
// document.getElementById('browser-details').innerHTML = window.navigator.userAgent;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {

	//for test
  //return 10;
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);

  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    console.log('Edge');
  }

  // other browser
  return false;
}