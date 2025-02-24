const pantalla1 = document.querySelector(".fila1");
const pantalla2 = document.querySelector(".fila2");
const botones = document.querySelectorAll(".btn");
var numero = 0;
var operador1 = 0;
var formateador = new Intl.NumberFormat('es-MX');

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPulsado = boton.textContent;
        
        if (boton.id === "c") {
            pantalla1.textContent = "0";
            pantalla2.textContent = "0";
            return;
        }
        if (boton.id === "borrar") {
            if (pantalla2.textContent.length === 1 || pantalla2.textContent === "ERROR!") {
                pantalla2.textContent = "0";
            } else {
                let num = pantalla2.textContent.replace(/,/g, "");
                num = num.slice(0,-1);
                pantalla2.textContent = formateador.format(num);
            }
            return;
        }
        if (boton.id === "operacion") {
            let num= String(pantalla2.textContent);
            num += botonPulsado;
            pantalla1.textContent = num;
            operador1 = pantalla2.textContent.replace(/,/g, "");
            operador1 += botonPulsado;
            pantalla2.textContent = "0";
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla1.textContent = pantalla1.textContent += pantalla2.textContent;
                let num = pantalla2.textContent.replace(/,/g, "");
                num = eval(operador1 + num);
                pantalla2.textContent = formateador.format(num);
            } catch (error) {
                pantalla2.textContent = "ERROR!";
            }
            return;
        }
        

        if(pantalla2.textContent === "0" || pantalla2.textContent === "ERROR!"){
            pantalla2.textContent = botonPulsado;
        } else {
            let num = pantalla2.textContent.replace(/,/g, "");
            num += botonPulsado;
            if (num.charAt(num.length - 1) === '.') {
                pantalla2.textContent = num;
            } else {
                pantalla2.textContent = formateador.format(num);
            }
            
        }
    })
})