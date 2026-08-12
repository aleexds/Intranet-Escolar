/**
 * ==========================================================================
 * INTRANET ESCOLAR - LÓGICA DE INTERACTIVIDAD JAVASCRIPT (ES6+)
 * Centro Educativo San Martín v0.1.0
 * ==========================================================================
 */

// Keys para almacenamiento en localStorage
const STORAGE_KEYS = {
  COMUNICADOS: 'intranet_comunicados_v1',
  CALIFICACIONES: 'intranet_calificaciones_v1',
  USUARIOS: 'intranet_usuarios_v1',
  ROLE: 'intranet_active_role_v1'
};

// --------------------------------------------------------------------------
// 1. DATOS INICIALES POR DEFECTO (MOCK DATA)
// --------------------------------------------------------------------------
const DEFAULT_COMUNICADOS = [
  {
    id: 1,
    titulo: "Reunión General de Padres de Familia",
    categoria: "Urgente",
    destinatarios: "Todos",
    contenido: "Se convoca a todos los tutores a la asamblea informativa del primer trimestre este viernes a las 17:00 hrs en el auditorio principal.",
    autor: "Dirección Académica",
    fecha: "2026-08-12"
  },
  {
    id: 2,
    titulo: "Publicación de Horarios de Exámenes Parciales",
    categoria: "Académico",
    destinatarios: "Estudiantes",
    contenido: "Los horarios de las evaluaciones correspondientes al bloque 1 ya se encuentran disponibles en la sección de Calificaciones.",
    autor: "Coordinación de Estudios",
    fecha: "2026-08-10"
  },
  {
    id: 3,
    titulo: "Inscripciones para Talleres Extracurriculares",
    categoria: "General",
    destinatarios: "Todos",
    contenido: "Queda abierta la convocatoria para inscribirse a los clubes de Robótica, Ajedrez, Teatro y Baloncesto del ciclo escolar.",
    autor: "Departamento de Deportes y Cultura",
    fecha: "2026-08-08"
  }
];

const DEFAULT_CALIFICACIONES = [
  {
    id: "EST-001",
    estudiante: "Sofía Rodríguez Martínez",
    materia: "matematicas",
    materiaNombre: "Matemáticas Avanzadas",
    periodo: "1",
    grupo: "101",
    notaTrabajos: 9.5,
    notaExamen: 9.0,
    promedio: 9.25,
    asistencia: 96,
    estado: "Aprobado"
  },
  {
    id: "EST-002",
    estudiante: "Alejandro Gómez Silva",
    materia: "matematicas",
    materiaNombre: "Matemáticas Avanzadas",
    periodo: "1",
    grupo: "101",
    notaTrabajos: 8.0,
    notaExamen: 7.5,
    promedio: 7.75,
    asistencia: 90,
    estado: "Aprobado"
  },
  {
    id: "EST-003",
    estudiante: "Carlos Eduardo Méndez",
    materia: "matematicas",
    materiaNombre: "Matemáticas Avanzadas",
    periodo: "1",
    grupo: "101",
    notaTrabajos: 5.5,
    notaExamen: 5.0,
    promedio: 5.25,
    asistencia: 75,
    estado: "Reprobado"
  },
  {
    id: "EST-004",
    estudiante: "Mariana López Peralta",
    materia: "matematicas",
    materiaNombre: "Matemáticas Avanzadas",
    periodo: "1",
    grupo: "101",
    notaTrabajos: 10.0,
    notaExamen: 9.8,
    promedio: 9.90,
    asistencia: 100,
    estado: "Aprobado"
  }
];

const DEFAULT_USUARIOS = [
  {
    id: "USR-101",
    nombre: "Dra. Beatriz Fuentes Rivera",
    email: "beatriz.fuentes@sanmartin.edu",
    rol: "admin",
    rolNombre: "Administrador",
    estado: "Activo"
  },
  {
    id: "USR-102",
    nombre: "Prof. Roberto Martínez Castro",
    email: "roberto.martinez@sanmartin.edu",
    rol: "docente",
    rolNombre: "Docente",
    estado: "Activo"
  },
  {
    id: "USR-103",
    nombre: "Sofía Rodríguez Martínez",
    email: "sofia.rodriguez@sanmartin.edu",
    rol: "estudiante",
    rolNombre: "Estudiante",
    estado: "Activo"
  }
];

// --------------------------------------------------------------------------
// 2. ESTADO DE LA APLICACIÓN
// --------------------------------------------------------------------------
const state = {
  activeRole: 'estudiante', // 'admin' | 'docente' | 'estudiante'
  activeSection: 'comunicados-section',
  comunicados: [],
  calificaciones: [],
  usuarios: []
};

