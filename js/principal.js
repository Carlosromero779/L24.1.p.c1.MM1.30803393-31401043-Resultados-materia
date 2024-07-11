/*RESULTADOS MATERIA
*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
*aprueban con 48Ptos.
*Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
*aprobados, cantidad de reprobados y nota promedio de la sección.
*Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
*777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y
*222 (60Ptos), la salida que se espera es como la siguiente:
*Cantidad de aprobados: 6
*Cantidad de reprobados: 2
*Nota promedio de la sección: 57.25
*/ 
import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_materia from "./Cl_materia.js";

let materia = new Cl_materia();
let estudiante1 = new Cl_estudiantes("888" ,60);
let estudiante2 = new Cl_estudiantes("777" ,50);
let estudiante3 = new Cl_estudiantes("999" ,40);
let estudiante4 = new Cl_estudiantes("333" ,80);
let estudiante5 = new Cl_estudiantes("111" ,30);
let estudiante6 = new Cl_estudiantes("333" ,90);
let estudiante7 = new Cl_estudiantes("444" ,48);
let estudiante8 = new Cl_estudiantes("222" ,60);
materia.procesarEstudiantes(estudiante1);
materia.procesarEstudiantes(estudiante2);
materia.procesarEstudiantes(estudiante3);
materia.procesarEstudiantes(estudiante4);
materia.procesarEstudiantes(estudiante5);
materia.procesarEstudiantes(estudiante6);
materia.procesarEstudiantes(estudiante7);
materia.procesarEstudiantes(estudiante8);
 let salida = document.getElementById("salida");
 salida.innerHTML = `<br> Cantidad de aprobados:${materia.cantidadAprobados()}`;
 salida.innerHTML += `<br> Cantidad de reprobados:${materia.cantidadReprobados()}`;
 salida.innerHTML += `<br> Nota promedio:${materia.promedio()}`;