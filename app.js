const Dcookies = document.getElementById("dcookies");
const Dcps = document.getElementById("dcps");
const dclicker = document.getElementById("dclicker");

let cookies = 0;
let cps = 1;
let btnp = 1;
let multiplyer = 0;

function accumulator() {
  if (multiplyer != 0) {
    x = cps * multiplyer;
    cookies += x;
  } else {
    cookies += cps;
  }
  cookies = Math.floor(cookies);
  Dcookies.textContent = cookies;
  Dcps.textContent = cps + " C/S";
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("button-power", btnp);
}

setInterval(accumulator, 1000);

function btnclick() {
  if (multiplyer != 0) {
    x = btnp * multiplyer;
    cookies += x;
  } else {
    cookies += btnp;
  }
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
  cookies = parseInt(localStorage.getItem("cookies")) || 0;
  console.log(cookies);
  Dcookies.textContent.append = cookies;
  cps = parseInt(localStorage.getItem("cps")) || 1;
  console.log(cps);
  Dcps.textContent = cps;
  btnp = parseInt(localStorage.getItem("button-power")) || 1;
  console.log(btnp);
}

getCount();
//localStorage.clear();

const uimg1 = document.getElementById("uimg1");
const uimg2 = document.getElementById("uimg2");
const uimg3 = document.getElementById("uimg3");
const uimg4 = document.getElementById("uimg4");
const uimg5 = document.getElementById("uimg5");
const uimg6 = document.getElementById("uimg6");
const uimg7 = document.getElementById("uimg7");
const uimg8 = document.getElementById("uimg8");
const uimg9 = document.getElementById("uimg9");
const uimg10 = document.getElementById("uimg10");

function affordable() {
  if (afford(30)) {
    document.getElementById("gran").disabled = false;
    uimg1.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("gran").disabled = true;
    uimg1.src = "./assets/redX.png";
  }
  if (afford(300)) {
    document.getElementById("shop").disabled = false;
    uimg2.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("shop").disabled = true;
    uimg2.src = "./assets/redX.png";
  }
  if (afford(3000)) {
    document.getElementById("factory").disabled = false;
    uimg3.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("factory").disabled = true;
    uimg3.src = "./assets/redX.png";
  }
  if (afford(30000)) {
    document.getElementById("airline").disabled = false;
    uimg4.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("airline").disabled = true;
    uimg4.src = "./assets/redX.png";
  }
  if (afford(300000)) {
    document.getElementById("Bank").disabled = false;
    uimg5.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("Bank").disabled = true;
    uimg5.src = "./assets/redX.png";
  }
  if (afford(100)) {
    document.getElementById("power").disabled = false;
    uimg6.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("power").disabled = true;
    uimg6.src = "./assets/redX.png";
  }
  if (afford(1000)) {
    document.getElementById("mega").disabled = false;
    uimg7.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("mega").disabled = true;
    uimg7.src = "./assets/redX.png";
  }
  if (afford(10000)) {
    document.getElementById("super").disabled = false;
    uimg8.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("super").disabled = true;
    uimg8.src = "./assets/redX.png";
  }
  if (afford(500)) {
    document.getElementById("boost").disabled = false;
    uimg9.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("boost").disabled = true;
    uimg9.src = "./assets/redX.png";
  }
  if (afford(100000)) {
    document.getElementById("reset").disabled = false;
    uimg10.src = "./assets/cookiebtn.png";
  } else {
    document.getElementById("reset").disabled = true;
    uimg10.src = "./assets/redX.png";
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
  buy(30000, 1000);
});

bank.addEventListener("click", function () {
  buy(300000, 10000);
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

mega.addEventListener("click", function () {
  buy1(1000, 10);
});

superc.addEventListener("click", function () {
  buy1(10000, 100);
});

boost = document.getElementById("boost");

function buyboost() {
  cookies -= 500;
  btnp *= 1.5;
  cps *= 1.5;
  affordable();
  Dcps.textContent = cps;
  setTimeout(function () {
    btnp /= 3;
    btnp *= 2;
    cps /= 3;
    cps *= 2;
    Dcps.textContent = cps;
  }, 30 * 1000);
}

boost.addEventListener("click", buyboost);

function reset() {
  multiplyer = cookies / 100000;
  Math.floor(multiplyer);
  cps = 1;
  Dcps.textContent.append = cps;
  cookies = 0;
  Dcookies.textContent.append = cookies;
  btnp = 1;
  localStorage.clear();
}

const resetbtn = document.getElementById("reset");

resetbtn.addEventListener("click", reset);
