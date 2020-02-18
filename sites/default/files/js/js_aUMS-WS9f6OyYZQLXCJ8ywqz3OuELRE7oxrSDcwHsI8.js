
/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;
/*
 * Match Heights Plugin
 * Match the heights of targeted elements
 * 
 * Version 1.3
 * Updated 4/7/2010
 * Copyright (c) 2010 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
(function(a){a.fn.matchHeights=function(b){b=jQuery.extend(this,{minHeight:null,maxHeight:null},b);tallest=b.minHeight?b.minHeight:0;this.each(function(){if(a(this).innerHeight()>tallest)tallest=a(this).outerHeight()});if(b.maxHeight&&tallest>b.maxHeight)tallest=b.maxHeight;return this.each(function(){extra=a(this).innerHeight()-a(this).height();extra+=a(this).outerHeight()-a(this).innerHeight();a.browser.msie&&a.browser.version==6||b.maxHeight?a(this).css({height:tallest-extra}):a(this).css({"min-height":tallest-extra})})}})(jQuery);;
(function ($) {
Drupal.behaviors.actionTBHotel = {
  attach: function (context) {
    $(".change-skin-button").click(function() {
      parts = this.href.split("/");
      style = parts[parts.length - 1];
        $.cookie("nucleus_skin", style, {path: '/'});
        window.location.reload();
      return false;
      });
    $('body.front #main-content > .grid-inner, body.front #sidebar-first-wrapper > .grid-inner, body.front #sidebar-second-wrapper > .grid-inner').nucleusMatchHeight();
    $('.btn-btt').click(function(){
      scrollTo(0, 0);
    });
	$("#change_skin_menu_wrapper").mouseenter(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: 0}, 1000);	  
    }).mouseleave(function() {
      $('#change_skin_menu_wrapper').stop(true, false).animate({left: -61}, 1000);
	});
  }
};
})(jQuery);


jQuery.fn.nucleusMatchHeight = function (maxHeight) {
	var height		= 0;
	if(maxHeight == undefined) {
		maxHeight = 0;
	}
	this.each(function () {
		height		= jQuery(this).outerHeight();
		maxHeight	= (height > maxHeight) ? height : maxHeight;
	});

	return this.each(function () {
		var t			= jQuery(this);
		var minHeight	= maxHeight - (t.outerHeight() - t.height());
		t.css('min-height', minHeight + 'px');
	});
};
;
