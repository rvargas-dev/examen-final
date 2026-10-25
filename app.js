"use strict";

const formulario = document.querySelector("#formulario-tarea");
const listaTareas = document.querySelector("#tareas");
const mensajeEstado = document.querySelector("#mensaje-estado");
let tareas = [];

function mostrarTarea(tarea) {
  const elemento = document.createElement("li");
  elemento.dataset.tareaId = tarea.id;
  elemento.className = `priority-${tarea.prioridad}`;

  const titulo = document.createElement("h3");
  titulo.textContent = tarea.titulo;

  const detalles = document.createElement("p");
  detalles.textContent = `${tarea.curso} · Fecha límite: ${tarea.fecha}`;

  const prioridad = document.createElement("span");
  prioridad.className = "task-priority";
  prioridad.textContent = `Prioridad ${tarea.prioridad}`;

  elemento.append(titulo, detalles, prioridad);
  listaTareas.append(elemento);
}

try {
  tareas = window.StudyTaskStorage.loadTasks();
  tareas.forEach(mostrarTarea);
} catch (error) {
  mensajeEstado.textContent = `No se pudieron cargar las actividades: ${error.message}`;
  formulario.querySelector('button[type="submit"]').disabled = true;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensajeEstado.textContent = "";

  for (const nombreCampo of ["nombre", "curso", "fecha-limite", "prioridad"]) {
    const campo = formulario.elements.namedItem(nombreCampo);
    campo.setCustomValidity(
      campo.value.trim() ? "" : "Completa este campo."
    );
  }

  if (!formulario.reportValidity()) {
    return;
  }

  const datos = new FormData(formulario);
  const titulo = datos.get("nombre").trim();
  const curso = datos.get("curso").trim();
  const fecha = datos.get("fecha-limite").trim();
  const prioridad = datos.get("prioridad").trim();

  const tarea = {
    id: crypto.randomUUID(),
    titulo,
    curso,
    fecha,
    prioridad,
    completada: false,
  };

  const nuevasTareas = [...tareas, tarea];
  try {
    window.StudyTaskStorage.saveTasks(nuevasTareas);
  } catch (error) {
    mensajeEstado.textContent = `No se pudo guardar la actividad: ${error.message}`;
    return;
  }

  tareas = nuevasTareas;
  mostrarTarea(tarea);

  formulario.reset();
  formulario.querySelector("#nombre").focus();
});
