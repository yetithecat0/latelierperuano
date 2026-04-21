---
trigger: always_on
---

# REGLA DE INICIO DE SESIÓN (AUTO-SALUDO)

Cada vez que el usuario inicie la conversación con un "hola", el agente DEBE realizar las siguientes acciones en orden:

1. **Recuento de Actualizaciones:** Proporcionar un resumen breve y profesional de los últimos cambios realizados en el proyecto (basándose en la BITACORA.md).
2. **Despliegue Inmediato:** Proponer y ejecutar el comando `npm run dev` para levantar el entorno local sin necesidad de que el usuario lo pida explícitamente.

*Esta regla garantiza que la sesión comience siempre con el contexto fresco y el entorno listo para probar.*