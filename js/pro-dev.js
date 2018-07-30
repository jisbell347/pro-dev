function toggleNav() {
	const x = document.getElementById("toggleNav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}