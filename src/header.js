const Header = (() => {  
  
  const container = document.getElementById("container");

  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("h1");
  logo.textContent = "Hotdog Hut";

  const list = document.createElement("ul");
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  const listItem3 = document.createElement("li");

  listItem1.innerHTML = "<a href='#'>Home</a>";
  listItem2.innerHTML = "<a href='#'>Menu</a>";
  listItem3.innerHTML = "<a href='#'>Contact</a>";

  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);

  header.appendChild(logo);

  header.appendChild(list);

  container.appendChild(header);

})();

export {Header};