// --------------------------------------------------------------------------
// 3. FUNCIONES DE PERSISTENCIA (LOCALSTORAGE)
// --------------------------------------------------------------------------
function loadState() {
  try {
    const savedRole = localStorage.getItem(STORAGE_KEYS.ROLE);
    if (savedRole) state.activeRole = savedRole;

    const savedComunicados = localStorage.getItem(STORAGE_KEYS.COMUNICADOS);
    state.comunicados = savedComunicados ? JSON.parse(savedComunicados) : [...DEFAULT_COMUNICADOS];

    const savedCalificaciones = localStorage.getItem(STORAGE_KEYS.CALIFICACIONES);
    state.calificaciones = savedCalificaciones ? JSON.parse(savedCalificaciones) : [...DEFAULT_CALIFICACIONES];

    const savedUsuarios = localStorage.getItem(STORAGE_KEYS.USUARIOS);
    state.usuarios = savedUsuarios ? JSON.parse(savedUsuarios) : [...DEFAULT_USUARIOS];
  } catch (error) {
    console.error("Error al cargar localStorage, usando valores por defecto:", error);
    state.comunicados = [...DEFAULT_COMUNICADOS];
    state.calificaciones = [...DEFAULT_CALIFICACIONES];
    state.usuarios = [...DEFAULT_USUARIOS];
  }
}

function saveState(key) {
  try {
    if (!key || key === STORAGE_KEYS.ROLE) {
      localStorage.setItem(STORAGE_KEYS.ROLE, state.activeRole);
    }
    if (!key || key === STORAGE_KEYS.COMUNICADOS) {
      localStorage.setItem(STORAGE_KEYS.COMUNICADOS, JSON.stringify(state.comunicados));
    }
    if (!key || key === STORAGE_KEYS.CALIFICACIONES) {
      localStorage.setItem(STORAGE_KEYS.CALIFICACIONES, JSON.stringify(state.calificaciones));
    }
    if (!key || key === STORAGE_KEYS.USUARIOS) {
      localStorage.setItem(STORAGE_KEYS.USUARIOS, JSON.stringify(state.usuarios));
    }
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
}

// --------------------------------------------------------------------------
// 4. MÓDULO DE CAMBIO DE ROL Y PERMISOS
// --------------------------------------------------------------------------
function setupRoleSelector() {
  const roleSelect = document.getElementById('role-select');
  if (!roleSelect) return;

  roleSelect.value = state.activeRole;

  roleSelect.addEventListener('change', (e) => {
    state.activeRole = e.target.value;
    saveState(STORAGE_KEYS.ROLE);
    applyRolePermissions();
    renderComunicados();
    renderCalificaciones();
    renderUsuarios();
  });

  applyRolePermissions();
}

function applyRolePermissions() {
  const publishNoticeContainer = document.getElementById('publish-notice-container');
  const userFormCard = document.querySelector('#usuarios-section .form-card');
  const userRoleSelect = document.getElementById('user-role');

  // Ajustes de interfaz según rol activo
  if (state.activeRole === 'estudiante') {
    // Estudiante: Ocultar formularios de creación
    if (publishNoticeContainer) publishNoticeContainer.style.display = 'none';
    if (userFormCard) userFormCard.style.display = 'none';
  } else if (state.activeRole === 'docente') {
    // Docente: Puede publicar avisos, ver/editar notas, pero no crear admins
    if (publishNoticeContainer) publishNoticeContainer.style.display = 'block';
    if (userFormCard) userFormCard.style.display = 'block';
    if (userRoleSelect) {
      Array.from(userRoleSelect.options).forEach(opt => {
        opt.disabled = opt.value === 'admin';
      });
    }
  } else if (state.activeRole === 'admin') {
    // Administrador: Todos los permisos habilitados
    if (publishNoticeContainer) publishNoticeContainer.style.display = 'block';
    if (userFormCard) userFormCard.style.display = 'block';
    if (userRoleSelect) {
      Array.from(userRoleSelect.options).forEach(opt => opt.disabled = false);
    }
  }
}

// --------------------------------------------------------------------------
// 5. NAVEGACIÓN ENTRE SECCIONES
// --------------------------------------------------------------------------
function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSectionId = btn.getAttribute('data-section');
      if (!targetSectionId) return;

      // Actualizar estado de navegación
      navButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Alternar visibilidad de secciones
      sections.forEach(sec => {
        if (sec.id === targetSectionId) {
          sec.classList.add('active-section');
          sec.removeAttribute('hidden');
        } else {
          sec.classList.remove('active-section');
          sec.setAttribute('hidden', 'true');
        }
      });

      state.activeSection = targetSectionId;
    });
  });
}

