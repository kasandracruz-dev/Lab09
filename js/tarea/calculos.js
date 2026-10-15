export const promedio = (...notas) => 
    notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Estado con parámetro por defecto
export const estado = (nota, minima = 13) => 
    nota >= minima ? "Aprobado" : "Desaprobado";

// Reporte utilizando desestructuración, spread operator y template literals
export const reporte = ({ nombre, notas }) => {
    const prom = promedio(...notas);
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};