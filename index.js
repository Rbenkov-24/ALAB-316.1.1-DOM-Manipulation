//Part One:
let mainEL = document.querySelector("main");
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = "<h1>DOM Manipulation</h1>";
mainEL.classList.add("flex-ctr");

//Part Two:
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part Three:

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach(function (link) {
  var a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});
