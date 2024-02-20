// https://pliavlkcgnwhouapeprm.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM

/* her henter én eller flere specifikke data */
const urlParms = new URLSearchParams(window.location.search);
const id = urlParms.get("id");

/* i fetch url definerer vi i dette tilfælde at det er "id" der skal hentes */
fetch(
  `https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data?id=eq.${id}`,
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

function showData(item) {
  console.log(item);

  /* fanger template */
  const template = document.querySelector("#produktTemplate").content;

  /* lav en kopi */
  const copy = template.cloneNode(true);

  /* ændre indhold i template */ /* [0] fortæller den kun har en plads */
  copy.querySelector("#urtPåCirkel").src = `img/herbs/${item[0].urtImg}`;

  copy.querySelector("h1").textContent = item[0].name;

  copy.querySelector(".introTekst").textContent = item[0].introduction;

  copy.querySelector(".rødTekst").textContent = item[0].look_description;

  copy.querySelector(".grønTekst").textContent = item[0].area_description;

  copy.querySelector("#area").textContent = item[0].areas;

  /* append */
  document.querySelector("main").appendChild(copy);
}
