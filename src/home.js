const Home = (() => {

  const container = document.getElementById("container");

  const main = document.createElement("div");
  main.classList.add("main");

  const headline = document.createElement("h1");
  headline.textContent = "Hotdog Hut";

  main.appendChild(headline);

  const location = document.createElement("h2");
  location.textContent = "Downtown Chicago";

  main.appendChild(location);

  const copy = document.createElement("p");
  copy.textContent = "We still put cucumbers on our dogs";

  main.appendChild(copy);

  container.appendChild(main);

})();

export {Home};