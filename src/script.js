import createHeader from './header.js';

const header = createHeader();
document.body.prepend(header); // O donde quieras agregar el header

import createFooter from './footer.js';
const footer = createFooter(); 
document.body.appendChild(footer); // O donde quieras agregar el footer