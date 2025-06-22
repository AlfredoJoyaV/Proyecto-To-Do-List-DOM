import './style.css';
export default function createHeader() {
    const header = document.createElement('header');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Dashboard";

    header.appendChild(h1);
    return header;
}