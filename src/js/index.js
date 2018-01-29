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