const Home = () => {

  const container = document.getElementById("container");

  //Checks if has main node and if so, removes it
  if(container.childNodes[1]){
    container.removeChild(container.childNodes[1]);
  }

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
  
};
Home();
export default {Home};