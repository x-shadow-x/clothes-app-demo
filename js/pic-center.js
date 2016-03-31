//设置商品图片居中显示
$(function() {
	var img = new Image();
	img.src = $('.good-pic').eq(0).attr('src');
	img.onload = function() {
		var imgHeight = $('.good-pic').eq(0).css('height');

		$('.swiper-slide').css('position', 'relative');
		imgHeight = parseInt(imgHeight);
		var marginTop = imgHeight / 2;

		$('.good-pic').css('position', 'absolute').css('top', '50%').css('margin-top', -marginTop + 'px');
		}
});