/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let counting = 0;

let buttonClick = document.getElementById("btn__element");

let showClicks = document.getElementById("btn__state");

buttonClick.onclick = function () {
  counting++;
  showClicks.innerHTML = counting;
};
