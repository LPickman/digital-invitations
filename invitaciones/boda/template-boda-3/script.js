// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:0.2});

reveals.forEach(section=>{
observer.observe(section);
});


// CONTADOR

const countdownElement = document.getElementById("countdown");

if(countdownElement){

const weddingDate = new Date("2026-12-07T18:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();
const distance = weddingDate - now;

if(distance <= 0){

countdownElement.innerHTML="¡Es hoy! 💍";
return;

}

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance/(1000*60*60))%24);
const minutes=Math.floor((distance/1000/60)%60);
const seconds=Math.floor((distance/1000)%60);

countdownElement.innerHTML=
`${days} días <br> ${hours} hs · ${minutes} min · ${seconds} seg`;

},1000);

}


// CAMBIO TEMA

function setTheme(theme){

if(theme==="salvia"){

document.documentElement.style.setProperty("--bg-main","#f4f4f1");
document.documentElement.style.setProperty("--bg-section-light","#e8ede6");
document.documentElement.style.setProperty("--bg-section-alt","#c8d6c4");
document.documentElement.style.setProperty("--text-main","#4d5a4d");
document.documentElement.style.setProperty("--btn-bg","#5c6d5c");
document.documentElement.style.setProperty("--btn-hover","#445244");

}

if(theme==="beige"){

document.documentElement.style.setProperty("--bg-main","#fdfaf6");
document.documentElement.style.setProperty("--bg-section-light","#f6efe6");
document.documentElement.style.setProperty("--bg-section-alt","#efe4d6");
document.documentElement.style.setProperty("--text-main","#5c5045");
document.documentElement.style.setProperty("--btn-bg","#d6c3ad");
document.documentElement.style.setProperty("--btn-hover","#c5ae94");

}

if(theme==="rosa"){

document.documentElement.style.setProperty("--bg-main","#fffafa");
document.documentElement.style.setProperty("--bg-section-light","#fdeeee");
document.documentElement.style.setProperty("--bg-section-alt","#f9dddd");
document.documentElement.style.setProperty("--text-main","#7a5c61");
document.documentElement.style.setProperty("--btn-bg","#e7b8c2");
document.documentElement.style.setProperty("--btn-hover","#d99aaa");

}

}


// BOTONES TEMA

const buttons=document.querySelectorAll(".theme-switcher button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const theme=button.dataset.theme;

setTheme(theme);

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});


// SCROLL FLECHA

const sections=document.querySelectorAll("section");
const arrow=document.getElementById("scrollArrow");

arrow.addEventListener("click",()=>{

const scrollPosition=window.scrollY + window.innerHeight/2;

let currentIndex=0;

sections.forEach((section,index)=>{

if(scrollPosition>=section.offsetTop){

currentIndex=index;

}

});

const nextSection=sections[currentIndex+1];

if(nextSection){

nextSection.scrollIntoView({behavior:"smooth"});

}

});