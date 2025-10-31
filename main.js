const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-[500px]"); // adjust height as per items
  } else {
    menu.classList.add("max-h-0");
    menu.classList.remove("max-h-[500px]");
  }
});
