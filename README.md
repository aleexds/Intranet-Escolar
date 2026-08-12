# 🎓 Intranet Escolar

![Version](https://img.shields.io/badge/versi%C3%B3n-0.1.0-blue.svg)
![Licencia](https://img.shields.io/badge/licencia-MIT-green.svg)
![Tecnologías](https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JS%20Vanilla-orange.svg)

**Intranet Escolar** es una plataforma web moderna, liviana e intuitiva diseñada para centralizar y optimizar la gestión académica y administrativa de instituciones educativas. Permite conectar a administradores, docentes, estudiantes y tutores en un entorno digital seguro y accesible.

---

## 📋 Descripción del Proyecto

El sistema está concebido para resolver las necesidades operativas clave de un centro educativo:

- **Administración General**: Control de usuarios, roles, asignaciones de cursos y materias.
- **Gestión Académica**: Registro de calificaciones, asistencias, horarios y planes de estudio.
- **Portales Diferenciados**: Vistas y herramientas personalizadas según el rol del usuario (Administrador, Profesor, Alumno).
- **Módulo de Comunicación**: Avisos institucionales, notificaciones y anuncios centralizados.

El proyecto está desarrollado bajo la filosofía **Vanilla Web**, garantizando alta velocidad de carga, cero dependencias complejas de construcción y máxima portabilidad.

---

## 🛠️ Tecnologías Empleadas

La plataforma está construida utilizando estándares web nativos:

| Tecnología | Descripción |
| :--- | :--- |
| **HTML5** | Estructura semántica, accesible y compatible con estándares web modernos. |
| **CSS3** | Estilos personalizados, diseño adaptativo (*responsive design*), CSS Grid y Flexbox. |
| **JavaScript (ES6+)** | Lógica de la aplicación en Vanilla JS sin frameworks pesados para un rendimiento óptimo. |

---

## 🚀 Guía de Instalación y Uso Local

Sigue estos sencillos pasos para ejecutar el proyecto en tu entorno local.

### Requisitos Previos

Solo necesitas un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge o Safari). No requiere instalación de Node.js ni servidores de base de datos para la versión de prototipo.

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/aleexds/Intranet-Escolar.git
   ```

2. **Acceder al directorio del proyecto:**
   ```bash
   cd Intranet-Escolar
   ```

3. **Ejecutar el proyecto:**

   - **Opción A (Directa):** Abre el archivo `index.html` haciendo doble clic sobre él o arrastrándolo a tu navegador.
   - **Opción B (Servidor Local con VS Code Live Server):**
     1. Abre la carpeta del proyecto en VS Code.
     2. Haz clic derecho en `index.html` y selecciona **Open with Live Server**.
   - **Opción C (Python HTTP Server):**
     ```bash
     python -m http.server 8000
     ```
     Luego navega a `http://localhost:8000` en tu navegador.

---

## 📂 Estructura del Repositorio

```text
Intranet-Escolar/
├── docs/
│   ├── arquitectura.md     # Documentación técnica de arquitectura y diseño
│   └── requerimientos.md   # Especificación de requerimientos funcionales y no funcionales
├── index.html              # Punto de entrada principal de la aplicación
├── styles.css              # Hoja de estilos globales
├── app.js                  # Lógica JavaScript principal
├── README.md               # Portada e información general del proyecto
├── CLAUDE.md               # Memoria técnica y reglas de agente
├── CONTRIBUTING.md         # Guía de contribución y flujo de trabajo
└── CHANGELOG.md            # Historial de cambios y versiones
```

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

*Desarrollado con ❤️ para transformar la gestión educativa.*
