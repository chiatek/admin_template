$(document).ready(function(){
	
	menu_toggle();
	
});

function menu_toggle() {

	$('.sidebar-toggle-btn').on('click', function(){
		
		var toggle_width = "0px";
		var width = "0px";
		
		if(window.innerWidth > 768) {
			width = "70px";
		}
		
		if($(".sidebar-wrapper").width() == 220) {
			toggle_width = width;
			$('.sidebar-wrapper').animate({ "top": "-80px", "height": "1000px", "width": toggle_width });
			$('.sidebar-icon').animate({ "font-size": "18px" });
			$('.sidebar-options').hide();
			$('.profile-txt').hide();
			$('.sidebar-txt').hide();
			$('.profile-image').hide();
			$('.sidebar-nav').css("margin-top","164px");
		}
		else {
			toggle_width = "220px";
			$('.sidebar-wrapper').animate({ "top": "0px", "width": toggle_width });
			$('.sidebar-icon').animate({ "font-size": "15px" });
			$('.sidebar-options').delay(505).show(0);
			$('.profile-txt').delay(505).show(0);
			$('.sidebar-txt').delay(500).show(0);
			$('.profile-image').delay(500).show(0);
			setTimeout( function(){
				$('.sidebar-nav').css("margin-top","0px");
			}, 500);
		}	

		$('.page-wrapper').animate({ "left": toggle_width, "padding-right": toggle_width });
		$('.header-bkg-img').animate({ "width": toggle_width });
	});	
}

function dropdown() {
    var x = document.getElementById("dropdown");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
}
