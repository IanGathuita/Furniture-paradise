const closeNav = document.querySelector('#close-nav');
const openNav = document.querySelector('#open-nav');
const nav = document.querySelector("nav");
closeNav.addEventListener('click',closeNavFunction);
openNav.addEventListener('click',() => {
    nav.classList.remove("navClosed");
    nav.classList.remove("navClose");
    nav.classList.add("navOpen");
});
function closeNavFunction(e){
    e.preventDefault();
    nav.classList.remove("navOpen");
    nav.classList.add("navClose");
}
const featured = document.querySelector(".featured");
var featured_imgs = document.querySelectorAll(".featured img");
if(Array.from(featured_imgs).length >0){
    featured_imgs[0].style.display = "block";
}
var explore_btn = document.querySelector("#explore-btn");
if(explore_btn){
    explore_btn.addEventListener("click",()=>{
        console.log("click");
        window.location.assign("/products");
    });
}
