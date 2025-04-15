const slide =  ["paysage1.jpg", "paysage2.jpg", "paysage3.webp", "paysage4.webp", "paysage5.webp"];
let numero = 0;

function ChangeSlide(sens) {
    numero += sens;
    if (numero > slide.length - 1) numero = 0;
    if (numero < 0) numero = slide.length - 1;
   document.getElementById("paysage").src ="./assets/img/" + slide[numero];
}

setInterval( () => ChangeSlide(1), 4000);