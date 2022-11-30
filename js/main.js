let IconMenu = document.querySelector("#openMenu");
let menu = document.querySelector(".menu");

IconMenu.onclick = () =>{
   IconMenu.classList.toggle('fa-times')
   menu.classList.toggle('active')
}