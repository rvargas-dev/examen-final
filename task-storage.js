"use strict";

(() => {
  const claveAlmacenamiento = "studyTask.tareas";

  function esTareaValida(tarea) {
    return (
      tarea !== null &&
      typeof tarea === "object" &&
      typeof tarea.id === "string" &&
      typeof tarea.titulo === "string" &&
      typeof tarea.curso === "string" &&
      typeof tarea.fecha === "string" &&
      typeof tarea.prioridad === "string" &&
      typeof tarea.completada === "boolean"
    );
  }

  window.StudyTaskStorage = {
    loadTasks() {
      const tareasGuardadas = localStorage.getItem(claveAlmacenamiento);
      if (tareasGuardadas === null) {
        return [];
      }

      const tareas = JSON.parse(tareasGuardadas);
      if (!Array.isArray(tareas) || !tareas.every(esTareaValida)) {
        throw new Error("Los datos guardados no tienen un formato válido.");
      }
      return tareas;
    },

    saveTasks(tareas) {
      localStorage.setItem(claveAlmacenamiento, JSON.stringify(tareas));
    },
  };
})();
