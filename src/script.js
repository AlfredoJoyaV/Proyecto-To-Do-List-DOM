import createHeader from './header.js';
import createFooter from './footer.js';
const app = document.getElementById('app');

const header = createHeader();
document.body.prepend(header); // O donde quieras agregar el header

const footer = createFooter(); 
document.body.appendChild(footer); // O donde quieras agregar el footerimport './style.css'

//Agregar la lista de tareas
const listasAgregadas = `
<div class="listas">
<<<<<<< HEAD
    <h1>Agrega tu lista de tareas</h1>
    <input type="text" id="listaInput" placeholder="Escribe el nombre de la lista">
    <button id="agregarLista">Agregar Tareas</button>
=======
    <h1>Agrega una tarea</h1>
    <input type="text" id="listaInput" placeholder="Escribe una tarea">
    <button id="agregarTarea">Agregar tarea</button>
>>>>>>> fb97f615ee8f67670d03209de9f8e039c44ce44a
</div>    
`;

//Creamos el contenedor de las listas de tareas
const contenedorListas = document.createElement('div');
contenedorListas.innerHTML = listasAgregadas;
app.appendChild(contenedorListas);




