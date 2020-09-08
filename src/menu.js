const Menu = (() => {

  const createItem = (name, amount) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menu.appendChild(menuItem);
  
    let item = document.createElement("p");
    item.textContent = name;
    let cost = document.createElement("p");
    cost.textContent = amount;
  
    menuItem.appendChild(item);
    menuItem.appendChild(cost);
  };

  const container = document.getElementById("container");

  const main = document.createElement("div");
  main.classList.add("main");

  container.appendChild(main);

  const menu = document.createElement("div");
  menu.classList.add("menu");

  main.appendChild(menu);

  createItem("Hotdog", "$3");
  
  createItem("Fries", "$1.50");
  
  createItem("Gyro", "$5");

  createItem("Italian Beef", "$5");

  createItem("Burger", "$5");

  createItem("Beer", "$4");

})();

export {Menu};