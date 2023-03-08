const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu-list");
const menuList = document.querySelector("#list-wrapper");

button.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	menu.classList.toggle("absolute");
	menu.classList.toggle("top-16");
	menu.classList.toggle("left-0");
	menuList.classList.toggle("flex");
	menuList.classList.toggle("flex-col");
	menuList.classList.toggle("bg-black");
});

window.addEventListener("resize", () => {
	if (window.screen.width >= 640) {
		menu.classList.add("hidden");
		menu.classList.remove("absolute");
		menu.classList.remove("top-16");
		menu.classList.remove("left-0");
		menuList.classList.add("flex");
		menuList.classList.remove("flex-col");
		menuList.classList.remove("bg-black");
	}
});
