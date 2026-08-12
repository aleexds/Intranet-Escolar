# Intranet Escolar

Sistema de gestión escolar moderno, seguro y escalable.

## 🚀 Características Principales

- **Interfaz Moderna**: Diseño centrado en el usuario con temas claro/oscuro y navegación intuitiva.
- **Autenticación Segura**: Sistema de login con validaciones en tiempo real y protección contra brute force.
- **Gestión de Usuarios**: Múltiples roles (Administrador, Docente, Estudiante) con permisos diferenciados.
- **Gestión Académica**: Control de grados, grupos, materias y calificaciones.
- **Notificaciones**: Sistema de alertas y mensajes entre usuarios.
- **Portales Personalizados**: Vistas específicas para cada tipo de usuario.

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Estructura semántica.
- **CSS3**: Estilos modernos con variables y modo oscuro.
- **JavaScript (Vanilla)**: Lógica de negocio sin frameworks pesados.
- **Chart.js**: Visualización de datos y estadísticas.

### Backend & Base de Datos
- **PHP 8.0+**: Lógica del servidor.
- **MySQL/MariaDB**: Base de datos relacional.

## 🏁 Guía de Inicio Rápido

### Requisitos Previos
- Servidor web con PHP (Apache/Nginx).
- Extensión PDO y MySQL habilitadas en PHP.
- Base de datos MySQL/MariaDB.

### Instalación

1. **Clonar el repositorio** (o descargar los archivos).

2. **Configurar la base de datos**:
   - Crea una base de datos (ej. `intranet_escolar`).
   - Importa el script SQL:
     ```bash
     mysql -u root -p intranet_escolar < db.sql
     ```

3. **Configurar la conexión**:
   - Edita el archivo `config/database.php`:
     ```php
     define('DB_HOST', 'localhost');
     define('DB_NAME', 'intranet_escolar');
     define('DB_USER', 'tu_usuario');
     define('DB_PASS', 'tu_contraseña');
     ```

4. **Acceder al sistema**:
   - Abre `index.php` en tu navegador.
   - Usuario inicial: **admin** / Contraseña: **admin123**

## 📂 Estructura del Proyecto

```
intranet-escolar/
├── public/             # Archivos accesibles públicamente
│   ├── css/
│   ├── js/
│   └── images/
├── src/              # Código fuente de la aplicación
│   ├── controllers/  # Lógica de negocio
│   ├── models/       # Interacción con la BD
│   ├── views/        # Plantillas HTML
│   ├── services/     # Lógica de negocio específica
│   └── helpers/      # Funciones de utilidad
├── config/           # Archivos de configuración
│   ├── database.php
│   └── constants.php
├── db.sql            # Script de inicialización de la base de datos
├── README.md
└── .htaccess         # Configuración del servidor (Apache)
```

## 🎭 Roles Disponibles

| Rol | Descripción |
|-----|-------------|
| **Administrador** | Gestión total del sistema. |
| **Docente** | Gestión de clases y calificaciones. |
| **Estudiante** | Consulta de horarios y notas. |

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribuidores

- [Tu Nombre] - Arquitecto de Software

## 🤝 Contribuyendo

1. Haz un `fork` del proyecto.
2. Crea una `branch` para tu funcionalidad (`git checkout -b feature/AmazingFeature`).
3. Ejecuta `composer install` para instalar dependencias.
4. Commite tus cambios (`git commit -m 'Add some AmazingFeature'`).
5. Haz `push` a la rama (`git push origin feature/AmazingFeature`).
6. Abre un `Pull Request`.

## 📝 Notas de Desarrollo

- El sistema está diseñado para ser escalable. Se recomienda usar patrones de diseño como MVC (Model-View-Controller).
- Para futuras versiones, se planea implementar una API REST y migrar a un framework moderno como Laravel o Symfony.
