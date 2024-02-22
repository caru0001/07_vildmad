// // JavaScript til at generere brødkrummesti
// var pathArray = window.location.pathname.split("/");
// var breadcrumbs = "";

// for (var i = 0; i < pathArray.length; i++) {
//   if (pathArray[i] !== "") {
//     breadcrumbs += "<a href='";

//     for (var j = 0; j <= i; j++) {
//       breadcrumbs += "/" + pathArray[j];
//     }

//     breadcrumbs += "'>" + pathArray[i] + "</a> / ";
//   }
// }

// document.getElementById("breadcrumbs").innerHTML = breadcrumbs;

// // Tilføj en klasse til det aktuelle brødkrummelink
// var currentPath = window.location.pathname;
// var breadcrumbLinks = document.querySelectorAll("#breadcrumbs a");

// breadcrumbLinks.forEach(function (link) {
//   if (link.getAttribute("href") === currentPath) {
//     link.classList.add("breadstil");
//   }
// });

// Definerer brødkrummestier for forskellige sider
const breadcrumbsMap = {
  "index.html": "Home",
  "produktliste.html": "Home / Herbs",
  "quiz.html": "Home / Quiz",
};

// Funktion til at opdatere brødkrummestier baseret på den aktuelle side
function updateBreadcrumbs() {
  const path = window.location.pathname;
  const currentPage = path.substring(path.lastIndexOf("/") + 1);
  const breadcrumbs = document.getElementById("breadcrumbs");

  if (breadcrumbsMap[currentPage]) {
    breadcrumbs.textContent = breadcrumbsMap[currentPage];
  } else {
    breadcrumbs.textContent = "Home";
  }
}

// Kald funktionen ved indlæsning af siden
updateBreadcrumbs();

function updateBreadcrumbsForProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const productName = getProductById(productId); // Du skal implementere getProductById-funktionen for at hente produktets navn

  if (productName) {
    const breadcrumbs = document.getElementById("breadcrumbs");
    breadcrumbs.textContent = "Home / Herbs / " + productName;
  }
}
