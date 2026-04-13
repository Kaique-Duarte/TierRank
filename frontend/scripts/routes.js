const routes = { "/": "index.html", "/catalog": "pages/Cat.html", "/tierlist": "Testes de JS.html"  };

function redirect(rota) {
  window.location.href = routes[rota];
  console.log("OPA")
}
