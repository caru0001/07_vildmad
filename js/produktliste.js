const urlParms = new URLSearchParams(window.location.search);
const season = urlParms.get("season");

/* Her siger vi hvis season er true, så fetch kun specifik sæson (som kommer fra url på index-siden) */
if (season) {
  fetch(`https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data?season=eq.${season}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
    },
  })
    .then((res) => res.json())
    .then(showData);

  function showData(items) {
    items.forEach(showHerb);
  }

  function showHerb(item) {
    console.log(item);

    /* fanger template */
    const template = document.querySelector("#herbs_template").content;

    /* lav en kopi */
    const copy = template.cloneNode(true);

    /* ændre indhold i template */
    copy.querySelector("img").src = `img/herbs/${item.urtImg}`;
    copy.querySelector("h3").textContent = item.name;
    copy.querySelector("a").href = `produkt.html?id=${item.id}`;

    /* append */
    document.querySelector(".herbs_grid").appendChild(copy);
  }

  /* Her siger vi, hvis season er false/ikke bliver valgt, så vises al data (urter) */
} else {
  fetch("https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
    },
  })
    .then((res) => res.json())
    .then(showData);

  /* Kalder således at hvert element i arrayet bliver kaldt og information vises for hvert element (ellers ville den kun vise for den første) */
  function showData(items) {
    items.forEach(showHerb);
  }

  function showHerb(item) {
    console.log(item);

    /* fanger template */
    const template = document.querySelector("#herbs_template").content;

    /* lav en kopi */
    const copy = template.cloneNode(true);

    /* ændre indhold i template */
    copy.querySelector("img").src = `img/herbs/${item.urtImg}`;
    copy.querySelector("h3").textContent = item.name;
    copy.querySelector("a").href = `produkt.html?id=${item.id}`;

    /* append */
    document.querySelector(".herbs_grid").appendChild(copy);
  }
}
