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

  // Formatiranje datuma za današnji datum
  let danasnjiGodina = danasnjiDatum.getFullYear();
  let danasnjiMesec = danasnjiDatum.getMonth() + 1;
  let danasnjiDan = danasnjiDatum.getDate();
  let danasnjiFormatiranDatum =
    danasnjiGodina +
    "/" +
    (danasnjiMesec < 10 ? "0" + danasnjiMesec : danasnjiMesec) +
    "/" +
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

  // Vraćanje datuma u nizu ili objektu
  return {
    danasnjiDatum: danasnjiFormatiranDatum,
    jucerasnjiDatum: jucerasnjiFormatiranDatum,
  };
}
