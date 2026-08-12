# 🤝 Guía de Contribución - Intranet Escolar

¡Gracias por tu interés en contribuir a **Intranet Escolar**! Este documento proporciona una serie de directrices para asegurar un proceso de colaboración ordenado, transparente y eficiente.

---

## 📌 Guía de Colaboración

Para mantener la calidad y consistencia del proyecto, todos los colaboradores deben seguir estas pautas:

1. **Revisar Requerimientos**: Antes de comenzar a trabajar en una característica, revisa [docs/requerimientos.md](docs/requerimientos.md) e issues existentes.
2. **Código Limpio**: Escribe código semántico, bien formateado y libre de dependencias innecesarias.
3. **Documentación**: Si tu cambio afecta la interfaz o la arquitectura, actualiza la documentación pertinente en el directorio `docs/`.

---

## 🌿 Convención de Nombres de Ramas

Toda nueva funcionalidad, corrección o documentación debe trabajarse en una rama separada creada a partir de `main`.

Usa el siguiente patrón de nomenclatura: `<tipo>/<descripcion-corta>`

### Tipos Permitidos

| Tipo | Propósito | Ejemplo |
| :--- | :--- | :--- |
| `feature/` | Nueva funcionalidad o módulo. | `feature/login-autenticacion` |
| `fix/` | Corrección de errores o bugs. | `fix/error-calculo-promedio` |
| `docs/` | Cambios exclusivamente en la documentación. | `docs/actualizar-readme` |
| `style/` | Ajustes de formato, CSS o diseño visual. | `style/modo-oscuro-dashboard` |
| `refactor/` | Reestructuración de código sin cambiar funcionalidad. | `refactor/modularizar-app-js` |
| `chore/` | Tareas de mantenimiento o configuración. | `chore/actualizar-gitignore` |

---

## 📝 Formato de Commits (Conventional Commits)

Utilizamos la especificación de **[Conventional Commits](https://www.conventionalcommits.org/)** para mantener un historial de cambios legible y automatizable.

### Estructura del Mensaje de Commit

```text
<tipo>(<alcance opcional>): <descripción corta en presente o imperativo>

[cuerpo opcional explicativo]
```

### Ejemplos de Commits

- **Nuevas características:**
  ```text
  feat(autenticacion): agregar validacion de rol docente en formulario
  ```
- **Correcciones:**
  ```text
  fix(estilos): corregir desalineacion de tabla en vista movil
  ```
- **Documentación:**
  ```text
  docs: agregar guia de arquitectura en docs/arquitectura.md
  ```
- **Estilos / UI:**
  ```text
  style: aplicar variables CSS para paleta de colores institucional
  ```
- **Refactorización:**
  ```text
  refactor(js): separar utilidades de formato de fechas a helper independiente
  ```

---

## 🔄 Flujo de Pull Requests (PR)

Sigue estos pasos para proponer e integrar tus cambios al proyecto:

### 1. Preparación

1. Haz un **Fork** del repositorio (si no tienes acceso directo de escritura).
2. Clona el repositorio e instala/actualiza localmente:
   ```bash
   git checkout main
   git pull origin main
   ```
3. Crea tu rama de trabajo siguiendo las convenciones:
   ```bash
   git checkout -b feature/modulo-calificaciones
   ```

### 2. Desarrollo y Verificación

1. Implementa los cambios necesarios respetando los estándares de código.
2. Comprueba que no existan errores sintácticos ni visuales en el navegador.
3. Realiza commits frecuentes y bien estructurados.

### 3. Envío del Pull Request

1. Haz push de tu rama al repositorio remoto:
   ```bash
   git push origin feature/modulo-calificaciones
   ```
2. Abre un **Pull Request** hacia la rama `main` en GitHub.
3. Llena la plantilla del PR incluyendo:
   - **Descripción clara** de los cambios introducidos.
   - **Motivo** de la modificación o enlace al Issue correspondiente.
   - **Capturas de pantalla / GIF** si modificaste la interfaz de usuario.

### 4. Revisión de Código

- Tu PR será revisado por los mantenedores del proyecto.
- Si se solicitan cambios, realiza los ajustes en tu rama local y sube los nuevos commits.
- Una vez aprobado el PR, se realizará el merge a la rama `main`.

---

¡Gracias por hacer de **Intranet Escolar** un mejor sistema! 🚀
