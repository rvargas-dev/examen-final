# StudyTask

StudyTask es una aplicación web desarrollada para ayudar a estudiantes universitarios a organizar y gestionar sus actividades académicas de manera sencilla.

La aplicación permite registrar tareas indicando información como el curso, la fecha límite y el nivel de prioridad, manteniendo los datos almacenados en el navegador.

---

## 1. Problemática

Los estudiantes universitarios suelen gestionar simultáneamente tareas, trabajos, evaluaciones y fechas de entrega correspondientes a diferentes cursos.

Cuando esta información se encuentra dispersa o no existe una organización adecuada, pueden producirse olvidos, retrasos y dificultades para identificar qué actividades deben atenderse primero.

---

## 2. Contexto

La problemática se presenta principalmente en el entorno académico universitario, donde los estudiantes deben administrar diferentes actividades durante un mismo ciclo académico.

StudyTask busca ofrecer una herramienta sencilla que permita centralizar esta información en un solo lugar.

---

## 3. Usuario objetivo

La aplicación está dirigida principalmente a estudiantes universitarios que necesitan organizar y controlar sus actividades académicas.

---

## 4. Objetivo de la solución

Desarrollar una aplicación web que permita registrar, visualizar y administrar actividades académicas, ayudando al estudiante a mantener un mejor control de sus tareas, fechas de entrega y prioridades.

---

## 5. Solución propuesta

Se desarrolló StudyTask, una aplicación web que permite registrar actividades académicas indicando:

- Nombre de la actividad.
- Curso.
- Fecha límite.
- Nivel de prioridad.

Las actividades son almacenadas en el navegador utilizando LocalStorage, permitiendo conservar la información incluso después de actualizar o volver a abrir la página.

La solución fue desarrollada utilizando tecnologías web y publicada mediante GitHub Pages.

---

## 6. Funcionalidades principales

StudyTask cuenta actualmente con las siguientes funcionalidades:

- **Crear actividades:** al enviar el formulario se crea una actividad con nombre, curso, fecha límite, prioridad e identificador único.
- **Listar actividades:** las actividades registradas se muestran en la interfaz con su título, curso, fecha y prioridad.
- **Guardar actividades en LocalStorage:** las actividades se almacenan localmente en el navegador.
- **Recuperar actividades al abrir o recargar la página:** la información almacenada se recupera automáticamente cuando se inicia nuevamente la aplicación.
- **Validar campos obligatorios:** la aplicación impide registrar una actividad si existen campos requeridos vacíos.
- **Mostrar prioridades diferenciadas:** las prioridades alta, media y baja se muestran con estilos visuales diferentes.
- **Interfaz responsive:** la aplicación adapta su presentación a diferentes tamaños de pantalla.

Actualmente no se han implementado funciones para eliminar actividades, marcar actividades como completadas, buscar, filtrar o mostrar estadísticas.

---

## 7. Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron las siguientes tecnologías:

- HTML5.
- CSS3.
- JavaScript.
- LocalStorage.
- Git.
- GitHub.
- GitHub Pages.
- GitHub Copilot.
- Visual Studio Code.

---

## 8. Estructura del proyecto

La aplicación se encuentra organizada de la siguiente manera:

```text
examen-final/
│
├── index.html
├── styles.css
├── app.js
├── task-storage.js
└── README.md
```

### Responsabilidad de los archivos

- `index.html`: contiene la estructura principal de la interfaz de usuario.
- `styles.css`: contiene los estilos visuales y responsive de la aplicación.
- `app.js`: contiene la lógica principal, validación y renderizado de las actividades.
- `task-storage.js`: contiene la lógica relacionada con el almacenamiento y recuperación mediante LocalStorage.
- `README.md`: contiene la documentación del proyecto.

---

## 9. Uso de GitHub Copilot

GitHub Copilot fue utilizado como herramienta de apoyo durante diferentes etapas del desarrollo de StudyTask.

Las sugerencias generadas por Copilot fueron revisadas antes de ser incorporadas al proyecto.

Su uso permitió apoyar tareas relacionadas con generación de código, implementación, organización, revisión y mejora de la aplicación.

### 9.1 Generación de la estructura inicial

GitHub Copilot fue utilizado para obtener sugerencias sobre la estructura inicial de la aplicación.

Ejemplo de prompt utilizado:

```text
Genera una estructura HTML para una aplicación llamada StudyTask
que permita registrar actividades académicas indicando nombre
de la tarea, curso, fecha límite y prioridad.
```

### Decisión tomada

Se revisó la estructura propuesta y se adaptaron los campos para que fueran coherentes con la problemática seleccionada.

Se decidió mantener una interfaz sencilla para facilitar el uso de la aplicación.

---

### 9.2 Implementación de LocalStorage

GitHub Copilot fue utilizado para apoyar la implementación de la persistencia de datos utilizando LocalStorage.

Ejemplo de prompt utilizado:

```text
Ayúdame a almacenar un arreglo de tareas utilizando LocalStorage
para conservar las actividades después de actualizar el navegador.
```

### Decisión tomada

Copilot sugirió utilizar `JSON.stringify()` para almacenar las actividades y `JSON.parse()` para recuperarlas.

Se decidió utilizar este mecanismo debido a que LocalStorage almacena información como texto.

También se separó esta lógica en el archivo `task-storage.js` para mantener una mejor organización del proyecto.

---

