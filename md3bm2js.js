//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
