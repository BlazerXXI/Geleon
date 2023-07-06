"use strict";

const headerMenu = document.querySelector("#headerMenu");
const navListHeader = document.querySelector(".menu__body");

headerMenu.addEventListener("click", () => {
	headerMenu.classList.toggle("menu-active");

	if (headerMenu.classList.contains("menu-active")) {
		navListHeader.style.display = "flex";
	} else {
		navListHeader.style.display = "none";
	}
});