// --------------------------------------------------------------------------
// 6. MÓDULO DE COMUNICADOS
// --------------------------------------------------------------------------
function renderComunicados() {
  const noticeBoard = document.getElementById('notice-board');
  if (!noticeBoard) return;

  noticeBoard.innerHTML = '';

  if (state.comunicados.length === 0) {
    noticeBoard.innerHTML = `<p class="notice-card-text">No hay comunicados publicados actualmente.</p>`;
    return;
  }

  state.comunicados.forEach(c => {
    let badgeClass = 'badge-info';
    let isUrgentClass = '';
    
    if (c.categoria === 'Urgente') {
      badgeClass = 'badge-danger';
      isUrgentClass = 'urgent';
    } else if (c.categoria === 'General') {
      badgeClass = 'badge-success';
    }

    const cardHTML = `
      <article class="card notice-card ${isUrgentClass}">
        <div class="card-header">
          <span class="badge ${badgeClass}">${escapeHTML(c.categoria)}</span>
          <time datetime="${c.fecha}">${formatDate(c.fecha)}</time>
        </div>
        <h3 class="notice-card-title">${escapeHTML(c.titulo)}</h3>
        <p class="notice-card-text">${escapeHTML(c.contenido)}</p>
        <div class="notice-card-footer">
          <span class="author">Por: ${escapeHTML(c.autor)}</span>
        </div>
      </article>
    `;
    noticeBoard.insertAdjacentHTML('beforeend', cardHTML);
  });
}

function setupComunicadosForm() {
  const formAviso = document.getElementById('form-publicar-aviso');
  if (!formAviso) return;

  formAviso.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('notice-title');
    const categorySelect = document.getElementById('notice-category');
    const targetSelect = document.getElementById('notice-target');
    const contentTextarea = document.getElementById('notice-content');

    if (!titleInput.value.trim() || !contentTextarea.value.trim()) {
      alert("Por favor complete todos los campos obligatorios del aviso.");
      return;
    }

    const newComunicado = {
      id: Date.now(),
      titulo: titleInput.value.trim(),
      categoria: categorySelect.value,
      destinatarios: targetSelect.value,
      contenido: contentTextarea.value.trim(),
      autor: state.activeRole === 'admin' ? 'Dirección General' : 'Profesor de Asignatura',
      fecha: new Date().toISOString().split('T')[0]
    };

    state.comunicados.unshift(newComunicado);
    saveState(STORAGE_KEYS.COMUNICADOS);
    renderComunicados();

    formAviso.reset();
  });
}

// --------------------------------------------------------------------------
// 7. MÓDULO DE CALIFICACIONES Y ASISTENCIA
// --------------------------------------------------------------------------
function renderCalificaciones() {
  const tbody = document.querySelector('#calificaciones-section .data-table tbody');
  if (!tbody) return;

  const filterPeriodo = document.getElementById('filter-periodo')?.value || '1';
  const filterMateria = document.getElementById('filter-materia')?.value || 'matematicas';
  const filterGrupo = document.getElementById('filter-grupo')?.value || '101';

  tbody.innerHTML = '';

  const filteredData = state.calificaciones.filter(c => {
    return (!filterPeriodo || c.periodo === filterPeriodo) &&
           (!filterMateria || c.materia === filterMateria) &&
           (!filterGrupo || c.grupo === filterGrupo);
  });

  if (filteredData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">No hay registros de calificaciones para los filtros seleccionados.</td></tr>`;
    return;
  }

  const isEditable = (state.activeRole === 'admin' || state.activeRole === 'docente');

  filteredData.forEach(item => {
    const statusClass = item.promedio >= 6.0 ? 'status-approved' : 'status-reprobated';
    const estadoTexto = item.promedio >= 6.0 ? 'Aprobado' : 'Reprobado';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHTML(item.id)}</td>
      <td><strong>${escapeHTML(item.estudiante)}</strong></td>
      <td>${escapeHTML(item.materiaNombre)}</td>
      <td>
        ${isEditable ? 
          `<input type="number" class="grade-input" data-id="${item.id}" data-type="notaTrabajos" min="0" max="10" step="0.1" value="${item.notaTrabajos}">` : 
          item.notaTrabajos.toFixed(1)}
      </td>
      <td>
        ${isEditable ? 
          `<input type="number" class="grade-input" data-id="${item.id}" data-type="notaExamen" min="0" max="10" step="0.1" value="${item.notaExamen}">` : 
          item.notaExamen.toFixed(1)}
      </td>
      <td><strong class="promedio-val">${item.promedio.toFixed(2)}</strong></td>
      <td>
        ${isEditable ? 
          `<input type="number" class="grade-input" data-id="${item.id}" data-type="asistencia" min="0" max="100" step="1" value="${item.asistencia}">%` : 
          `${item.asistencia}%`}
      </td>
      <td><span class="status-pill ${statusClass}">${estadoTexto}</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Listeners para edición de notas en línea
  if (isEditable) {
    tbody.querySelectorAll('.grade-input').forEach(input => {
      input.addEventListener('change', handleGradeInputChange);
    });
  }
}

function handleGradeInputChange(e) {
  const id = e.target.getAttribute('data-id');
  const type = e.target.getAttribute('data-type');
  const newValue = parseFloat(e.target.value);

  if (isNaN(newValue)) return;

  const itemIndex = state.calificaciones.findIndex(c => c.id === id);
  if (itemIndex !== -1) {
    state.calificaciones[itemIndex][type] = newValue;
    
    // Recalcular promedio (50% trabajos, 50% examen)
    const t = state.calificaciones[itemIndex].notaTrabajos;
    const ex = state.calificaciones[itemIndex].notaExamen;
    const prom = (t + ex) / 2;
    state.calificaciones[itemIndex].promedio = parseFloat(prom.toFixed(2));
    state.calificaciones[itemIndex].estado = prom >= 6.0 ? "Aprobado" : "Reprobado";

    saveState(STORAGE_KEYS.CALIFICACIONES);
    renderCalificaciones();
  }
}

function setupCalificacionesFilters() {
  ['filter-periodo', 'filter-materia', 'filter-grupo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', renderCalificaciones);
    }
  });
}

