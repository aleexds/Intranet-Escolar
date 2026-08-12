# 📋 Especificación de Requerimientos - Intranet Escolar

Este documento detalla los requerimientos funcionales (RF) y no funcionales (RNF) del proyecto **Intranet Escolar**. Se utiliza la sintaxis de casillas de verificación de Markdown (`- [x]` para completados y `- [ ]` para pendientes/en desarrollo) para hacer seguimiento del progreso.

---

## 📌 Requerimientos Funcionales (RF)

### 1. Documentación e Infraestructura Inicial
- [x] **RF-1.1**: Definición del repositorio y estructura base de archivos (`index.html`, `styles.css`, `app.js`).
- [x] **RF-1.2**: Creación de la documentación general del proyecto (`README.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CHANGELOG.md`).
- [x] **RF-1.3**: Elaboración de los documentos de arquitectura y requerimientos en el directorio `docs/`.

### 2. Autenticación y Control de Acceso
- [x] **RF-2.1**: Formulario de inicio de sesión (*Login*) o selector dinámico de vista de rol con validación.
- [x] **RF-2.2**: Gestión de sesiones de usuario y persistencia de rol en `localStorage`.
- [x] **RF-2.3**: Soporte para roles de usuario: **Administrador**, **Docente** y **Estudiante / Familia**.
- [x] **RF-2.4**: Simulación de cambio de rol activo con actualización en tiempo real de la interfaz.
- [x] **RF-2.5**: Control de acceso a formularios y campos de edición según el rol autenticado.

### 3. Portal de Administrador
- [x] **RF-3.1**: Panel de control (*Dashboard*) con avisos, métricas y directorio general de usuarios.
- [x] **RF-3.2**: Gestión de usuarios (Alta de nuevos integrantes y cambio de estado Activo/Inactivo).
- [x] **RF-3.3**: Asignación de materias, grupos y publicación libre de comunicados.
- [x] **RF-3.4**: Configuración de periodos académicos y ciclo escolar en filtros.

### 4. Portal de Docente
- [x] **RF-4.1**: Panel de control con vista de asignaturas y avisos del colegio.
- [x] **RF-4.2**: Módulo de captura y modificación en línea de calificaciones por grupo y materia.
- [x] **RF-4.3**: Registro diario de porcentaje de asistencia de alumnos con campos de ajuste.
- [x] **RF-4.4**: Publicación de avisos o tareas dirigidos a la comunidad educativa.

### 5. Portal de Estudiante
- [x] **RF-5.1**: Panel de bienvenida con visualización del tablón de comunicados institucionales.
- [x] **RF-5.2**: Consulta de calificaciones por materia y periodo escolar en modo solo lectura.
- [x] **RF-5.3**: Visualización de promedio calculado y porcentaje de asistencia.
- [x] **RF-5.4**: Registro visual de estado de aprobación (*Aprobado/Reprobado*).

### 6. Módulo de Avisos y Notificaciones
- [x] **RF-6.1**: Tablón de anuncios institucionales dinámico visible para los usuarios autenticados.
- [x] **RF-6.2**: Notificaciones y tarjetas diferenciadas por categoría (*Urgente*, *Académico*, *General*).

---

## 🔒 Requerimientos No Funcionales (RNF)

### 1. Rendimiento y Usabilidad
- [x] **RNF-1.1**: Carga instantánea en navegadores locales sin dependencias de compilación pesadas.
- [x] **RNF-1.2**: Interfaz adaptable (*Responsive Design*) compatible con ordenadores, tablets y móviles.
- [x] **RNF-1.3**: Diseño intuitivo con paleta de colores armónica, tipografía legible y contraste elevado.

### 2. Compatibilidad y Portabilidad
- [x] **RNF-2.1**: Funcionamiento correcto en navegadores modernos (Chrome, Firefox, Safari, Edge).
- [x] **RNF-2.2**: Independencia total de frameworks de JavaScript (Vanilla JS ES6+).

### 3. Seguridad e Integridad
- [x] **RNF-3.1**: Sanitización de entradas en formularios (`escapeHTML()`) para prevenir inyección de código.
- [x] **RNF-3.2**: Persistencia segura en `localStorage` con estructuras en formato JSON validado.

### 4. Mantenibilidad y Código
- [x] **RNF-4.1**: Código estructurado de forma modular facilitando la futura integración con una API REST o backend.
- [x] **RNF-4.2**: Uso de nombres de variables descriptivos y comentarios explícitos en la lógica del cliente.
