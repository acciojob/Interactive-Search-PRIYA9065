//your JS code here. If required.
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const div = document.querySelector(".search");


btn.addEventListener("click", () => {
	input.focus();
	div.classList.add("active");	
})