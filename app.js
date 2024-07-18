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

const gran = document.getElementById("gran");
const shop = document.getElementById("shop");
const factory = document.getElementById("factory");
const airline = document.getElementById("airline");
const bank = document.getElementById("Bank");

function buy(cost, increase) {
  cookies -= cost;
  Dcookies.textContent = cookies;
  cps += increase;
  Dcps.textContent = cps + " C/S";
  affordable();
}

gran.addEventListener("click", function () {
  buy(30, 1);
});

shop.addEventListener("click", function () {
  buy(300, 10);
});

factory.addEventListener("click", function () {
  buy(3000, 100);
});

airline.addEventListener("click", function () {
  buy(3000, 1000);
});

bank.addEventListener("click", function () {
  buy(3000, 10000);
});

const power = document.getElementById("power");
const mega = document.getElementById("mega");
const superc = document.getElementById("super");

function buy1(cost, increase) {
  cookies -= cost;
  Dcookies.textContent = cookies;
  btnp += increase;
  affordable();
}

power.addEventListener("click", function () {
  buy1(100, 1);
});

mwga.addEventListener("click", function () {
  buy1(1000, 10);
});

superc.addEventListener("click", function () {
  buy1(10000, 100);
});
