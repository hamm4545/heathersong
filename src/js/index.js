console.log(`I've been required by Webpack`);
var $ = require("jquery");
import './es6code'; // hello there!
import backgroundVideo from '../img/background-video.mp4';
import mobileBackground from '../img/mobile-background.jpg';


console.log($.fn.jquery);

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('.status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

var $page		= $('html, body');
var	workSection		= $('#details');
var topMargin	= 75;
var duration	= 800;

$('.arrow').click(function(){
	var navId = workSection;
	indexNav(navId);
});


function indexNav(navId){
	var id = navId;
	var scrollEnd =$(id).offset().top - topMargin;
	
	$page.animate({scrollTop:scrollEnd},duration,"ease");
}