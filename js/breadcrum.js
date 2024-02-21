// JavaScript til at generere brødkrummesti
var pathArray = window.location.pathname.split("/");
var breadcrumbs = "";

for (var i = 0; i < pathArray.length; i++) {
  if (pathArray[i] !== "") {
    breadcrumbs += "<a href='";

    for (var j = 0; j <= i; j++) {
      breadcrumbs += "/" + pathArray[j];
    }

    breadcrumbs += "'>" + pathArray[i] + "</a> / ";
  }
}

document.getElementById("breadcrumbs").innerHTML = breadcrumbs;

// Tilføj en klasse til det aktuelle brødkrummelink
var currentPath = window.location.pathname;
var breadcrumbLinks = document.querySelectorAll("#breadcrumbs a");

breadcrumbLinks.forEach(function (link) {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("current-page");
  }
});
