---
trigger: always_on
---

# POLÍTICA DE DOCUMENTACIÓN OBLIGATORIA (BITÁCORA)

## 🎯 Objetivo
Garantizar la trazabilidad absoluta de cada decisión técnica, arquitectónica y estética tomada durante el desarrollo del proyecto ATI (Alphas Tool Interactive).

## 📜 Reglas de Ejecución
1.  **Sincronización Inmediata**: Antes de responder a cualquier solicitud del usuario que haya implicado una modificación de código, creación de archivos o corrección de errores, el agente DEBE actualizar obligatoriamente el archivo `BITACORA.md`.
2.  **Protocolo de Escritura**:
    *   Primero se ejecutan los cambios técnicos.
    *   Inmediatamente después, se registra el nuevo [PASO X].
    *   Cada paso debe detallar: **Acción Realizada**, **Justificación Técnica / UX** e **Incidentes/Hotfixes** (si los hubo).
3.  **Validación Anti-Regresión**: Antes de aplicar cualquier edición de código, el agente DEBE consultar la sección `🚨 Registro de Incidentes Técnicos` en `BITACORA.md`. Es obligatorio asegurar que el nuevo código no reintroduzca errores conocidos (ej. falta de 'use client', etiquetas JSX huérfanas o estados incompletos).
4.  **Auditoría UX/UI Obligatoria**: Antes de finalizar cualquier modificación visual o de layout, el agente debe realizar un "Stress Test Visual" mental confirmando:
    *   **Contención**: Ningún elemento (texto, etiqueta, input) desborda su marco.
    *   **Visibilidad**: Componentes flotantes (modales, hover-cards) son 100% visibles incluso en los bordes de la pantalla.
    *   **Accesibilidad**: Botones de acción siempre dentro del área táctil y nunca ocultos por scroll o clipping.
    *   **Consistencia**: Respeto absoluto a los tokens de diseño (radios de 16px, espaciado negativo, sombras tenues).
5.  **Optimización y Refactorización con Consentimiento**: El agente debe identificar de forma proactiva oportunidades para eliminar código redundante o mejorar el rendimiento. No obstante, **ES OBLIGATORIO informar al usuario sobre la mejora propuesta y esperar su autorización explícita** antes de aplicarla. El usuario tiene la potestad de aprobar la ejecución inmediata o posponerla para evitar interrupciones en el flujo de desarrollo actual.
6.  **Integridad de Datos e Historial**: Toda incidencia o error en tiempo de ejecución debe ser registrado con su causa raíz y solución aplicada en la sección de Incidentes. Esto sirve como base para la Regla #3 (Anti-Regresión).
7.  **Condición de Cierre y Verificación**: La tarea NO se considera finalizada ni se debe confirmar éxito hasta que:
    *   La bitácora esté físicamente actualizada.
    *   Se haya realizado la auditoría visual y técnica.
    *   Se confirme explícitamente al usuario que se han seguido estas reglas.

## ⚠️ Consecuencia
Cualquier respuesta que confirme un cambio técnico sin su correspondiente entrada en la bitácora será considerada un error procedimental grave del agente.
