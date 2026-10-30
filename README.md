# Aula Paso a Paso

Herramienta universitaria abierta de consulta y validación de ejercicios de matemáticas. Abre la página, elige un modelo y revisa el procedimiento sin instalar software ni crear una cuenta.

**Usar:** https://rekol08.github.io/aula-ejercicios-paso-a-paso/

**Guía:** [ayuda.html](ayuda.html). **Documentación:** [arquitectura](docs/arquitectura.md), [uso](docs/uso.md), [pruebas](docs/pruebas.md), [publicación](docs/publicacion.md), [privacidad y límites](docs/privacidad.md).

## Cobertura

- Ecuaciones lineales; casos sin solución o con infinitas soluciones.
- Cuadráticas con raíces reales; reducción a lineal cuando a = 0.
- Regla de tres directa con valores no nulos.
- Porcentajes.
- Sistemas 2×2, incluidos casos singulares.
- Comparación de respuestas numéricas con tolerancia y explicación paso a paso.
- Guardado local, importación y exportación de respaldo JSON validado.

No interpreta preguntas libres ni valida todas las disciplinas. No utiliza IA generativa ni requiere API, backend, cuenta, CDN o pago. El sitio es estático y responsive. La guía pública explica precisión, formato y alcance.

## Desarrollo

No hay paso de compilación. Para trabajar localmente, un servidor estático como `python -m http.server 8000` sirve los módulos ES; después abre http://localhost:8000. Esta instrucción es para desarrollo: los usuarios finales solo abren GitHub Pages.

Pruebas: `node --test tests/logic.test.mjs`. Agente especialista definido en [AGENTS.md](AGENTS.md). Licencia [MIT](LICENSE).
