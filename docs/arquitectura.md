# Arquitectura

`index.html` contiene la interfaz accesible; `style.css` el diseño responsive; `app.mjs` los eventos, renderizado con textContent y almacenamiento; `logic.mjs` las funciones puras `solve`, `checkAnswer` y `validateBackup`. `ayuda.html` es la guía pública.

El flujo es: formulario → validación de entradas → solución determinista → comparación opcional → pasos y resultado → guardado local. Los archivos JSON se limitan a 100 KB y se normalizan al esquema versión 1. No se insertan datos de usuario como HTML.

No hay servidor de aplicación, paquetes ni compilación. GitHub Pages sirve los mismos archivos versionados desde main raíz. Todos los recursos usan rutas relativas para funcionar bajo el subdirectorio del repositorio.

JavaScript Number usa IEEE-754; determinantes y discriminantes se clasifican con cero exacto. Los coeficientes se limitan en magnitud a 10⁹, pero no se promete precisión arbitraria para casos mal condicionados o extremos. No se ejecutan expresiones libres.
