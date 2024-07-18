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
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("button-power", btnp);
}

setInterval(accumulator, 1000);

function btnclick() {
  cookies += btnp;
  Dcookies.textContent = cookies;
  localStorage.setItem("cookies", cookies);
}

dclicker.addEventListener("click", btnclick);

function btninc() {
  cps += increase;
}

function afford(cost) {
  if (cookies >= cost) {
    return true;
  } else {
    return false;
  }
}

function getCount() {
  cookies = parseInt(localStorage.getItem("cookies"));
  console.log(cookies);
  Dcookies.textContent.append = cookies;
  cps = parseInt(localStorage.getItem("cps"));
  console.log(cps);
  Dcps.textContent = cps;
  btnp = parseInt(localStorage.getItem("button-power"));
  console.log(btnp);
}

getCount();
//localStorage.clear();

const gran = document.getElementById("gran");
const shop = document.getElementById("shop");
const factory = document.getElementById("factory");
const airline = document.getElementById("airline");
const bank = document.getElementById("Bank");

function affordable() {
  if (afford(30)) {
    document.getElementById("gran").disabled = false;
  } else {
    document.getElementById("gran").disabled = true;
  }
  if (afford(300)) {
    document.getElementById("shop").disabled = false;
  } else {
    document.getElementById("shop").disabled = true;
  }
  if (afford(3000)) {
    document.getElementById("factory").disabled = false;
  } else {
    document.getElementById("factory").disabled = true;
  }
  if (afford(30000)) {
    document.getElementById("airline").disabled = false;
  } else {
    document.getElementById("airline").disabled = true;
  }
  if (afford(300000)) {
    document.getElementById("Bank").disabled = false;
  } else {
    document.getElementById("Bank").disabled = true;
  }
  if (afford(100)) {
    document.getElementById("power").disabled = false;
  } else {
    document.getElementById("power").disabled = true;
  }
  if (afford(1000)) {
    document.getElementById("mega").disabled = false;
  } else {
    document.getElementById("mega").disabled = true;
  }
  if (afford(10000)) {
    document.getElementById("super").disabled = false;
  } else {
    document.getElementById("super").disabled = true;
  }
}

setInterval(affordable, 500);
