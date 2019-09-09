// Your code goes here
const newNavs = document.querySelectorAll(".nav-link");
//mouse over
newNavs.forEach((nav) => {
  nav.addEventListener("mouseover", function(event) {
    nav.style.color = "red";
    nav.style.transition = "transform 0.5s";
  }); //mouseout
  nav.addEventListener("mouseout", (event) => {
    nav.style.color = "black";
    nav.style.transition = "transform 0.5s";
  }); //click
  nav.addEventListener("click", (e) => {
    nav.textContent = "Radical";
    console.log(changeNav);
  });
});



 const images = document.querySelectorAll('img');
//wheel
images.forEach((picture) => {
    images.addEventListener('zoom', (event) => {
     images.style.transform = 'scale(${scale})';   
    });
});
