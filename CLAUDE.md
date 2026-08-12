# CLAUDE.md - Memoria del Agente de Inteligencia Artificial

Este archivo sirve como guía contextual, operativa y directriz de comportamiento para los agentes de Inteligencia Artificial (Claude / Gemini / Antigravity) que colaboren en el desarrollo del proyecto **Intranet Escolar**.

---

## 1. Contexto

**Intranet Escolar** es una aplicación web concebida para la gestión académica y administrativa de instituciones de educación. El proyecto busca ofrecer una plataforma integral, rápida e intuitiva que conecte a estudiantes, profesores y administradores. 

Arquitectónicamente, el proyecto se plantea en su etapa actual como una aplicación **Single Page Application (SPA)** o sistema modular basado en tecnologías web estándar (HTML5, CSS3, JavaScript Vanilla). No depende de frameworks pesados de frontend para mantener máxima eficiencia, bajo consumo de recursos y facilidad de despliegue.

---

## 2. Requerimientos

- **Módulo de Autenticación y Control de Acceso**: Gestión de inicio de sesión con roles diferidos (Administrador, Docente, Estudiante).
- **Módulo Académico**: Gestión de cursos, asignaturas, listas de asistencia y registro de calificaciones.
- **Módulo de Comunicación**: Publicación y consulta de avisos y notificaciones institucionales.
- **Visualización de Datos**: Paneles de control (dashboards) adaptados a cada rol con métricas y resumen de actividades.
- **Documentación Completa**: Mantener actualizada la documentación técnica en `README.md`, `docs/arquitectura.md`, `docs/requerimientos.md`, `CHANGELOG.md` y `CONTRIBUTING.md`.

---

## 3. Reglas

- **Sintaxis y Formato**: Respetar estrictamente la sintaxis de Markdown en todos los archivos `.md`.
- **Estructura de Código Clean Code**: Escribir JavaScript autodocumentado con nombres de variables y funciones en español o inglés técnico coherente.
- **Semántica HTML**: Usar etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Control de Versiones**: Realizar commits atómicos y seguir la convención de *Conventional Commits*.
- **Integridad de Documentación**: Toda modificación funcional importante debe reflejarse simultáneamente en los requerimientos y el changelog.

---

## 4. Restricciones

- **Sin Frameworks JS Externos**: No instalar React, Vue, Angular ni bibliotecas pesadas salvo autorización explícita.
- **CSS Nativo**: Utilizar CSS3 nativo (variables CSS, Flexbox, Grid) sin preprocesadores (Sass/Less) o frameworks de utilidades (Tailwind) a menos que se requiera formalmente.
- **Compatibilidad**: Garantizar compatibilidad con navegadores web modernos estándar (Chrome, Edge, Firefox, Safari).
- **Sin Archivos Innecesarios**: No crear archivos temporales o de configuración no solicitados en la raíz del repositorio.

---

## 5. Objetivos

1. Proveer una experiencia de usuario fluida, accesible y de estética profesional en el entorno escolar.
2. Mantener la arquitectura liviana y extensible para facilitar la futura incorporación de un backend (API REST / Node.js / PHP / Python).
3. Asegurar que la documentación sea clara, técnica y estructurada para cualquier desarrollador que se integre al proyecto.
4. Garantizar una cobertura completa de requerimientos funcionales comprobables.

---

## 6. Memoria del Proyecto

- **Estado Actual**: Versión `0.1.0`. Prototipo funcional inicial creado con la estructura base de archivos frontend (`index.html`, `styles.css`, `app.js`) y el cuerpo completo de documentación en Markdown.
- **Estructura de Carpetas**:
  - `/`: Archivos principales del prototipo y documentación raíz.
  - `/docs`: Documentación detallada (`requerimientos.md`, `arquitectura.md`).
- **Decisiones Previas**: Se optó por una arquitectura frontend pura en Vanilla JS para acelerar la prototipación y permitir pruebas directas en el navegador.

---

## 7. Buenas Prácticas

- **Diseño Responsive (Mobile-First / Adaptativo)**: Interfaz utilizable tanto en ordenadores de escritorio como en tablets y móviles.
- **Accesibilidad (a11y)**: Incluir atributos `aria-*`, contraste adecuado de colores y navegación por teclado.
- **Manejo de Errores**: Validar entradas de usuario antes de procesar o almacenar datos simulados.
- **Comentarios Relevantes**: Mantener comentarios concisos explicativos en la lógica JavaScript compleja sin saturar el código.
