$(document).ready(function(){
	var $f;
	var $m;
	var v = false;
	$("#goVeg").click(function(){
		
		$f = $(".fish").parent().parent().detach();
		$(".hamburger").replaceWith("<li class='portobello'><em>portobello mushrooms</em></li>");
		$(".meat").after("<li class='tofu'><em>Tofu</em></li>");
		$m = $(".meat").detach();
		v = true;
		$("li").addClass("veg_leaf");
		$("#goVeg").addClass("goVeg");
	});

	$("#restore").click(function(){
		if (v){
		$("#main_entrees1 > li").first().before($f);
		$(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
		$(".tofu").each(function(i){
			$(this).replaceWith($m[i]);
		});
		v = false;
		$("li").removeClass("veg_leaf");
		$("#goVeg").removeClass("goVeg");
	}
	});
	
});