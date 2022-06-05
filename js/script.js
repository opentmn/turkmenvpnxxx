const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const key = document.querySelector(".key");
const pay__kod = document.querySelector(".pay__kod");
const btn__ok = document.querySelector(".btn__ok");

const ssylka1 = document.querySelector(".ssylka1");
const ssylka2 = document.querySelector(".ssylka2");
const ssylka3 = document.querySelector(".ssylka3");
const ssylka4 = document.querySelector(".ssylka4");
const ssylka5 = document.querySelector(".ssylka5");

setTimeout(f1, 5000);

function f1() {
  block1.classList.add("move");
}

key.addEventListener("click", f2);

function f2() {
  block2.classList.add("move");
}
btn__ok.addEventListener("click", f3);

const admin = 250179;
const aiya = 160491;
const client1 = 638378; // Ira
const client2 = 393027;
const client3 = 835486;
const client4 = 365436;
const client5 = 632198;
const client6 = 179470;
const client7 = 152853;
const client8 = 937586;
const client9 = 136706;
const client10 = 935669;

function f3() {
  const kod = pay__kod.value;
  console.log(kod);
  if (
    kod == admin ||
    kod == aiya ||
    kod == client1 ||
    kod == client2 ||
    kod == client3 ||
    kod == client4 ||
    kod == client5 ||
    kod == client6 ||
    kod == client7 ||
    kod == client8 ||
    kod == client9 ||
    kod == client10
  ) {
    ssylka1.click();
    console.log("ssylka5");
  } else {
    alert("Код Неверный");
  }
}
