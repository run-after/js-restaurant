const Contact = () => {

  const container = document.getElementById("container");

  //Checks if has main node and if so, removes it
  if(container.childNodes[1]){
    container.removeChild(container.childNodes[1]);
  }


  const main = document.createElement("div");
  main.classList.add("main");

  container.appendChild(main);

  const phone = document.createElement("h1");

  phone.textContent = "312 123 4567";

  main.appendChild(phone);

  const email = document.createElement("h2");

  email.textContent = "dogs@hotdoghut.com";

  main.appendChild(email);

};

export default {Contact};
    