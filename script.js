// ==============================
// JD ENFERMERÍA DOMICILIARIA
// script.js
// ==============================

// Menú móvil
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        nav.classList.toggle("active");
    });
}

// Animación al hacer scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".card,.section,.hero,.about,.contact,.gallery img").forEach(el=>{
    observer.observe(el);
});

// Contador de pacientes
let contador = document.getElementById("contadorPacientes");

if(contador){

let numero=0;

let intervalo=setInterval(()=>{

numero++;

contador.innerHTML=numero;

if(numero>=1850){

clearInterval(intervalo);

}

},2);

}

// Calculadora de visita

const calcular=document.getElementById("calcular");

if(calcular){

calcular.addEventListener("click",()=>{

let zona=document.getElementById("zona").value;

let servicio=document.getElementById("servicio").value;

let total=0;

if(zona=="Bogotá") total+=50000;
if(zona=="Soacha") total+=65000;

if(servicio=="Curación") total+=30000;
if(servicio=="Medicamentos") total+=20000;
if(servicio=="Sueroterapia") total+=80000;
if(servicio=="Canalización") total+=40000;
if(servicio=="Signos") total+=25000;

document.getElementById("resultado").innerHTML=
"Valor aproximado: <strong>$"+total.toLocaleString()+" COP</strong>";

});

}

// Formulario

const formulario=document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Gracias por comunicarte con JD Enfermería Domiciliaria. Muy pronto nos pondremos en contacto contigo.");

formulario.reset();

});

}

// Año automático

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// Botón subir

const subir=document.getElementById("subir");

window.addEventListener("scroll",()=>{

if(!subir)return;

if(window.scrollY>400){

subir.classList.add("visible");

}else{

subir.classList.remove("visible");

}

});

if(subir){

subir.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Efecto de aparición

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});