$(document).ready(function () {
	const headerMenu = $("#headerMenu");
	const navListHeader = $(".menu__body");

	headerMenu.on("click", function () {
		headerMenu.toggleClass("menu-active");

		if (headerMenu.hasClass("menu-active")) {
			navListHeader.css("display", "flex");
		} else {
			navListHeader.css("display", "none");
		}
	});
});
