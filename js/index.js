// Your code goes here
const newNavs = document.querySelectorAll(".nav-link");
//mouse over
newNavs.forEach((nav) => {
  nav.addEventListener("mouseover", function(event) {
    nav.style.color = "purple";
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


const image = document.querySelectorAll('img');

image.forEach((pic) => {
  image[0].addEventListener('drag', (event) => {
    image[0].src = "img/cowabunga.jpg";
  });
  image[0].addEventListener('drop', (event) => {
    image[0].src = "img/fun-bus.jpg";
  });
  image[1].addEventListener('click', (event) => {
    image[1].src = "img/ninja turtle.jpg";
  });
  image[2].addEventListener('dblclick', (event) => {
    image[2].src = "img/pizza-time.png";
  });
});

const title = document.querySelectorAll('h2');

title.forEach((words) =>{
  title[0].addEventListener('mouseover', (event) =>{
    title[0].textContent = "Cowabunga!!";
  });
  title[1].addEventListener('mouseover', (event) =>{
    title[1].textContent = "ninja turtles!";
  });
  title[2].addEventListener('mouseover', (event) =>{
    title[2].textContent = "Pizza time!";
  });
});



const backGround = document.querySelector('body');

backGround.addEventListener('resize', (event) => {
  backGround.style.color = 'black';
});