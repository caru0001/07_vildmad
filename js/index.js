fetch("https://pliavlkcgnwhouapeprm.supabase.co/rest/v1/vildmad_data", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWF2bGtjZ253aG91YXBlcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODM2OTksImV4cCI6MjAyMzA1OTY5OX0.nkykaEzPhV7L-q--3enzm5iphogeP_xz2_IcvgkKhuM",
  },
})
  .then((res) => res.json())
  .then(showData);

function showSeason(season) {
  document.querySelector(".seasons_grid").content;

  document.querySelector(
    ".winter"
  ).href = `produktliste.html?season=${season.season}`;

  document.querySelector(".seasons_grid").appendChild(copy);
}
