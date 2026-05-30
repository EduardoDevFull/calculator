import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculate {
 evaluate(expression: string): string {
  const expr = expression?.replace(/\s+/g, '');

  // Valida se a string contém APENAS números e operadores válidos (+, -, *, /, .)
  if (!expr || /[^0-9+\-*/.]/.test(expr)) {
    return '0';
  }

  try {
    // Como a string foi sanitizada rigidamente acima, o uso do Function se torna seguro
    const result = Function(`return ${expr}`)();
    return Number.isFinite(result) ? String(result) : '0';
  } catch {
    return '0';
  }
}
}
