"use strict";
// Control de errores
let first_time = true; // Variable [bool] para determinar si es la primera vez que se entra al codigo
let first_click = true; // Variable [bool] para determinar si es la primera vez que se mueve el tren
let avisao_izq = false; // Variable [bool] para determinar si se ha desplegado ya el modal izquierdo
let avisao_der = false; // Variable [bool] para determinar si se ha desplegado ya el modal derechoç
let mobile = false; // Variable [bool] para determinar si se ha escogido movil o no
let first_time_vagon = []; // Variable [Array] para determinar si es la primera vez que se entra en el vagon
let a = 0; // Variable [int] para determinar la posicion del tren
// Modal's
let maft = document.getElementById("modal_error_final_tren"); // Variable [HTMLElement] que almacena el modal donde mostrar el error del tren
maft.style.display = "none"; // Aplicamos un display none para evitar que se muestre
let met = document.getElementById("modal_error_tipo"); // Variable [HTMLElement] que almacena el modal donde mostrar el error del tipo de dispositivo
let set_tipo = document.getElementById("set_tipo"); // Variable [HTMLElement] que almacena el tipo donde insertar datos del tipo
let set_texto = document.getElementById("set_texto"); // Variable [HTMLElement] que almacena el texto donde insertar datos del tipo
met.style.display = "none"; // Aplicamos un display none para evitar que se muestre
// Login Section
let cUser = document.getElementById("cUser"); // Variable [HTMLElement] que almacena el valor del input de usuario a la hora de iniciar sesion
let mUser = document.getElementById("mUser"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario                    
let cPass = document.getElementById("cPass"); // Variable [HTMLElement] que almacena el valor del input de contraseña a la hora de iniciar sesion
let mPass = document.getElementById("mPass"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario
let mLogin = document.getElementById("mLogin"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario
mUser.style.display = "none"; // Aplicamos un display none para evitar que se muestre
mPass.style.display = "none"; // Aplicamos un display none para evitar que se muestre
mLogin.style.display = "none"; // Aplicamos un display none para evitar que se muestre
// Sign Up Section
let cUserSign = document.getElementById("cUser2"); // Variable [HTMLElement] que almacena el valor del input de usuario a la hora de iniciar sesion
let mUserSign = document.getElementById("mUser2"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario   
let cPass1Sign = document.getElementById("cPass2"); // Variable [HTMLElement] que almacena el valor del input de usuario a la hora de iniciar sesion
let mPass1Sign = document.getElementById("mPass2"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario  
let cPass2Sign = document.getElementById("cPass3"); // Variable [HTMLElement] que almacena el valor del input de usuario a la hora de iniciar sesion
let mPass2Sign = document.getElementById("mPass3"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario  
let mPassDont = document.getElementById("mPassDont"); // Variable [HTMLElement] que almacena el span necesario para notificar de algun fallo al usuario  
mUserSign.style.display = "none"; // Aplicamos un display none para evitar que se muestre
mPass1Sign.style.display = "none"; // Aplicamos un display none para evitar que se muestre
mPass2Sign.style.display = "none"; // Aplicamos un display none para evitar que se muestre
mPassDont.style.display = "none"; // Aplicamos un display none para evitar que se muestre
// Train Section
let posicion = document.getElementById("posicion"); // Variable [HTMLElement] que almacena la posicion del tren
let clase_vagon = document.getElementById("clase_vagon"); // Variable [HTMLElement] que se utiliza para mostrar en pantalla la clase del vagon
let train_move = document.getElementById("train_move"); // Variable [HTMLElement] que almacena el tren
let flecha_izq = document.getElementById("flecha_izq"); // Variable [HTMLElement] que nos permite modificar el aspecto de la flecha
let flecha_der = document.getElementById("flecha_der"); // Variable [HTMLElement] que nos permite modificar el aspecto de la flecha
let div_asientos = document.getElementById("asientos"); // Variable [HTMLElement] donde se mostraran los asientos
let vagones = document.getElementsByClassName("vagon"); // Variable [Array] donde almacenaré los objetos del array
let msa = document.getElementsByName("insert_asientos"); // Variable [HTMLElement] donde se insertan los asientos
// Asientos Section
let clases = [];
for (let i = 0; i < vagones.length; i++) {
    clases[i] = document.getElementById("clas" + i);
    clases[i].style.display = "none";
}
let contador_asientos = 0; // Variable [Number] donde almacenar el numero de asientos total
let asientos; // Variable [HTMLEelements] donde almacenar todos los asientos del vagon
let asientos_reservados = [];
let asientos_comprados = [];
let precio = document.getElementById("precio"); // Variable [HTMLElement] donde almacenar el importe total
let precio_total = 0; // Variable [Number] donde almacenar el precio total de los asientos adquiridos
let coste = 0; // Variable [Number] donde almacenar el coste por asiento
// SECTIONS
let s_login = document.getElementById("login"); // Variable [HTMLElement] que almacena la seccion de login
let s_signup = document.getElementById("signup"); // Variable [HTMLElement] que almacena la seccion de signup
let s_train = document.getElementById("train"); // Variable [HTMLElement] que almacena la seccion de train
let s_asientos = document.getElementById("asientos"); // Variable [HTMLElement] que almacena la seccion de asientos
s_login.style.display = "flex"; // Aplicamos un display none para evitar que se muestre                                             
s_signup.style.display = "none"; // Aplicamos un display none para evitar que se muestre
s_train.style.display = "none"; // Aplizcamos un display none para evitar que se muestre
s_asientos.style.display = "none"; // Aplicamos un display none para evitar que se muestre
// Metodo del login
function login() {
    let user = cUser.value; //Variable temporal para almacenar el valor del input de usuario
    let pass = cPass.value; //Variable temporal para almacenar el valor del input de contraseña
    // En caso que el usuario no haya introducido el username se le notifica
    if (user == "") {
        mUser.style.display = "block";
    }
    else {
        mUser.style.display = "none";
    }
    // En caso que el usuario no haya introducido la contraseña se le notifica
    if (pass == "") {
        mPass.style.display = "block";
    }
    else {
        mPass.style.display = "none";
    }
    // En caso que haya introducido todos los datos seguimos
    if (user != "" && pass != "") {
        // Coge los datos del localstorage para inicar sesion si ha introducido datos
        let userArray = JSON.parse(localStorage.getItem(user));
        // Comprovamos si el array recivido es null o no
        if (userArray == null) {
            // En caso de ser null mostramos el mensaje de error
            mLogin.style.display = "block";
        }
        else {
            // En caso de no ser null comprovamos si la contraseña es correcta y quitamos el mensaje de error
            mLogin.style.display = "none";
            // Comprueba que la contraseña sea correcta
            if (user == userArray[0] && pass == userArray[1]) {
                // En caso de ser correcta cambiamos de display a la pagina del tren
                toTrain();
                // Ejecutamos la funcion del movimiento del tren
                moveTrain();
            }
            else {
                // En caso de ser incorrecta mostramos el mensaje de error
                mLogin.style.display = "block";
            }
        }
    }
}
// Metodo del signup
function signup() {
    let user = cUserSign.value; //Variable temporal para almacenar el valor del input de usuario
    let pass1 = cPass1Sign.value; //Variable temporal para almacenar el valor del input de primera contrasñea
    let pass2 = cPass2Sign.value; //Variable temporal para almacenar el valor del input de segunda contrasñea
    // En caso que el usuario no haya introducido el username se le notifica
    if (user == "") {
        mUserSign.style.display = "block";
    }
    else {
        mUserSign.style.display = "none";
    }
    // En caso que el usuario no haya introducido la primera contraseña se le notifica
    if (pass1 == "") {
        mPass1Sign.style.display = "block";
    }
    else {
        mPass1Sign.style.display = "none";
    }
    // En caso que haya introducido todos los datos seguimos
    if (pass1 != pass2) {
        mPassDont.style.display = "block";
    }
    else {
        mPassDont.style.display = "none";
    }
    // En caso que todo este correcto se continua con el programa, si las contraseñas no coinciden se muestra el mensaje de error
    if (user != "" && pass1 != "" && pass2 != "" && pass1 == pass2) {
        // Si todo es correcto, se almacena en un array en el localstorage
        let userArray = [user, pass1];
        localStorage.setItem(user, JSON.stringify(userArray));
        // Se cambia el display a la pagina de login
        toLogin();
    }
    else {
        mPass2Sign.style.display = "block";
    }
}
// Metodo para mover el tren
function moveTrain() {
    // Seteamos a 0 el estado de los vagones
    firstTime();
    // Seteamos los vagones
    setVagones();
    // Iniciamos la animacion del texto
    textAnimation();
    // Printamos el valor de 'a' en la variable [HTMLElement] posicion
    posicion.innerHTML = getA();
    // Creamos un objeto constante con los valores
    const train = {
        // Obtenemos el element [HTMLElement] del tren
        element: train_move,
        // Ponemos la posicion incial del tren
        leftPosition: 1130,
        // Ponemos la velocidad de los pasos del tren
        step: 1100,
        // Creamos una fuction llamada move para mover el tren
        move: function (direction) {
            // Dependiendo de lo que le pasemos hará una cosa u otra
            switch (direction) {
                // En caso de que le pasemos 'ArrowRight' hará lo siguiente
                case "ArrowRight":
                    // Cambiamos la estetica de las flechas para que se vea mejor
                    flecha_der.style.color = "#ffcc00";
                    flecha_der.style.transform = "scale(1.3)";
                    setTimeout(function () {
                        flecha_der.style.transform = "scale(1)";
                        flecha_der.style.color = "white";
                    }, 500);
                    // Se mueve hacia la derecha
                    this.leftPosition = this.leftPosition - this.step;
                    this.element.style.left = this.leftPosition + "px";
                    break;
                // En caso de que le pasemos 'ArrowLeft' hará lo siguiente
                case "ArrowLeft":
                    // Cambiamos la estetica de las flechas para que se vea mejor
                    flecha_der.style.color = "#ffcc00";
                    flecha_der.style.transform = "scale(1.3)";
                    setTimeout(function () {
                        flecha_der.style.transform = "scale(1)";
                        flecha_der.style.color = "white";
                    }, 500);
                    // Se mueve hacia la izquierda
                    this.leftPosition = this.leftPosition + this.step;
                    this.element.style.left = this.leftPosition + "px";
                    break;
            }
        }
    };
    // Hacemos un timeout para que justo al entrar el tren se mueva dos posiciones y asi no se quede en la locomotora
    setTimeout(function () {
        // Si es el primer cop que entrem a la pantalla fem el seguent
        if (getFirstClick()) {
            // Cambiem el valor de firstClick a false
            setFirstClick(false);
            // Movemos el tren dos posiciones
            train.move("ArrowRight");
            train.move("ArrowRight");
            // Sumamos uno al valor a
            setA(true);
            // Printamos el valor de 'a' en la variable [HTMLElement] posicion
            posicion.innerHTML = getA();
            // Obtenemos la clase del vagon del tren y lo printamos en el HTMLElement
            clase_vagon.innerHTML = vagones[getA()].id.toString();
        }
    }, 200);
    // Creamos un event listener para que cuando se pulse una tecla se ejecute la funcion
    onkeydown = (key) => {
        // Si el modal de error de tipo esta abierto no podemos movernos
        if (met.style.display != "flex") {
            // Si el modal de error esta abierto no podemos movernos
            if (maft.style.display != "flex") {
                // Si la tecla pulsada es 'ArrowRight' o 'ArrowLeft' se ejecuta el metodo move del objeto train
                if (key.code == "ArrowRight") {
                    // Comprovamos si han elegido movil o no
                    if (getMobile()) {
                        // Si es movil mostramos el mensaje de error
                        setModalTipo(true);
                    }
                    else {
                        // Si la A es igual a 10 entra al if, en caso contrario entra al else
                        if (getA() == 10) {
                            // Comprueba si hemos avisado ya o no, en caso de que no, muestra el mensaje y pone que lo hemos mostrado
                            if (!getAvisoIzq()) {
                                maft.style.display = "flex";
                                setAvisoIzq(true);
                            }
                        }
                        else {
                            // Si no es igual a 10, se mueve el tren
                            train.move(key.code);
                            // Sumamos uno al valor a
                            setA(true);
                        }
                        first_click = false;
                    }
                }
                else if (key.code == "ArrowLeft") {
                    // Comprovamos si han elegido movil o no
                    if (getMobile()) {
                        // Si es movil mostramos el mensaje de error
                        setModalTipo(true);
                    }
                    else {
                        // Si la A es igual a 10 entra al if, en caso contrario entra al else
                        if (getA() == 0) {
                            // Comprueba si hemos avisado ya o no, en caso de que no, muestra el mensaje y pone que lo hemos mostrado
                            if (!getAvisoDer()) {
                                maft.style.display = "flex";
                                setAvisoDer(true);
                            }
                        }
                        else {
                            // Si no es igual a 10, se mueve el tren
                            train.move(key.code);
                            // Restamos uno al valor a
                            setA(false);
                        }
                    }
                }
                // Obtenemos la clase del vagon del tren y lo printamos en el HTMLElement
                clase_vagon.innerHTML = vagones[getA()].id.toString();
                // Printamos el valor de 'a' en la variable [HTMLElement] posicion
                posicion.innerHTML = getA();
            }
        }
    };
}
// Metodo para mover el tren con las flechas en pantalla
function move_left() {
    // Comprovamos que no sea mobile
    if (!getMobile()) {
        setModalTipo(false);
    }
    else {
        // Si es movil se ejecuta el siguiente codigo
        // En caso de que 'a' sea igual 0
        if (getA() == 0) {
            // Comprueba si hemos avisado ya o no, en caso de que no, muestra el mensaje y pone que lo hemos mostrado
            if (!getAvisoIzq()) {
                // Mostramos el span de error
                maft.style.display = "flex";
                // Ponemos el valor de avisoIzq a true
                setAvisoIzq(true);
            }
        }
        // En caso de que 'a' sea mayor que 0
        if (getA() > 0) {
            // Movemos el tren
            train_move.style.left = parseInt(train_move.style.left) + 1100 + "px";
            // Restamos uno al valor a
            setA(false);
            // Printamos la posicion y la clase del vagon
            posicion.innerHTML = getA();
            clase_vagon.innerHTML = vagones[getA()].id.toString();
        }
    }
}
// Metodo para mover el tren con las flechas en pantalla
function move_right() {
    // Comprovamos que no sea mobile
    if (!getMobile()) {
        setModalTipo(false);
    }
    else {
        // Si es movil se ejecuta el siguiente codigo
        // En caso de que 'a' sea igual 10
        if (getA() == 10) {
            // Comprueba si hemos avisado ya o no, en caso de que no, muestra el mensaje y pone que lo hemos mostrado
            if (!getAvisoDer()) {
                // Mostramos el span de error
                maft.style.display = "flex";
                // Ponemos el valor de avisoDer a true
                setAvisoDer(true);
            }
        }
        // En caso de que 'a' sea menor que 10
        if (getA() < 10) {
            // Movemos el tren
            train_move.style.left = parseInt(train_move.style.left) - 1100 + "px";
            // Sumamos uno al valor a
            setA(true);
            // Printamos la posicion y la clase del vagon
            posicion.innerHTML = getA();
            clase_vagon.innerHTML = vagones[getA()].id.toString();
        }
    }
}
// Metodos para obtener y setear las diferentes variables disponibles
// Variable a [ Valor que designa la posicion del tren ]
// Metodo get 
function getA() { return a; }
// Metodo set 
function setA(setFunc) {
    if (setFunc == true) {
        a++;
    }
    else {
        a--;
    }
}
// Variable avisao_izq [ Variable que indica si se ha mostrado el modal de aviso de que no se puede ir mas a la izquierda ]
// Metodo get
function getAvisoIzq() { return avisao_izq; }
// Metodo set
function setAvisoIzq(setFunc) { avisao_izq = setFunc; }
// Variable avisao_der [ Variable que indica si se ha mostrado el modal de aviso de que no se puede ir mas a la derecha ]
// Metodo get
function getAvisoDer() { return avisao_der; }
// Metodo set
function setAvisoDer(setFunc) { avisao_der = setFunc; }
// Variable de first_click [ Variable que indica si se ha movido ya el tren ]
// Metodo get
function getFirstClick() { return first_click; }
// Metodo set
function setFirstClick(setFunc) {
    if (setFunc == true) {
        first_click = true;
    }
    else {
        first_click = false;
    }
}
// Variable de movile [ Variable que nos permite saber si hemos escogido movil ]
// Metodo get
function getMobile() { return mobile; }
// Metodo set
function setMobile(setFunc) {
    if (setFunc == true) {
        mobile = true;
    }
    else {
        mobile = false;
    }
}
// Metodo change [ Variable que cambia entre tipo movil o pc ]
function change() {
    if (getMobile()) {
        setMobile(false);
    }
    else {
        setMobile(true);
    }
}
// Metode per inicialitzar el array de first_time
function firstTime() {
    for (let i = 0; i < vagones.length; i++) {
        first_time_vagon[i] = true;
    }
}
// Metodos para moverse por las diferentes secciones
// Metodo para cerrar todos los modal de una
function cerrar_modal() {
    maft.style.display = "none";
    met.style.display = "none";
}
// Metodo set del modal de tipo
function setModalTipo(setFunc) {
    if (setFunc == true) {
        set_tipo.innerText = "Estas en modo movil";
        set_texto.innerText = "No puedes utilizar el teclado porque estas en movil";
    }
    else {
        set_tipo.innerText = "Estas en modo pc";
        set_texto.innerText = "No puedes utilizar las flechas porque estas en modo pc";
    }
    met.style.display = "flex";
}
// Metodo para ir a la seccion de signup
function toLogin() {
    s_login.style.display = "flex";
    s_signup.style.display = "none";
    s_train.style.display = "none";
    s_asientos.style.display = "none";
}
// Metodo para ir a la seccion de login
function toSign() {
    s_login.style.display = "none";
    s_signup.style.display = "flex";
    s_train.style.display = "none";
    s_asientos.style.display = "none";
}
// Metodo para ir a la seccion de train 
function toTrain() {
    s_login.style.display = "none";
    s_signup.style.display = "none";
    s_train.style.display = "flex";
    s_asientos.style.display = "none";
}
// Metodo para ir a la seccion de asientos 
function toAsientos() {
    s_login.style.display = "none";
    s_signup.style.display = "none";
    s_train.style.display = "none";
    s_asientos.style.display = "flex";
}
// Metodo de la animacion del texto que aparece en los trenes
function textAnimation() {
    setInterval(function () {
        let move_cartel = document.getElementsByClassName("move_cartel");
        // haz que todos los carteles del array move_cartel se muevan
        for (let i = 0; i < move_cartel.length; i++) {
            if (move_cartel[i].style.left == "-200px") {
                move_cartel[i].style.left = "150px";
                move_cartel[i].style.transition = "left 0s";
            }
            else {
                move_cartel[i].style.left = "-200px";
                move_cartel[i].style.transition = "left 3s";
            }
        }
    }, 2000);
}
// A PARTIR DE AQUI TIENES QUE MIRARTE SI O SI EL README XD
function setVagones() {
    let t_vagones = "";
    let a = 0;
    contador_asientos = 0;
    for (let i = 0; i < vagones.length; i++) {
        if (i == 0) {
            a = 1;
            t_vagones = "";
        }
        else if (i == 1 || i == 2) {
            a = 10;
            t_vagones = "";
        }
        else if (i >= 3 && i <= 10) {
            a = 15;
            t_vagones = "";
        }
        for (let j = 0; j < 4; j++) {
            t_vagones += `<div class="line">`;
            for (let k = 0; k < a; k++) {
                t_vagones += `<div class="asiento" id=""></div>`;
            }
            t_vagones += `</div>`;
        }
        msa.innerHTML = t_vagones;
        let t_insert;
        if (i == 0) {
            t_insert = "";
            for (let x = 0; x < 4; x++) {
                if (x == 2) {
                    t_insert += "<div class='separador'></div>";
                }
                t_insert += "<div class='line'>";
                for (let y = 0; y < 1; y++) {
                    contador_asientos++;
                    t_insert += "<div class='free' id='asiento' onclick='reservar(" + contador_asientos + ")' name='asientos_a_reservar'></div>";
                }
                t_insert += "</div>";
            }
        }
        else if (i == 1 || i == 2) {
            t_insert = "";
            for (let x = 0; x < 4; x++) {
                if (x == 2) {
                    t_insert += "<div class='separador'></div>";
                }
                t_insert += "<div class='line'>";
                for (let y = 0; y < 10; y++) {
                    contador_asientos++;
                    t_insert += "<div class='free' id='asiento' onclick='reservar(" + contador_asientos + ")' name='asientos_a_reservar'></div>";
                }
                t_insert += "</div>";
            }
        }
        else if (i >= 3 && i <= 10) {
            t_insert = "";
            for (let x = 0; x < 4; x++) {
                if (x == 2) {
                    t_insert += "<div class='separador'></div>";
                }
                t_insert += "<div class='line'>";
                for (let y = 0; y < 15; y++) {
                    contador_asientos++;
                    t_insert += "<div class='free' id='asiento' onclick='reservar(" + contador_asientos + ")' name='asientos_a_reservar'></div>";
                }
                t_insert += "</div>";
            }
        }
        precio.innerText = "10 €";
        clases[i].innerHTML = t_insert;
    }
    asientos = document.getElementsByName("asientos_a_reservar");
    // Coge los asientos reservados del localstorage
    let asientos_ocupados = JSON.parse(localStorage.getItem("asientos"));
    // Si hay asientos reservados, los pone en rojo
    if (asientos_ocupados != null) {
        for (let i = 0; i < asientos.length; i++) {
            if (asientos_ocupados[i] == "occuped") {
                asientos[i].className = "occuped";
            }
            else if (asientos_ocupados[i] == "selected") {
                asientos[i].className = "selected";
            }
        }
    }
}
function selectVagon(n_vagon) {
    toAsientos();
    clases[n_vagon].style.display = "flex";
    if (n_vagon == 0) {
        coste = 60;
    }
    else if (n_vagon == 1 || n_vagon == 2) {
        coste = 40;
    }
    else if (n_vagon >= 3 && n_vagon <= 10) {
        coste = 20;
    }
}
function cerrar_modal_asientos(n_vagon) {
    toTrain();
    for (let i = 0; i < vagones.length; i++) {
        clases[i].style.display = "none";
    }
}
function reservar(n_asiento) {
    n_asiento = n_asiento - 1;
    if (asientos[n_asiento].className == "free") {
        asientos[n_asiento].className = "selected";
        precio.innerText = (precio_total += coste) + " €";
    }
}
function comprar(n_asiento) {
    for (let i = 0; i < asientos.length; i++) {
        if (asientos[i].className == "selected") {
            asientos[i].className = "occuped";
        }
    }
    precio_total = 0;
    precio.innerText = precio_total + " €";
}
function guardar(n_asiento) {
    let save_asientos = [];
    for (let i = 0; i < asientos.length; i++) {
        save_asientos.push(asientos[i].className);
    }
    localStorage.removeItem("asientos");
    localStorage.setItem("asientos", JSON.stringify(save_asientos));
}
function salir() { location.reload(); }
