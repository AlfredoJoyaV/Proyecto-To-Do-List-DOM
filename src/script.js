import createHeader from './header.js';

import createFooter from './footer.js';
const footer = createFooter(); 
document.body.appendChild(footer);
const app = document.getElementById('app');

const header = createHeader();
document.body.prepend(header);

// Se agrega la lista de tareas
const listasAgregadas = `
<div class="listas">
    <h1>Agrega una tarea</h1>
    <input type="text" id="listaInput" placeholder="Escribe una tarea">
    <button id="agregarTarea">Agregar tarea</button>
    <div id="enlistar">
    <h2>Lista de Tareas</h2>
    <ul id="listaTareas"></ul>
    </div>
</div>
`;

const contenedorListas = document.createElement('div');
contenedorListas.innerHTML = listasAgregadas;
app.appendChild(contenedorListas);

const listaTareas = document.getElementById('listaTareas');


function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, idx) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        // Botón para eliminar tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarTarea(idx);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}

function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}


document.getElementById('agregarTarea').addEventListener('click', () => {
    const input = document.getElementById('listaInput');
    const tarea = input.value.trim();
    if (tarea) {
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.push(tarea);
        guardarTareas(tareas);
        cargarTareas();
        input.value = '';
        
    }
});

// Función para eliminar tarea
function eliminarTarea(idx) {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.splice(idx, 1);
    guardarTareas(tareas);
    cargarTareas();
}

cargarTareas();




