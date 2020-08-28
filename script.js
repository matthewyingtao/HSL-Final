function hamburger() {
  var x = document.getElementById("link-container");
  var y = document.getElementById("hamburger");
  if (x.style.display === "flex") {
    x.style.display = "none";
	y.setAttribute("style", "transform: rotate(0deg")
  } else {
    x.style.display = "flex";
	y.setAttribute("style", "transform: rotate(90deg")
  }
}