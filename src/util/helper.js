export const getScreenWidth = () => {
  let screenWidth = window.innerWidth;

  if (screenWidth < 481) {
    return "SM";
  } else if (screenWidth < 769) {
    return "MD";
  } else {
    return "LG";
  }
};

export function generateId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function lastDays() {
  // Dobijanje trenutnog datuma
  let danasnjiDatum = new Date();

  // Oduzimanje jednog dana od trenutnog datuma da biste dobili jučerašnji datum
  let jucerasnjiDatum = new Date(danasnjiDatum);
  jucerasnjiDatum.setDate(danasnjiDatum.getDate() - 6);
  let sledeciSedamDana = new Date(danasnjiDatum);
  sledeciSedamDana.setDate(danasnjiDatum.getDate() + 6);
  // Formatiranje datuma za današnji datum
  let danasnjiGodina = danasnjiDatum.getFullYear();
  let danasnjiMesec = danasnjiDatum.getMonth() + 1;
  let danasnjiDan = danasnjiDatum.getDate();
  let danasnjiFormatiranDatum =
    danasnjiGodina +
    "-" +
    (danasnjiMesec < 10 ? "0" + danasnjiMesec : danasnjiMesec) +
    "-" +
    (danasnjiDan < 10 ? "0" + danasnjiDan : danasnjiDan);

  // Formatiranje datuma za jučerašnji datum
  let jucerasnjiGodina = jucerasnjiDatum.getFullYear();
  let jucerasnjiMesec = jucerasnjiDatum.getMonth() + 1;
  let jucerasnjiDan = jucerasnjiDatum.getDate();
  let jucerasnjiFormatiranDatum =
    jucerasnjiGodina +
    "-" +
    (jucerasnjiMesec < 10 ? "0" + jucerasnjiMesec : jucerasnjiMesec) +
    "-" +
    (jucerasnjiDan < 10 ? "0" + jucerasnjiDan : jucerasnjiDan);
  // Sledecih 7 dana
  let sledecihGodina = sledeciSedamDana.getFullYear();
  let sledeciMesec = sledeciSedamDana.getMonth() + 1;
  let sledeciDan = sledeciSedamDana.getDate();
  let sledeciFormatiranDatum =
    sledecihGodina +
    "-" +
    (sledeciMesec < 10 ? "0" + sledeciMesec : sledeciMesec) +
    "-" +
    (sledeciDan < 10 ? "0" + sledeciDan : sledeciDan);
  // Vraćanje datuma u nizu ili objektu
  return {
    danasnjiDatum: danasnjiFormatiranDatum,
    jucerasnjiDatum: jucerasnjiFormatiranDatum,
    sledeciDan: sledeciFormatiranDatum,
  };
}
export const leagues = [
  {
    league_name: "Premier League",
    name: "England",
    league_id: "152",
    league_logo:
      "https://logowik.com/content/uploads/images/premier-league9031.jpg",
    country_logo:
      "https://apiv3.apifootball.com/badges/logo_country/44_england.png",
  },
  {
    league_name: "La Liga",
    name: "Spain",
    league_id: "302",
    league_logo:
      "https://b.fssta.com/uploads/application/soccer/competition-logos/LaLiga.png",
    country_logo:
      "https://apiv3.apifootball.com/badges/logo_country/6_spain.png",
  },
  {
    league_name: "Serie A",
    name: "Italy",
    league_id: "207",
    league_logo:
      "https://www.fifplay.com/img/public/serie-a-logo-transparent.png",
    country_logo:
      "https://apiv3.apifootball.com/badges/logo_country/5_italy.png",
  },
  {
    league_name: "Bundesliga",
    name: "Germany",
    league_id: "175",
    league_logo:
      "https://apiv3.apifootball.com/badges/logo_leagues/175_bundesliga.png",
    country_logo:
      "https://apiv3.apifootball.com/badges/logo_country/4_germany.png",
  },
  {
    league_name: "League 1",
    name: "France",
    league_id: "168",
    league_logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Ligue_1_Uber_Eats_logo.svg/1200px-Ligue_1_Uber_Eats_logo.svg.png",
    country_logo:
      "https://apiv3.apifootball.com/badges/logo_country/3_france.png",
  },
  {
    league_name: "Champions League",
    name: "Champions League",
    league_id: "3",
    league_logo:
      "https://upload.wikimedia.org/wikinews/en/e/e2/UEFA_Champions_League_logo.png",
    country_logo:
      "https://logowik.com/content/uploads/images/994_champions_league.jpg",
  },
];
