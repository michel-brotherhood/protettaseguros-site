

## Padronizar tamanhos dos logos - Seguradoras/Operadoras

Observando a imagem de referência e o código atual, os cards dos logos precisam de tamanhos mais uniformes e generosos para valorizar a UX.

### Mudanças

**`src/components/client/ClientSections.tsx` e `src/components/broker/BrokerSections.tsx`**

1. **Cards maiores e padronizados**: Aumentar o padding dos cards e fixar uma altura mínima consistente (`h-24` ou `min-h-[100px]`) com `aspect-[3/2]` mantido
2. **Logos maiores**: Trocar `max-h-10` por `max-h-12 w-[80%]` para que os logos ocupem mais espaço dentro do card de forma uniforme
3. **Gap e grid consistentes**: Manter grid `lg:grid-cols-6` mas aumentar o `gap` para `gap-5` para melhor respiro visual
4. **Texto fallback maior**: Aumentar de `text-xs` para `text-sm` nos nomes sem logo

Essas mudanças garantem que todos os cards tenham o mesmo tamanho visual e os logos fiquem proporcionais e bem centralizados, como na imagem de referência.

