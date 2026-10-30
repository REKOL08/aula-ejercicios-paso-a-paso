export const specs={linear:{name:'Ecuación lineal',formula:'a·x + b = c',fields:[['a','Coeficiente a',2],['b','Término b',3],['c','Resultado c',11]]},quadratic:{name:'Ecuación cuadrática',formula:'a·x² + b·x + c = 0',fields:[['a','Coeficiente a',1],['b','Coeficiente b',-5],['c','Término c',6]]},proportion:{name:'Regla de tres directa',formula:'a / b = c / x',fields:[['a','Valor de referencia a',4],['b','Correspondencia b',10],['c','Nuevo valor c',6]]},percent:{name:'Porcentaje de una cantidad',formula:'x = cantidad × porcentaje / 100',fields:[['a','Cantidad',200],['b','Porcentaje',15]]},system:{name:'Sistema de dos ecuaciones',formula:'a·x + b·y = c ; d·x + e·y = f',fields:[['a','Coeficiente a',2],['b','Coeficiente b',1],['c','Resultado c',7],['d','Coeficiente d',1],['e','Coeficiente e',-1],['f','Resultado f',2]]}};
const fmt=n=>Number.isInteger(n)?String(n):Number(n.toPrecision(9)).toString();
export function solve(type,values){
 const spec=specs[type];if(!spec)throw new Error('Tipo de ejercicio no admitido.');
 for(const [key]of spec.fields)if(!Number.isFinite(values?.[key])||Math.abs(values[key])>1e9)throw new Error('Completa todos los coeficientes con números finitos entre −1 000 000 000 y 1 000 000 000.');
 const {a,b,c,d,e,f}=values;let steps=[],answers=[],status='unique';
 if(type==='linear'){
 steps=[`Partimos de ${fmt(a)}·x + (${fmt(b)}) = ${fmt(c)}.`,`Restamos ${fmt(b)} a ambos lados: ${fmt(a)}·x = ${fmt(c-b)}.`];
 if(a===0){status=c===b?'infinite':'none';steps.push(c===b?'La igualdad es verdadera para cualquier x. Hay infinitas soluciones.':'La igualdad es falsa: no existe solución.');}else{answers=[(c-b)/a];steps.push(`Dividimos entre ${fmt(a)}: x = ${fmt(answers[0])}.`,`Comprobación: ${fmt(a)} × ${fmt(answers[0])} + (${fmt(b)}) = ${fmt(a*answers[0]+b)}.`);}
 }else if(type==='quadratic'){
 if(a===0){const result=solve('linear',{a:b,b:c,c:0});return {...result,steps:['Como a = 0, la expresión se reduce a una ecuación lineal.',...result.steps]};}
 const delta=b*b-4*a*c;steps=[`Identificamos a = ${fmt(a)}, b = ${fmt(b)}, c = ${fmt(c)}.`,`Discriminante Δ = b² − 4ac = ${fmt(delta)}.`];
 if(delta<0){status='none';steps.push('Δ < 0: no hay raíces reales. Esta herramienta trabaja en los números reales.');}else{const root=Math.sqrt(delta);answers=delta===0?[-b/(2*a)]:[(-b-root)/(2*a),(-b+root)/(2*a)].sort((x,y)=>x-y);steps.push('Aplicamos x = (−b ± √Δ) / (2a).',`Sustituimos: x = (${fmt(-b)} ± ${fmt(root)}) / ${fmt(2*a)}.`,`Raíces reales: ${answers.map(fmt).join(' y ')}.`);}
 }else if(type==='proportion'){
 if(a===0||b===0||c===0)throw new Error('En esta forma de proporción a, b y c deben ser distintos de cero para evitar divisiones indefinidas.');
 answers=[b*c/a];steps=[`Planteamos ${fmt(a)} / ${fmt(b)} = ${fmt(c)} / x.`,`Multiplicamos en cruz: ${fmt(a)}·x = ${fmt(b)} × ${fmt(c)} = ${fmt(b*c)}.`,`Dividimos entre ${fmt(a)}: x = ${fmt(answers[0])}.`];
 }else if(type==='percent'){
 answers=[a*b/100];steps=[`Convertimos ${fmt(b)} % a decimal: ${fmt(b)} / 100 = ${fmt(b/100)}.`,`Multiplicamos la cantidad: ${fmt(a)} × ${fmt(b/100)}.`,`Resultado: x = ${fmt(answers[0])}.`];
 }else{
 const det=a*e-b*d;steps=[`Sistema: ${fmt(a)}·x + (${fmt(b)})·y = ${fmt(c)}; ${fmt(d)}·x + (${fmt(e)})·y = ${fmt(f)}.`,`Determinante D = a·e − b·d = ${fmt(det)}.`];
 if(det===0){const zeroInconsistent=(a===0&&b===0&&c!==0)||(d===0&&e===0&&f!==0);const consistent=!zeroInconsistent&&a*f===c*d&&b*f===c*e;status=consistent?'infinite':'none';steps.push(consistent?'Las ecuaciones son compatibles y dependientes: hay infinitas soluciones.':'Las ecuaciones son incompatibles: no hay solución.');}
 else{const dx=c*e-b*f,dy=a*f-c*d;answers=[dx/det,dy/det];steps.push(`Regla de Cramer: Dx = c·e − b·f = ${fmt(dx)}; Dy = a·f − c·d = ${fmt(dy)}.`,`x = Dx / D = ${fmt(answers[0])}; y = Dy / D = ${fmt(answers[1])}.`,`Comprobación: primera ecuación = ${fmt(a*answers[0]+b*answers[1])}; segunda = ${fmt(d*answers[0]+e*answers[1])}.`);}
 }
 if(answers.some(n=>!Number.isFinite(n)))throw new Error('El resultado excede la precisión numérica disponible. Usa coeficientes de magnitud moderada.');
 const summary=status==='none'?'Sin solución real':status==='infinite'?'Infinitas soluciones':type==='system'?`x = ${fmt(answers[0])} · y = ${fmt(answers[1])}`:answers.map(n=>`x = ${fmt(n)}`).join(' · ');
 return {type,status,answers,steps,summary};
}
export function checkAnswer(result,text){
 const input=text.trim().toLowerCase();if(!input)return {ok:null,message:'Escribe tu respuesta para compararla.'};
 if(result.status!=='unique'){const ok=result.status==='none'?['sin solución','sin solucion','ninguna'].includes(input):['infinitas','infinitas soluciones'].includes(input);return {ok,message:ok?'Tu clasificación es correcta.':`Revisa el procedimiento. La respuesta es: ${result.summary.toLowerCase()}.`};}
 const parts=input.split(';').map(s=>s.trim());if(parts.some(s=>!/^[-+]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[-+]?\d+)?$/i.test(s)))throw new Error('Usa números decimales. Separa las respuestas con punto y coma (;).');
 let supplied=parts.map(s=>Number(s.replace(',','.')));if(supplied.some(n=>!Number.isFinite(n)))throw new Error('La respuesta debe contener números finitos.');
 let expected=[...result.answers];if(result.type==='quadratic'){supplied.sort((a,b)=>a-b);expected.sort((a,b)=>a-b);}
 const ok=supplied.length===expected.length&&supplied.every((n,i)=>Math.abs(n-expected[i])<=1e-6*Math.max(1,Math.abs(expected[i])));
 return {ok,message:ok?'¡Coincide! Tu respuesta está dentro de la tolerancia de cálculo.':'Aún no coincide. Revisa signos, operaciones y todas las soluciones del procedimiento.'};
}
export function validateBackup(data){if(!data||data.version!==1||!specs[data.type]||typeof data.answer!=='string'||data.answer.length>300)throw new Error('El respaldo no tiene el formato esperado.');solve(data.type,data.values);return {version:1,type:data.type,values:Object.fromEntries(specs[data.type].fields.map(([key])=>[key,data.values[key]])),answer:data.answer};}
