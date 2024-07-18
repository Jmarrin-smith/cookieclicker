const Dcookies = document.getElementById("dcookies");
const Dcps = document.getElementById("dcps");
const dclicker = document.getElementById("dclicker");

let cookies = 0;
let cps = 1;
let btnp = 1;

function accumulator() {
  cookies += cps;
  Dcookies.textContent = cookies;
  Dcps.textContent = cps + " C/S";
}

setInterval(accumulator, 1000);

function btnclick() {
  cookies += btnp;
  Dcookies.textContent = cookies;
}

dclicker.addEventListener("click", btnclick);

function btninc() {
  cps += increase;
}

function afford(cost) {
  if (cookies >= cost) {
    cookies -= cost;
    return true;
  } else {
    return false;
  }
}
