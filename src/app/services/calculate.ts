import { Injectable } from '@angular/core';

/**
 * Serviço responsável por executar operações matemáticas
 * Fornecido globalmente na aplicação através do provedor 'root'
 */
@Injectable({
  providedIn: 'root',
})
export class Calculate {
  /**
   * Avalia uma expressão matemática e retorna o resultado
   * @param expression - String contendo a expressão matemática (ex: "2+2*3")
   * @returns String com o resultado da operação ou '0' em caso de erro
   */
  evaluate(expression: string): string {
    // Remove todos os espaços em branco da expressão
    const expr = expression?.replace(/\s+/g, '');

    /**
     * Valida se a string contém APENAS números e operadores válidos
     * Operadores permitidos: + (adição), - (subtração), * (multiplicação), / (divisão), . (ponto decimal)
     * Se contiver caracteres inválidos ou estiver vazia, retorna '0'
     */
    if (!expr || /[^0-9+\-*/.]/.test(expr)) {
      return '0';
    }

    try {
      /**
       * Executa a expressão matemática de forma segura
       * Como a string foi rigorosamente sanitizada acima (validando caracteres),
       * o uso de Function é seguro e evita problemas de injeção de código
       * Exemplo: "2+2*3" resultará em 8
       */
      const result = Function(`return ${expr}`)();
      
      /**
       * Verifica se o resultado é um número finito válido
       * Se for válido, converte para string; caso contrário retorna '0'
       * Isso evita resultados como Infinity, NaN ou undefined
       */
      return Number.isFinite(result) ? String(result) : '0';
    } catch {
      // Se ocorrer qualquer erro durante a execução, retorna '0'
      return '0';
    }
  }
}
