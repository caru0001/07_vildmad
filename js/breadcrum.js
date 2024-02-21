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
