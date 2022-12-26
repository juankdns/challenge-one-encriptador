let botones = document.querySelectorAll(".boton");
let texto = document.querySelector(".texto");
let ocultar = document.querySelector(".contenedor2");
let mostrar = document.querySelector(".contenedor3")
let resultado = document.querySelector(".resultado");

function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    resultado.textContent = textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    resultado.textContent = textoDesencriptado;
}

function copiar() {
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => swal({
            text: "Texto copiado!",
            icon: "success",
            buttons: false,
            timer: 1000,
        }))
        .catch(() => swal({
            text: "Error al copiar texto!",
            icon: "error",
            buttons: false,
            timer: 1000,
        }));
}


function modificarElemento() {
    ocultar.style.display = "none";
    mostrar.style.display = "flex";
    texto.value = "";
}

botones.forEach((btn) => {
    btn.addEventListener("click", e => {
        let letrasMinusculas = /^(\s*[a-z]\s*)+$/;
        if (e.target.id == "copiar") {
            copiar();
        } else if (letrasMinusculas.exec(texto.value)) {
            if (e.target.id == "encriptar") {
                encriptarTexto(texto.value);
                modificarElemento();
            } else if (e.target.id == "desencriptar") {
                desencriptarTexto(texto.value);
                modificarElemento();
            }
        } else {
            swal({
                title: "Revisar texto!",
                text: "Solo letras minúsculas y sin acentos ni caracteres especiales!",
                icon: "warning",
                button: "Entiendo",
            });
        }
    })
});

