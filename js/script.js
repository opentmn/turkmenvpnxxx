import workingLink from "./ssylki.js";
import { admin , aiya , client1 , client2 , client3 , client4 , client5 , client6 , client7 , client8 , client9 , client10 } from "./clients.js";

const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const key = document.querySelector(".key");
const pay__kod = document.querySelector(".pay__kod");
const btn__ok = document.querySelector(".btn__ok");

setTimeout(f1, 5000);

function f1() {
  block1.classList.add("move");
}

key.addEventListener("click", f2);

function f2() {
  block2.classList.add("move");
}
btn__ok.addEventListener("click", f3);



function f3() {
  const kod = pay__kod.value;
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
    workingLink.click();
  } else {
    alert("Код Неверный");
  }
}