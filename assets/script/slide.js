const slide =  ["../img/paysage1.jpg", "../img/paysage2.jpg", "../img/paysage3.webp", "../img/paysage4.webp", "../img/paysage5.webp"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > slide.length - 1) numero = 0;
    if (numero < 0) numero = slide.length - 1;
   document.getElementById("paysage").src ="../img/" + slide[numero];
}

setInterval("ChangeSlide(1)", 4000);