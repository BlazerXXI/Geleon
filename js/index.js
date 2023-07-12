$(document).ready(function () {
	$("#headerMenu").click(function () {
		$(this).toggleClass("menu-active");

		if ($(this).hasClass("menu-active")) {
			$(".menu__body").css("display", "flex");
		} else {
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
});
