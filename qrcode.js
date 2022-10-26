

const myContainer = document.getElementById("container");
const devGru = document.getElementById("devName");


myContainer.addEventListener("mouseover", function(){
   devGru.classList.add("show");
   
});

myContainer.addEventListener("mouseout", function(){
    devGru.classList.remove("show");
    
 
 });