import './style.css'
const app = document.getElementById('app');

//Agregar la lista de tareas
const listasAgregadas = `
<div class="listas">
    <h1>Agrega tu lista de tareas</h1>
    <input type="text" id="listaInput" placeholder="Escribe el nombre de la lista">
    <button id="agregarLista">Agregar Lista</button>
</div>    

`;

//Creamos el contenedor de las listas de tareas
const contenedosListas = document.createElement('div');
contenedosListas.innerHTML = listasAgregadas;
app.appendChild(contenedosListas);
