const routes = { "/": "index.html", "/catalog": "pages/Cat.html" };

function redirect(rota) {
  window.location.href = routes[rota];
  console.log("OPA")
}
