function abrirCarta() {

    document.querySelector(".container").style.display = "none";

    document.getElementById("sobre").style.display = "flex";

    document.getElementById("musica").play();

    escribir();

}

function crearPetalo(){

const petalo=document.createElement("div");

petalo.classList.add("petalo");

petalo.innerHTML="🌸";

petalo.style.left=Math.random()*100+"vw";

petalo.style.fontSize=(20+Math.random()*20)+"px";

petalo.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},11000);

}

setInterval(crearPetalo,700);
function crearLuz(){

const luz=document.createElement("div");

luz.classList.add("luz");

luz.style.left=Math.random()*100+"vw";

luz.style.top=Math.random()*100+"vh";

document.body.appendChild(luz);

setTimeout(()=>{

luz.remove();

},5000);

}

setInterval(crearLuz,250);
const carta = `
Hola amor, feliz cumpleaños mi vida hermosa espero que en este dia tan lindo estes super bien y seas super feliz te escribo esto para que leas
lo mucho que te voy a amar mi vidar hermosa, te agradezco por aparecer en mi vida me la haes bonita y me llenas de luz a esta oscuridad con la que vivo
aunque te diga que no quiera seguir mas no puedo, pues tengo a una niña chiquita quien cuidar y aquien amar pues np quiero que alguien mas llegue
y me la trate feo o no sepa como tratarte, te amo demasiado y mucho jajaj pues me estas haciendo sentir como ese niño que alguna vez fui
TE AMO MI VIDA HERMOSA ten un feliz cumpleaños y que pueda estar en muchas mas picos muchos picos mi vida hermosa❤️
`;

let i = 0;

function escribir() {

    if (i < carta.length) {

        document.getElementById("mensaje").innerHTML += carta.charAt(i);

        i++;

        setTimeout(escribir, 45);

    }

}
const fotos = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg"
];

let indice = 0;

function siguiente(){

    indice++;

    if(indice >= fotos.length){

        indice = 0;

    }

    document.getElementById("foto").src = fotos[indice];

}

function anterior(){

    indice--;

    if(indice < 0){

        indice = fotos.length - 1;

    }

    document.getElementById("foto").src = fotos[indice];

}
function abrirGaleria(){

    document.getElementById("sobre").style.display = "none";

    document.querySelector(".galeria").style.display = "flex";

}
function actualizarEdad(){

    const nacimiento = new Date(2008,6,7); // Julio = 6

    const hoy = new Date();

    let anios = hoy.getFullYear() - nacimiento.getFullYear();

    let meses = hoy.getMonth() - nacimiento.getMonth();

    let dias = hoy.getDate() - nacimiento.getDate();

    if(dias < 0){

        meses--;

        const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);

        dias += ultimoMes.getDate();

    }

    if(meses < 0){

        anios--;

        meses += 12;

    }

    document.getElementById("anios").textContent = anios;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = hoy.getHours();
    document.getElementById("minutos").textContent = hoy.getMinutes();
    document.getElementById("segundos").textContent = hoy.getSeconds();

}

setInterval(actualizarEdad,1000);

actualizarEdad();