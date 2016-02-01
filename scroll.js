function scroll() {
	y = window.pageYOffset;
	header = document.getElementById("header")
	
	header.style.top = y*0.6 + "px";
}
window.addEventListener("scroll", scroll)