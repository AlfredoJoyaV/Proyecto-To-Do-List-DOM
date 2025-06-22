import createHeader from './header.js';

import createFooter from './footer.js';
const footer = createFooter(); 
document.body.appendChild(footer); // O donde quieras agregar el footerimport './style.css'
const app = document.getElementById('app');

const header = createHeader();
document.body.prepend(header); // O donde quieras agregar el header

//Agregar la lista de tareas
const listasAgregadas = `
<div class="listas">
    <h1>Agrega una tarea</h1>
    <input type="text" id="listaInput" placeholder="Escribe una tarea">
    <button id="agregarTarea">Agregar tarea</button>
</div>    
`;

//Creamos el contenedor de las listas de tareas
const contenedorListas = document.createElement('div');
contenedorListas.innerHTML = listasAgregadas;
app.appendChild(contenedorListas);




