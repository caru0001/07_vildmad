// brødkrumme sti
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
// Udskriv brødkrummestien til konsollen
console.log("Brødkrummesti:", breadcrumbs);
document.getElementById("breadcrumbs").innerHTML = breadcrumbs;