### 9.3 Organización del código

GitHub Copilot también fue utilizado para analizar la organización del código.

Ejemplo de prompt utilizado:

```text
Revisa este código y ayúdame a separar la lógica de almacenamiento
de la lógica de la interfaz sin modificar el funcionamiento.
```

### Decisión tomada

Se decidió separar la lógica de almacenamiento en `task-storage.js` y mantener la lógica principal de interacción con el usuario en `app.js`.

Esta separación permite mantener un código más organizado y comprensible.

---

### 9.4 Mejora de la interfaz

GitHub Copilot fue utilizado como apoyo para mejorar la presentación visual de StudyTask.

Ejemplo de prompt utilizado:

```text
Genera estilos CSS modernos para StudyTask utilizando tarjetas,
formularios organizados y un diseño responsive sin utilizar frameworks.
```

### Decisión tomada

Se revisaron las recomendaciones propuestas por Copilot y se utilizaron los estilos necesarios para mejorar la legibilidad y la presentación de la aplicación.

Se decidió no utilizar frameworks externos para mantener una solución ligera.

---

### 9.5 Revisión de funcionalidades

GitHub Copilot también fue utilizado para revisar las funcionalidades realmente implementadas en el proyecto.

Ejemplo de prompt utilizado:

```text
Analiza los archivos actuales de mi proyecto StudyTask e identifica
únicamente las funcionalidades que están realmente implementadas.
No inventes funcionalidades ni asumas comportamientos que no existan.
```

### Decisión tomada

A partir de la revisión realizada con Copilot, se decidió documentar únicamente las funcionalidades existentes en el código.

Por esta razón, no se incluyen como funcionalidades actuales la eliminación de tareas, marcado como completadas, filtros, búsqueda ni estadísticas.

---

## 10. Decisiones tomadas durante el desarrollo

Durante la implementación se tomaron las siguientes decisiones:

- Utilizar únicamente HTML, CSS y JavaScript.
- Utilizar LocalStorage en lugar de una base de datos externa.
- Separar la lógica de almacenamiento en `task-storage.js`.
- Separar los estilos en `styles.css`.
- Mantener la aplicación compatible con GitHub Pages.
- No utilizar frameworks externos.
- Implementar validaciones tanto desde HTML como desde JavaScript.
- Utilizar estilos diferenciados para representar las prioridades.
- Mantener un diseño responsive.
- Documentar únicamente las funcionalidades realmente disponibles.
- Revisar las sugerencias de GitHub Copilot antes de incorporarlas al código.

GitHub Copilot fue utilizado como herramienta de apoyo y no como sustituto de la revisión del desarrollador.

---

## 11. Ejecución local

Para ejecutar StudyTask localmente:

1. Clonar el repositorio:

```bash
git clone https://github.com/rvargas-dev/examen-final.git
```

2. Ingresar a la carpeta:

```bash
cd examen-final
```

3. Abrir el archivo:

```text
index.html
```

en un navegador web.

No es necesario instalar dependencias adicionales.

---

## 12. Repositorio

El código fuente del proyecto se encuentra disponible públicamente en GitHub:

```text
https://github.com/rvargas-dev/examen-final
```

---

## 13. Aplicación publicada

StudyTask fue publicada mediante GitHub Pages.

La aplicación se encuentra disponible en:

```text
https://rvargas-dev.github.io/examen-final/
```

---

## 14. Pruebas realizadas

Para comprobar el funcionamiento de StudyTask se realizaron las siguientes pruebas:

- Registro de una actividad con nombre, curso, fecha y prioridad.
- Intento de registro dejando campos obligatorios vacíos.
- Registro de actividades con prioridad alta, media y baja.
- Verificación de los estilos asociados a cada prioridad.
- Actualización de la página después de registrar actividades.
- Verificación de persistencia mediante LocalStorage.
- Cierre y reapertura de la aplicación para comprobar la recuperación de actividades.
- Validación del funcionamiento desde GitHub Pages.
- Verificación de la interfaz en diferentes tamaños de pantalla.

### Resultados esperados

- Las actividades correctamente registradas deben aparecer en la lista.
- No se deben registrar actividades con campos obligatorios vacíos.
- Las actividades deben mantenerse después de actualizar la página.
- Las prioridades deben visualizarse de manera diferenciada.
- La interfaz debe adaptarse a pantallas de diferentes tamaños.

---

## 15. Evidencia del uso de GitHub Copilot

Durante el desarrollo se utilizó GitHub Copilot como apoyo para:

- Generación de la estructura HTML.
- Implementación de funciones JavaScript.
- Implementación de LocalStorage.
- Organización del código.
- Mejora de estilos CSS.
- Implementación del diseño responsive.
- Revisión de validaciones.
- Revisión de las funcionalidades implementadas.
- Mejora de la documentación.

Todas las sugerencias fueron analizadas y adaptadas antes de ser incorporadas al proyecto.

---

## 16. Limitaciones actuales

La versión actual de StudyTask no incluye todavía:

- Eliminación de actividades.
- Marcado de actividades como completadas.
- Búsqueda de actividades.
- Filtros de actividades.
- Estadísticas de tareas.

Estas funcionalidades podrían incorporarse como mejoras futuras.

---

## 17. Autor

**Renzo Alberto Vargas Antayhua**

Proyecto desarrollado para la evaluación final del curso de Inteligencia Artificial.