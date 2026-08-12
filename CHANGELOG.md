# 📜 Changelog - Intranet Escolar

Todos los cambios notables en este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.0.0] - 2026-08-12

### Añadido
- **Maquetación y Estructura HTML5 Semántica (`index.html`)**:
  - Encabezado principal con título institucional, distintivo de versión y selector de rol simulado.
  - Navegación principal accesible por pestañas para alternar vistas.
  - Sección de **Avisos y Comunicados Institucionales** con formulario de publicación y tarjetas de noticias.
  - Sección de **Registro de Calificaciones y Asistencia** con filtros de periodo, asignatura y grupo, e insumos de tabla editables.
  - Sección de **Administración de Usuarios** con formulario de registro de nuevos integrantes y directorio en tabla.
  - Pie de página con créditos, año y aviso de confidencialidad.

- **Sistema de Diseño Visual y CSS Responsivo (`styles.css`)**:
  - Implementación de tokens con variables CSS (`:root`) para paleta de azules institucionales, neutros slate y colores de estado (aprobado/reprobado/urgente).
  - Normalización de estilos base y utilidades de accesibilidad (`.sr-only`).
  - Tarjetas del tablón con elevación visual `:hover` y badges de categoría.
  - Formularios alineados con campos interactivos y *focus-ring* azul.
  - Tablas de datos con bordes suaves, filas alternadas (*zebra-striping*) y pastillas de estado (`.status-pill`).
  - Insignias visuales por rol (`.role-admin`, `.role-docente`, `.role-estudiante`).
  - Reglas *media queries* para adaptabilidad en pantallas de escritorio, tablets y dispositivos móviles.

- **Lógica e Interactividad en JavaScript Vanilla (`app.js`)**:
  - Estructura de estado global con datos simulados iniciales (*Mock Data*) para comunicados, calificaciones y usuarios.
  - Sistema de simulación dinámica de permisos por rol activo (*Estudiante*, *Docente*, *Administrador*), ajustando visibilidad de formularios y capacidad de edición en tiempo real.
  - Módulo de comunicados con publicación e inserción dinámica en el DOM.
  - Módulo de calificaciones con recálculo automático de promedios `(Trabajos + Examen) / 2` y actualización de estado (*Aprobado/Reprobado*).
  - Módulo de directorio de usuarios con altas y alternancia de estado (*Activo/Inactivo*).
  - Persistencia de datos local en `localStorage` para conservar modificaciones tras recargar el navegador.

---

## [0.1.0] - 2026-08-12

### Añadido
- **Estructura Base del Proyecto**:
  - Archivo principal `index.html` para la interfaz del prototipo.
  - Archivo `styles.css` para el sistema de diseño visual.
  - Archivo `app.js` para la lógica interactiva del cliente.
- **Documentación Completa del Proyecto**:
  - `README.md`: Portada, descripción del proyecto, stack de tecnologías (HTML5, CSS3, JS Vanilla), guía de instalación local y sección de licencia.
  - `CLAUDE.md`: Memoria del agente estructurada en exactamente 7 secciones (Contexto, Requerimientos, Reglas, Restricciones, Objetivos, Memoria del Proyecto y Buenas Prácticas).
  - `CONTRIBUTING.md`: Guía de colaboración, convención de nombres de ramas, sintaxis de Conventional Commits y flujo paso a paso de Pull Requests.
  - `CHANGELOG.md`: Historial de versiones inicial conforme al estándar *Keep a Changelog*.
  - `docs/requerimientos.md`: Requerimientos funcionales y no funcionales estructurados mediante casillas de verificación de Markdown.
  - `docs/arquitectura.md`: Especificación técnica de la estructura de archivos, flujo de interacción y decisiones de diseño del prototipo.