// --------------------------------------------------------------------------
// 8. MÓDULO DE GESTIÓN DE USUARIOS
// --------------------------------------------------------------------------
function renderUsuarios() {
  const tbody = document.querySelector('#usuarios-section .data-table tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  state.usuarios.forEach(u => {
    let roleClass = 'role-estudiante';
    let roleName = 'Estudiante';

    if (u.rol === 'admin') {
      roleClass = 'role-admin';
      roleName = 'Administrador';
    } else if (u.rol === 'docente') {
      roleClass = 'role-docente';
      roleName = 'Docente';
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHTML(u.id)}</td>
      <td><strong>${escapeHTML(u.nombre)}</strong></td>
      <td>${escapeHTML(u.email)}</td>
      <td><span class="role-badge ${roleClass}">${roleName}</span></td>
      <td><span class="status-pill status-active">${escapeHTML(u.estado)}</span></td>
      <td>
        <button class="btn btn-sm btn-secondary btn-toggle-status" data-id="${u.id}">
          ${u.estado === 'Activo' ? 'Desactivar' : 'Activar'}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.btn-toggle-status').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const uid = e.target.getAttribute('data-id');
      const usr = state.usuarios.find(x => x.id === uid);
      if (usr) {
        usr.estado = usr.estado === 'Activo' ? 'Inactivo' : 'Activo';
        saveState(STORAGE_KEYS.USUARIOS);
        renderUsuarios();
      }
    });
  });
}

function setupUsuariosForm() {
  const formUser = document.getElementById('form-registrar-usuario');
  if (!formUser) return;

  formUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user-fullname');
    const emailInput = document.getElementById('user-email');
    const roleSelect = document.getElementById('user-role');
    const statusSelect = document.getElementById('user-status');

    if (!nameInput.value.trim() || !emailInput.value.trim()) {
      alert("Por favor complete el nombre y correo del usuario.");
      return;
    }

    const newId = `USR-${Math.floor(100 + Math.random() * 900)}`;
    const newUser = {
      id: newId,
      nombre: nameInput.value.trim(),
      email: emailInput.value.trim(),
      rol: roleSelect.value,
      estado: statusSelect.value === 'activo' ? 'Activo' : 'Inactivo'
    };

    state.usuarios.push(newUser);
    saveState(STORAGE_KEYS.USUARIOS);
    renderUsuarios();

    formUser.reset();
  });
}

// --------------------------------------------------------------------------
// 9. FUNCIONES DE UTILIDAD Y SANITIZACIÓN
// --------------------------------------------------------------------------
function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function formatDate(dateString) {
  if (!dateString) return '';
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  return dateString;
}

// --------------------------------------------------------------------------
// 10. INICIALIZACIÓN DE LA APLICACIÓN
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupRoleSelector();
  setupNavigation();
  setupComunicadosForm();
  setupCalificacionesFilters();
  setupUsuariosForm();

  // Renderizado inicial de vistas
  renderComunicados();
  renderCalificaciones();
  renderUsuarios();
});
