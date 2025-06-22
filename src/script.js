import createHeader from './header.js';
import createFooter from './footer.js';
const app = document.getElementById('app');

const header = createHeader();
document.body.prepend(header); // O donde quieras agregar el header

const footer = createFooter(); 
document.body.appendChild(footer); // O donde quieras agregar el footerimport './style.css'

// Agregar la lista de tareas
const listasAgregadas = `
<div class="listas">
    <h1>Agrega una tarea</h1>
    <div class="input-contenedor">
        <input type="text" id="listaInput" placeholder="Escribe una tarea">
        <button id="agregarTarea">Agregar tarea</button>
    </div>
    <div id="enlistar">
    <h2>Lista de Tareas</h2>
    <ul id="listaTareas"></ul>
    </div>
</div>
`;
 
// Creamos el contenedor de las listas de tareas
const contenedorListas = document.createElement('div');
contenedorListas.innerHTML = listasAgregadas;
app.appendChild(contenedorListas);
 
// Referencia a la lista visual de tareas
const listaTareas = document.getElementById('listaTareas');
 
// Función para cargar tareas desde localStorage
function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, idx) => {
        const li = document.createElement('li');
        li.textContent = tarea;
        // Boton para editar tarea
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarTarea(idx);
        li.appendChild(btnEditar);

        // Botón para eliminar tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarTarea(idx);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}
 
// Función para guardar tareas en localStorage
function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
 
// Evento para agregar nueva tarea
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

// Función para editar tarea
function editarTarea(idx) {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    const nuevaTarea = prompt('Coloca la edición de la tarea:', tareas[idx]);
    if (nuevaTarea) {
        tareas[idx] = nuevaTarea;
        guardarTareas(tareas);
        cargarTareas();
    }
};

// Inicializar la lista al cargar la página
cargarTareas();
