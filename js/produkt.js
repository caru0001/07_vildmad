// https://pliavlkcgnwhouapeprm.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM

fetch("https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(item) {
  console.log(item);

  /* fanger template */
  const template = document.querySelector("#produktTemplate").content;

  /* lav en kopi */
  const copy = template.cloneNode(true);

  /* ændre indhold i template */
  copy.querySelector("#urtPåCirkel").src = `img/herbs/${item.urtImg}`;

  copy.querySelector("h1").textContent = item.name;

  copy.querySelector(".introTekst").textContent = item.introduction;

  copy.querySelector(".rødTekst").textContent = item.look_description;

  copy.querySelector(".grønTekst").textContent = item.area_description;

  copy.querySelector("#area").textContent = item.areas;

  /* append */
  document.querySelector("main").appendChild(copy);
}

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
