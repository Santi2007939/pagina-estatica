/*Convertir-Botones*/ 
const btnBi = document.getElementById("btn-Bi");
const btnCe = document.getElementById("btn-Ce");
const btnRe = document.getElementById("btn-Re");

/*Contenedores*/
const contenedorBinario = document.getElementById("contenedor-conbi");
const contenedorCesar = document.getElementById("contenedor-conce");
const contenedorReversa = document.getElementById("contenedor-Rever");

/*Contenedor-de-convertidores*/
const ccBi = document.getElementById("cc-conver");

/*Textareas*/
const ccTexto = document.getElementById("cc-input");
const ccBinario = document.getElementById("cc-output");

const ceTexto = document.getElementById("ce-input");
const ceRot = document.getElementById("ce-output");

const reTexto = document.getElementById("Re-input");
const reReversa = document.getElementById("Re-output");

/*Abecedarios*/
const abc = "abcdefghijklmnopqrstuvwxyz"
const aBC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/*Intercambiar-Convertir*/
const ccIntercambiar = document.getElementById("cc-intercambiar");

const cesarConvertirCaT = document.getElementById("ce-convertir-texto-a-codigo");
const binarioConvertirCaT = document.getElementById("cc-convertir-texto-a-codigo");
const reversaConvertir = document.getElementById("revertir-texto");

/*Separado-Junto*/
const sepYJuntar = document.getElementById("sep-jun");

/*Imagenes*/
const imgBinario = document.getElementById("img-binario");
const imgCesar = document.getElementById("img-cesar");
const imgReversa = document.getElementById("img-reversa");

/*Contadores*/
let i = 0
let y = 0

/*Eventos-hidden*/
btnBi.addEventListener("click", function() {
    contenedorBinario.removeAttribute("hidden");
    contenedorCesar.setAttribute("hidden", this.hidden)
    contenedorReversa.setAttribute("hidden", this.hidden);
    this.style.borderColor = "#F1DBBF"
    btnCe.style.borderColor = "#698269"
    btnRe.style.borderColor = "#698269"
})

btnCe.addEventListener("click", function() {
    contenedorCesar.removeAttribute("hidden");
    contenedorBinario.setAttribute("hidden", this.hidden);
    contenedorReversa.setAttribute("hidden", this.hidden);
    this.style.borderColor = "#F1DBBF"
    btnRe.style.borderColor = "#698269"
    btnBi.style.borderColor = "#698269"
})

btnRe.addEventListener("click", function() {
    contenedorReversa.removeAttribute("hidden");
    contenedorBinario.setAttribute("hidden", this.hidden);
    contenedorCesar.setAttribute("hidden", this.hidden);
    this.style.borderColor = "#F1DBBF"
    btnCe.style.borderColor = "#698269"
    btnBi.style.borderColor = "#698269"
})

/*Eventos-imagenes*/
imgBinario.addEventListener("click", function() {
    btnBi.click();
})

imgCesar.addEventListener("click", function() {
    btnCe.click();
})

imgReversa.addEventListener("click", function() {
    btnRe.click();
})

/*Evento-intercambio*/ 
ccIntercambiar.addEventListener("click", function() {
    i++;
    if (i % 2 != 0) {
        ccBi.style.flexDirection = "column-reverse";
        sepYJuntar.setAttribute("hidden", this.hidden);
        ccBinario.setAttribute("placeholder", "01001001 01101110 01100111 01110010 01100101 01110011 01100001 00100000 01110100 01110101 00100000 01110100 01100101 01111000 01110100 01101111");
        ccTexto.removeAttribute("placeholder");
    } else {
        ccBi.style.flexDirection = "column";
        sepYJuntar.removeAttribute("hidden");
        ccBinario.removeAttribute("placeholder");
        ccTexto.setAttribute("placeholder", "Ingresa tu texto");
    }
})

/*Evento-Separado-Junto*/
sepYJuntar.addEventListener("click", function() {
    y++
    if (y % 2 != 0) {
        this.innerText = "Mostrando junto";
        if (ccBinario.value != "") {
            ccBinario.value = ccBinario.value.match(/[0-1]{8}/g).join("");
        }
    } else {
        this.innerText = "Mostrando separado";
        if (ccBinario.value != "") {
            ccBinario.value = ccBinario.value.match(/[0-1]{8}/g).join(" ");
        }
    }
})

/*Eventos-Convertir*/
binarioConvertirCaT.addEventListener("click", function() {
    if (!sepYJuntar.hasAttribute("hidden")) {
        let input = ccTexto.value;
        input = input.split("").map(element => {
        element = element.charCodeAt(0).toString(2);
        if (element.length != 8) {
            let añadir = "";
            for(let i = 0; i < 8 - element.length; i++) {
                añadir = añadir.concat("0");
            };
            element = añadir + element; 
        }
        return element
    });
    if (sepYJuntar.innerText == "Mostrando junto") {
        ccBinario.value = input.join("");
    } else {
        ccBinario.value = input.join(" ");
    }} else {
        let input = ccBinario.value;
        input = input.match(/[0-1]{8}/g).map(element => {
            element = parseInt(element, 2);
            element = String.fromCharCode(element);
            return element;
        })
        ccTexto.value = input.join("");
    }
}) 

cesarConvertirCaT.addEventListener("click", function() {
    let input = ceTexto.value.split("").map(element => {
        if (abc.includes(element)) {
            let save = abc.indexOf(element) + 13;
            element = save > 25? element = save % 13 : element = save;
            return abc[element];
        } else if (aBC.includes(element)) {
                let save = aBC.indexOf(element) + 13;
                element = save > 25? element = save % 13 : element = save;
                return aBC[element];
            } else {
                return element;
            }
        })
        ceRot.value = input.join("");
    })

    reversaConvertir.addEventListener("click", function() {
        reReversa.value = reTexto.value.split("").reverse().join("");
    }) 