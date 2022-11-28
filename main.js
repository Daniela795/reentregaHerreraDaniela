let Usuario = localStorage.getItem("usuario-principal");
Usuario = JSON.parse(Usuario)


const nombreUsuario = document.querySelector("#respuesta-nombre");
const edadUsuario = document.querySelector("#respuesta-nombre");
const mailUsuario = document.querySelector("#respuesta-nombre");
const botonEnviar = document.querySelector("#enviar.carta");
const botonGuardar = document.querySelector("#guardar.usuario");


function saludar() {
    console.log("Bienvenidx " +" " + "a tu ADN astrologico" );
}
saludar();
nombreUsuario = prompt("Por favor ingresa tu nombre");{
    console.log ("Ahora si, " + nombreUsuario, "empecemos!");  
}



const fecha = [
    {dia: prompt ("¿Que dia naciste?")},
    {mes: prompt ("¿Cual es tu mes de nacimiento?")},
    {anio: prompt ("¿En que año naciste?")},
]
console.log ("La fecha ingresada es: ", fecha)

const diaNacimiento = document.querySelector("#dia-input")
const abajo= document.querySelector("#abajo")
diaNacimiento.addEventListener ("input",() => {
    abajo.innerText= diaNacimiento.value;
})

const signo = [ 
{
    acuario : "Acuario",
    horoscopoAcuario:  "No se trata de si te derriban, se trata de si te levantas”. Lo tienes claro Acuario. No le temes porque sabes a ciencia cierta que te levantarás siempre. Cueste lo que cueste. Además, la vida te ha puesto muchos ejemplos ya y has salido indemne."
},
{
    piscis : "Piscis" ,
    horoscopoPiscis: "Si ves que la oportunidad no te llama, tienes que construir una puerta”. Pero nunca tirar la toalla. Vamos Piscis, lo sabes de sobra, si algo quieres, hay que buscarlo. Y Además, es un consejo que le das a todo el que piensa que no le pasan cosas buenas en la vida…"
},
{
    aries : "Aries",
    horoscopoAries: "Pase lo que pase, mira siempre hacia delante”. Esta frase no podría asociarse a otro signo mejor que a Aries. Es prácticamente la filosofía de vida que aplica a todo. Sea lo que sea, haya pasado lo que haya pasado.",
},
{   tauro : "Tauro",
    horoscopoTauro: "Si nadie te odia es que algo estás haciendo mal”. Lo tienes claro Tauro, es imposible caerle bien a todo el mundo. Sobre todo por envidia pero en el fondo, tú lo llevas bastante bien…",

},
{
    geminis: "Geminis",
    horoscopoGeminis: "Nunca dejes de preguntarte el por qué de todo”. A ti nadie te engaña y si no entiendes algo, ya preguntarás e indagarás, y si sigues sin entenderlo, aunque les “moleste” que cuestiones todo. Contigo, las cosas claras por favor. Tienes que entender para quedarte a gusto."
},
{
    cancer: "cancer",
    horoscopoCancer: "Debemos dejar ir la vida que hemos planeado, para asi, ­ aceptar las que nos está esperando”. Y cada día lo tienes más claro Cáncer. Lo planeado raras veces sale igual así que, hay que saber experimentar, cambiar y adaptarse a los cambios que llegan. Es tu frase. Nada termina nunca como empezó. O casi nada…"

},
{   leo: "Leo",
    horoscopoLeo: "No he fracasado. He encontrado diez mil formas que no funcionan”. Y así es, ya buscarás las maneras que funcionen. Lo tienes claro Leo. Eres una persona optimista que no te rindes porque 10 mil cosas no hayan salido bien.."

},
{
    virgo: "Virgo",
    horoscopoVirgo: "Recuerda quien estuvo ahí cuando más lo necesitabas”. Para ti, esta frase es clave Virgo. Eres una persona leal que se acuerda de todos esos momentos malos y en quien estuvo ahí para ayudarte o para echarte una mano. Y la verdad es que la gente que está ahí siempre es la que más te demuestra."
 },
{
    libra: "Libra",
    horoscopoLibra: "Todo tiene su parte buena”. Es cierto que esta frase puede ser demasiado “estándar” pero también es cierto que, realmente, tú seas de los pocos signos que en realidad. y te ayuda en mucho Libra. Te ayuda a pasarlo menos mal, a confiar mucho más en lo que llega, a ver el vaso medio lleno."
},
{
    escorpio: "Escorpio",
    horoscopoEscorpio: "O todo o nada”. Sí Escorpio, cuando vas a por todas, VAS A POR TODAS DE VERDAD. Es complicado tener esta filosofía para muchas personas porque pueden tacharte de radical. Se trata de volcarte al 100% en lo que haces porque si no, directamente no lo harás. Simplemente eso Escorpio. O todo o nada."
},
{
    sagitario: "Sagitario",
    horoscopoSagitario: "Cuando hay ganas, todo se puede”. Lo tienes claro, si de verdad te enfocas en algo y lo deseas con todas tus fuerzas, acaba saliendo. Eres un signo expansivo Sagi. Eres capaz de hacer algo grande de algo minúsculo. Tienes ese poder así que, que nadie te engañe o te apague esa fuerza. Porque es demasiado poderosa para alguno",
},
{
    capricornio:"Capricornio",
    horoscopoCapricornio: "La gente que esta lo suficientemente loca para pensar que pueden cambiar el mundo, son aquellas que lo consiguen”. Si Capri, sabes perfectamente que tus ideas no son comunes, que tus sueños no son los que tiene la mayoría, que tus metas no las entendería cualquiera."
}
];



mes = Number(prompt("Ingrese su mes de nacimiento en NUMEROS "));
switch (mes){
    case 1: 
        console.log ("Tu signo es: Acuario");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoAcuario)

        })
        
        break;
        
    case 2: 
        console.log("Tu signo es: Piscis");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoPiscis)
             })
        break;
    case 3: 
        console.log("Tu signo es: Aries");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoAries)
             })
        break;
    case 4: 
        console.log("Tu signo es: Tauro");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoTauro)
             })
        break;
    case 5: 
        console.log("Tu signo es: Geminis" );
        signo.forEach ((signo) => {
            console.log (signo.horoscopoGeminis)
             })
        break;
    case 6: 
        console.log("Tu signo es: Cancer");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoCancer)
             })
        break;
    case 7: 
        console.log("Tu signo es: Leo")
        signo.forEach ((signo) => {
            console.log (signo.horoscopoLeo)
             })
        break;
    case 8: 
        console.log("Tu signo es: Virgo" );
        signo.forEach ((signo) => {
            console.log (signo.horoscopoVirgo)
             })
        break;
    case 9: 
        console.log("Tu signo es: Libra" );
        signo.forEach ((signo) => {
            console.log (signo.horoscopoLibra)
             })
        break;
    case 10: 
        console.log("Tu signo es: Escorpio" );
        signo.forEach ((signo) => {
            console.log (signo.horoscopoEscorpio)
             })
        break;
    case 11: 
        console.log ("Tu signo es: Sagitario");
        signo.forEach ((signo) => {
            console.log (signo.horoscopoSagitario)
             })
        break;
    case 12: 
        console.log("Tu signo es: Capricornio" );
        signo.forEach ((signo) => {
            console.log (signo.horoscopoCapricornio)
             })
        break;

 }


function despedir () {
    console.log ("Gracias "  +  nombreUsuario  + " por consultar tu ADN Astrologico")
    console.log ("Te esperamos para tu proxima consulta")
}
despedir()