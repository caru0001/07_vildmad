const urlParms = new URLSearchParams(window.location.search);
const season = urlParms.get("season");

let mySeason;

if (season === 0) {
  mySeason = "Spring";
} else if (season == 1) {
  mySeason = "Summer";
} else if (season == 2) {
  mySeason = "Authumn";
} else if (season == 3) {
  mySeason = "winther";
} else {
  mySeason = "Herbs";
}

if (season >= 0) {
  console.log("season er ", season);
  document.querySelector(
    "#breadcrumbs"
  ).innerHTML = `    <a href="index.html">home</a>|${mySeason}`;
} else {
  document.querySelector(
    "#breadcrumbs"
  ).innerHTML = `    <a href="index.html">home</a>|<a href="produktliste.html">Herbs</a> `;
}

/* `https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data?season=eq.${season}` */
if (season) {
  fetch(
    `https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data?season=eq.${season}`,
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
      },
    }
  )
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
    copy.querySelector(
      "a"
    ).href = `produkt.html?id=${item.id}&season=${season}`;

    /* append */
    document.querySelector(".herbs_grid").appendChild(copy);
  }
} else {
  fetch("https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data", {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
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
}
