$(document).ready(function () {
	$("#headerMenu").click(function () {
		$("#headerMenu").toggleClass("menu-active");

		if ($("#headerMenu").hasClass("menu-active")) {
			$(".menu__body").css("display", "flex");
		} else {
			$(".menu__body").css("display", "none");
		}
	});
	$(".main").click(function () {
		if ($("#headerMenu").hasClass("menu-active")) {
			$("#headerMenu").removeClass("menu-active");
			$(".menu__body").css("display", "none");
		}
	});

	// modal open
	$("#requestCallButton").click(function () {
		$("#modalRequest").addClass("d-flex").removeClass("d-none");
		$("#modalBackground").addClass("d-flex").removeClass("d-none");
		$("#modalContainer").addClass("d-flex").removeClass("d-none");
	});

	// modal close with click background modal
	$("#modalBackground").click(function () {
		$("#modalRequest").addClass("d-none").removeClass("d-flex");
		$("#modalBackground").addClass("d-none").removeClass("d-flex");
		$("#modalContainer").addClass("d-none").removeClass("d-flex");
	});
	// modal close with click close button
	$("#closeButtonModal").click(function () {
		$("#modalRequest").addClass("d-none").removeClass("d-flex");
		$("#modalBackground").addClass("d-none").removeClass("d-flex");
		$("#modalContainer").addClass("d-none").removeClass("d-flex");
	});
	// modal close with click submit button
	$("#requestCallButtonModal").click(function () {
		$("#modalRequest").addClass("d-none").removeClass("d-flex");
		$("#modalBackground").addClass("d-none").removeClass("d-flex");
		$("#modalContainer").addClass("d-none").removeClass("d-flex");
	});

	// animation quality-of-materials__list

	$(window).scroll(function() {
		const classes = [
			".hero__container",
			".partners ul",
			".quality-of-materials__list",
			".write-to-us__form-container",
			".select-materials ul",
			".scheme-of-work__container ul",
			".feedback img",
			".guarantee ul",
			".free-consultation__container div",
			".consumables img"
		];
	
		const windowTop = $(window).scrollTop();
		const windowBottom = windowTop + $(window).height();
		
		const elements = $(classes.join(','));
		
		elements.each(function() {
			const elementTop = $(this).offset().top;
			const elementBottom = elementTop + $(this).height();
			
			if (elementBottom >= windowTop && elementTop <= windowBottom) {
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					
					$(this).css("opacity", "0").animate({ opacity: 1 }, 3000);
				}
			}
		});
	});
	
});
