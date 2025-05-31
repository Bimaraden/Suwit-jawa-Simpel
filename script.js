function getPilihanComp() {
  const comp = Math.round(Math.random() * 100 + 1);

  if (comp < 30) return "gajah";
  if (comp >= 30 && comp < 60) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
}

function generatorImg() {
  const imgComputer = document.querySelector(".img-computer");
  const img = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "image/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    generatorImg();

    setTimeout(() => {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "image/" + pilihanComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

//anti copy
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
