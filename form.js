
const usuario = document.querySelector("#nombreU");
const email = document.querySelector("#email");
const interes = document.querySelector("#interes");
const prodIphone= document.querySelector("#productosIphone");
const prodSamsung= document.querySelector("#productosSamsung");
const fundIp = document.querySelector("#formIphone");
const fundSam = document.querySelector("#formSamsung");
const otrosAcc= document.querySelector("#otrosAcc");
const otrosAcc2= document.querySelector("#formOtros");

const enviar = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");

const mosError = (input, mensaje) => {
    const formField = input.parentElement;

    formField.classList.remove('valido');
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = mensaje;
}

const mosValido = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add("valido");
    
    const error = formField.querySelector("small");
    error.textContent = '';
}

const validacionUsuario = ()=> {
    let valido = false;
    const min = 5;
    const max = 15;
    const username = usuario.value.trim();

    if (username == '') {
        mosError(usuario,"El usuario no puede estar vacio");
    } else if (username.length < min || username.length > max) {
        mosError(usuario, `El usuario debe tener entre ${min} y ${max} caracteres`);
    } else {
        mosValido(usuario);
        valido = true;
    }
    return valido;
}

usuario.onchange = () => {
    validacionUsuario();
}
const elegirIntereses = () => {
    const interesElegido = interes.value;
    const divGlobal = document.querySelector("#elecc2").querySelectorAll(".form-field");
    switch (interesElegido) {
        case '1':
            divGlobal.forEach(elem => {
               elem.style.display = "none";
            })
            prodIphone.style.display = "block";
            break;
        case '2':
            divGlobal.forEach(elem => {
                elem.style.display = "none";
             })
             prodSamsung.style.display = "block";
            break;
        case '3':
            divGlobal.forEach(elem => {
                elem.style.display = "none";
             })
            otrosAcc.style.display = "block";
            break;
        default:
            break;
        }
}

interes.onchange = () => {
    elegirIntereses();
}


