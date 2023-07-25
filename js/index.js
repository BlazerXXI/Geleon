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

	// animation sections
	$(".scheme-of-work li").mouseenter(function () {
		$(this).addClass("hovered");
	});

	$(".scheme-of-work li").mouseleave(function () {
		$(this).removeClass("hovered");
	});

	$(".guarantee li").mouseenter(function () {
		$(this).addClass("hovered");
	});

	$(".guarantee li").mouseleave(function () {
		$(this).removeClass("hovered");
	});

	// slider
	let slideIndex = 1;
	showSlides(slideIndex);

	function nextSlide() {
		showSlides((slideIndex += 1));
	}
	function previousSlide() {
		showSlides((slideIndex -= 1));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	function showSlides(n) {
		let slides = $(".slider__item");
		console.log(slides.length);

		if (n > slides.length) {
			slideIndex = 1;
		} else if (n < 1) {
			slideIndex = slides.length;
		}
		for (let slide of slides) {
			slide.style.display = "none";
		}
		slides[slideIndex - 1].style.display = " block";
	}

	$(".next").click(function () {
		nextSlide();
	});
	$(".previous").click(function () {
		previousSlide();
	});

	let touchStartX = 0;
	let touchEndX = 0;

	$(".slider-primary").on("touchstart", function (event) {
		touchStartX = event.originalEvent.touches[0].clientX;
	});

	$(".slider-primary").on("touchend", function (event) {
		touchEndX = event.originalEvent.changedTouches[0].clientX;
		handleSwipe();
	});

	function handleSwipe() {
		const minSwipeDistance = 50;

		if (touchEndX < touchStartX - minSwipeDistance) {
			nextSlide();
		} else if (touchEndX > touchStartX + minSwipeDistance) {
			previousSlide();
		}
	}
});
