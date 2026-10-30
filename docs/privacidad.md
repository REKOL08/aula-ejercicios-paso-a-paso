# Privacidad, precisión y límites

Solo se conserva el último ejercicio en localStorage bajo `aula-paso-a-paso-v1`. El almacenamiento no se cifra; cualquier persona con acceso al mismo navegador puede verlo. No introducir información personal sensible. Exportar genera un archivo JSON local. Importar lo valida antes de reemplazar los campos. Los archivos no se envían a servidores de aplicación.

No se incluye analítica, cookies propias, fuentes remotas, CDN, solicitudes API o IA. GitHub Pages puede registrar solicitudes de acceso bajo sus políticas. Borrar el sitio del navegador elimina su guardado. El botón Borrar solicita confirmación. Si localStorage no está disponible, se informa del fallo y el cálculo sigue disponible.

Se validan únicamente los cinco modelos del README. No hay chat, lectura de PDF, reconocimiento de enunciados, calificación de ensayos ni validación universal de tareas. No se validan unidades ni la corrección del planteamiento original. Las raíces complejas quedan fuera del alcance.

La comparación numérica admite error absoluto de `1e-6 * max(1, abs(resultado esperado))`. Se usa coma o punto decimal; no se admiten fracciones textuales. Los resultados mostrados usan nueve cifras significativas. Las decisiones algebraicas usan precisión Number de JavaScript. Casos extremos o mal condicionados pueden sufrir cancelación, subdesbordamiento o pérdida de precisión; la herramienta es un apoyo de aula, no cálculo simbólico de precisión arbitraria.
