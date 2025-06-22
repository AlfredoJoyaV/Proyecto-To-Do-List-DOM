import './style.css';
export default function createHeader() {
    const header = document.createElement('header');
    
    const h1 = document.createElement('h1');
    h1.textContent = "To do list 🗒️";

    header.appendChild(h1);
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Modo Oscuro 🌚';
    toggleButton.id = 'modoOscuroBtn';
    header.appendChild(toggleButton);

    return header;

}