# Publicación en GitHub Pages

Repositorio público `REKOL08/aula-ejercicios-paso-a-paso`, rama `main`, carpeta raíz `/`. `.nojekyll` evita transformaciones Jekyll. No hay instalación de dependencias ni secretos.

La configuración inicial se realiza en Settings → Pages → Deploy from a branch → main → /(root), o mediante la API de GitHub con `source.branch=main`, `source.path=/` y `build_type=legacy`. Cada push actualiza la página a través del workflow Pages de GitHub.

Antes de subir cambios ejecuta las pruebas de docs/pruebas.md. Confirma que el build de Pages termine correctamente y que el sitio responda HTTP 200. La URL esperada es https://rekol08.github.io/aula-ejercicios-paso-a-paso/ . No confundir una configuración creada con una publicación terminada.

El sitio no necesita backend. Nunca coloques tokens ni datos privados en archivos públicos.
