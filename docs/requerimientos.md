# 📋 Especificación de Requerimientos - Intranet Escolar

Este documento detalla los requerimientos funcionales (RF) y no funcionales (RNF) del proyecto **Intranet Escolar**. Se utiliza la sintaxis de casillas de verificación de Markdown (`- [x]` para completados y `- [ ]` para pendientes/en desarrollo) para hacer seguimiento del progreso.

---

## 📌 Requerimientos Funcionales (RF)

### 1. Documentación e Infraestructura Inicial
- [x] **RF-1.1**: Definición del repositorio y estructura base de archivos (`index.html`, `styles.css`, `app.js`).
- [x] **RF-1.2**: Creación de la documentación general del proyecto (`README.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `CHANGELOG.md`).
- [x] **RF-1.3**: Elaboración de los documentos de arquitectura y requerimientos en el directorio `docs/`.

### 2. Autenticación y Control de Acceso
- [ ] **RF-2.1**: Formulario de inicio de sesión (*Login*) con validación de credenciales.
- [ ] **RF-2.2**: Gestión de sesiones de usuario (almacenamiento de sesión activa en `localStorage` / `sessionStorage`).
- [ ] **RF-2.3**: Soporte para roles de usuario: **Administrador**, **Docente** y **Estudiante**.
- [ ] **RF-2.4**: Función de cierre de sesión (*Logout*) con limpieza de estado.
- [ ] **RF-2.5**: Control de acceso a vistas según el rol autenticado.

### 3. Portal de Administrador
- [ ] **RF-3.1**: Panel de control (*Dashboard*) con métricas generales de la institución (total de alumnos, docentes, cursos).
- [ ] **RF-3.2**: Gestión de usuarios (Crear, Leer, Actualizar y Eliminar - CRUD de estudiantes y profesores).
- [ ] **RF-3.3**: Asignación de materias y grupos a docentes.
- [ ] **RF-3.4**: Configuración de periodos académicos y ciclos escolares.

### 4. Portal de Docente
- [ ] **RF-4.1**: Panel de control con lista de clases asignadas y accesos rápidos.
- [ ] **RF-4.2**: Módulo de capturas de calificaciones por grupo y materia.
- [ ] **RF-4.3**: Registro diario de asistencia de alumnos (Presente, Ausente, Justificado).
- [ ] **RF-4.4**: Publicación de avisos o tareas para sus grupos asignados.

### 5. Portal de Estudiante
- [ ] **RF-5.1**: Panel de bienvenida con resumen de promedio general y próximos avisos.
- [ ] **RF-5.2**: Consulta de boleta de calificaciones por periodo escolar.
- [ ] **RF-5.3**: Visualización de horario de clases semanal.
- [ ] **RF-5.4**: Registro de porcentaje de asistencia por materia.

### 6. Módulo de Avisos y Notificaciones
- [ ] **RF-6.1**: Tablón de anuncios institucionales visibles para todos los usuarios autenticados.
- [ ] **RF-6.2**: Notificaciones visuales de eventos importantes (ej. fechas de exámenes, suspensiones).

---

## 🔒 Requerimientos No Funcionales (RNF)

### 1. Rendimiento y Usabilidad
- [ ] **RNF-1.1**: La aplicación debe cargar en menos de 2 segundos en conexiones locales estándar.
- [ ] **RNF-1.2**: Interfaz adaptable (*Responsive Design*) compatible con dispositivos móviles, tablets y monitores de escritorio.
- [ ] **RNF-1.3**: Diseño intuitivo con paleta de colores armónica y tipografía legible conforme a estándares UX modern.

### 2. Compatibilidad y Portabilidad
- [ ] **RNF-2.1**: Funcionamiento correcto sin dependencias externas en navegadores modernos (Chrome, Firefox, Safari, Edge).
- [ ] **RNF-2.2**: Independencia de frameworks de JavaScript para garantizar ligereza y facilidad de mantenimiento.

### 3. Seguridad e Integridad
- [ ] **RNF-3.1**: Sanitización de entradas en formularios para prevenir inyección de código (XSS básico en frontend).
- [ ] **RNF-3.2**: Protección de rutas simuladas impidiendo navegación directa a paneles sin autenticación previa.

### 4. Mantenibilidad y Código
- [x] **RNF-4.1**: Código estructurado de forma modular facilitando la futura integración con una API REST o backend.
- [x] **RNF-4.2**: Uso de nombres de variables y funciones descriptivas con comentarios explicativos cuando sea necesario.
