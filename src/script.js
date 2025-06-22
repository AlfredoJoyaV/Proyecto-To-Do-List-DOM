import createHeader from './header.js';
import createFooter from './footer.js';
import './style.css';
 
const app = document.getElementById('app');
 
// Importamos en header y fotter
const header = createHeader();
document.body.prepend(header);


 
const footer = createFooter();
document.body.appendChild(footer);
 
// Hacemos el cuerpo del HTML
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
 
const contenedorListas = document.createElement('div');
contenedorListas.innerHTML = listasAgregadas;
app.appendChild(contenedorListas);
 
// Declaramos las constantes
const listaTareas = document.getElementById('listaTareas');
const inputTarea = document.getElementById('listaInput');
const btnAgregar = document.getElementById('agregarTarea');
 
// Lo guardamos en el LocalStorage
function obtenerTareas() {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}
 
function guardarTareas(tareas) {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
 
// Hacemos una funcion del cargado de tareas
function cargarTareas() {
    const tareas = obtenerTareas();
    listaTareas.innerHTML = '';
 
    tareas.forEach((tareaObj, idx) => {
        const li = document.createElement('li');
 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id="done";
        checkbox.checked = tareaObj.completada;
        checkbox.addEventListener('change', () => {
            tareas[idx].completada = checkbox.checked;
            guardarTareas(tareas);
            cargarTareas();
        });
 
        const span = document.createElement('span');
        span.textContent = tareaObj.texto;
        if (tareaObj.completada) {
            span.style.textDecoration = 'line-through';
        }
 
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.id = 'btnEdit';
        btnEditar.onclick = () => editarTarea(idx);
 
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.id = 'btnDelet';
        btnEliminar.onclick = () => eliminarTarea(idx);
 
        li.append(checkbox, span,  btnEditar, btnEliminar);
        listaTareas.appendChild(li);
    });
}
 
// Agregamos las tareas
btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto) {
        const tareas = obtenerTareas();
        tareas.push({ texto, completada: false });
        guardarTareas(tareas);
        cargarTareas();
        inputTarea.value = '';
    }
});
 
// Eliminamos tareas
function eliminarTarea(idx) {
    const tareas = obtenerTareas();
    tareas.splice(idx, 1);
    guardarTareas(tareas);
    cargarTareas();
}
 
// Editamos tareas
function editarTarea(idx) {
    const tareas = obtenerTareas();
    const nuevaTarea = prompt('Coloca la edición de la tarea:', tareas[idx].texto);
    if (nuevaTarea) {
        tareas[idx].texto = nuevaTarea.trim();
        guardarTareas(tareas);
        cargarTareas();
    }
}
 
//Agregar tarea al dar enter
inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});

//logica modo oscuro
const btnModoOscuro = document.getElementById('modoOscuroBtn');
btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');

    // Cambiar texto del botón según el estado
    if (document.body.classList.contains('modo-oscuro')) {
        btnModoOscuro.textContent = 'Modo Claro 🌞';
    } else {
        btnModoOscuro.textContent = 'Modo Oscuro 🌚';
    }
});

cargarTareas();

console.log('Script cargado correctamente');