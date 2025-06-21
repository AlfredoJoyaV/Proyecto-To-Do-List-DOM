import './style.css';
export default function createFooter() {
    const footer = document.createElement('footer');
    
    const p = document.createElement('p');
    p.textContent = "TADA ENTERPRISES © 2023 All rights reserved.";

    footer.appendChild(p);
    return footer;
}