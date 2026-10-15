import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

// Modificación del objeto y arreglo con el operador Spread (...)
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

// Mostrar curso en el DOM y Consola
document.querySelector("#curso").textContent = `Curso: ${curso}`;
console.log(`Curso: ${curso}`);

// Mostrar reportes en el DOM y Consola
const listaReportes = document.querySelector("#reportes");

todos.forEach(estudiante => {
    const repText = reporte(estudiante);
    console.log(repText);
    
    const li = document.createElement("li");
    li.textContent = repText;
    listaReportes.appendChild(li);
});