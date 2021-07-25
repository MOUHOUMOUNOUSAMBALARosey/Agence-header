const allNavLinks = document.querySelectorAll('.nav')
const titre = document.querySelector('h1')
const example = document.querySelectorAll('.social li')



window.addEventListener('load' , initAnim)


function initAnim (){
   const TLFADE = gsap.timeline();

   TLFADE 
        .to(titre, {autoAlpha: 1, y: 0, delay: 0.2})    
        .from(allNavLinks, {autoAlpha: 1, y:-60, ease: Expo.easeInout}, '-=0.2')
        .from(example, 0.5, {opacity: 0, y:360, ease: Expo.easeOut})
        .staggerFrom('i',1, {left: -200, ease: "power2.out"}, 0.35, 1.5);
}