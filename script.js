const products = [
    
     {
       id : 1,
       title : "Navy Blue Puma",
       description : "The Suede hit the scene in 1968 and has been changing the game ever since. It’s been worn by the icons of every generation and it’s stayed classic through it all. This year, we relaunch the Suede with fresh colorways and subtle design updates. Classic as ever, for all-time.",
       img : "images/product1.jpeg",


     },
     
     {
       id : 2,
       title : "Red/White Nike",
       description :"When you wear these running-inspired adidas Swift Run X Shoes, you're ready to take on the city first thing. Out of bed. Into the kicks. Out the door. You feel it in each step up the hill. The airy upper and lightweight cushioning are like a breath of fresh air for your day.",
       img : "images/product2.jpeg",

     },

     {
        id : 3,
        title : "Red Nike",
        description : "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. An all-red design updates this classic while Max Air cushioning adds comfort to your journey.",
        img : "images/product3.jpeg",
 
      },

      {
        id : 4,
        title : "White/Gold Nike",
        description : "The Nike React HyperSet Limited Edition lets you attack at full-speed, stop on a dime, elevate and land with confidence. The lateral strap and Flywire cables stabilize the fit, while Nike React foam creates incredible energy return to help keep the quickness in your game.",
        img : "images/product4.jpeg",
 
      },

];





const img = document.getElementById("productImg");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");

let currentItem = 0;


//load the initial product item 

window.addEventListener("DOMContentLoaded", function () {

    const item = products[currentItem];
    img.src = item.img;
    title.textContent = item.title;
    description.textContent = item.description;
    currentItem = 1;

});




nextBtn.addEventListener("click", function () {

     let x = products[currentItem++];
     console.log(x);

     const item = x;
       img.src = item.img;
         title.textContent = item.title;
           description.textContent = item.description;
    
});




previousBtn.addEventListener("click", function () {
  
    let x = products[--currentItem];
    console.log(x);

    const item = x;
      img.src = item.img;
        title.textContent = item.title;
          description.textContent = item.description;
         
});