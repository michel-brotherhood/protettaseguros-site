

## Plano: Vídeo de Fundo + Cards Simplificados na Página Inicial

### Fase 1: Adicionar vídeo de fundo

**Copiar** o arquivo `user-uploads://5294181_Cycling_Family_1280x720.mp4` para `src/assets/cycling-family.mp4`

**Substituir** no `src/pages/Index.tsx` toda a seção de background (gradientes, SVGs, imagem Unsplash) por um `<video>` fullscreen com:
- `autoPlay`, `muted`, `loop`, `playsInline`
- `object-cover` para preencher a tela
- Overlay escuro com gradiente para manter legibilidade do texto
- Remover imports de `useParallax` e constantes de parallax (não serão mais necessários)

### Fase 2: Simplificar os cards (Cliente e Corretor)

Redesign clean dos dois cards:

- **Remover** as badges/pills (B.I., Wellness, Consultoria, Suporte 24/7, Custo Zero, Treinamentos)
- **Remover** os efeitos de glow excessivos (`absolute -inset-4 bg-gradient-to-r...`)
- **Reduzir** o border-radius de `rounded-[2.5rem]` para `rounded-2xl`
- **Simplificar** o ícone: manter circular mas menor (w-16 h-16)
- **Manter** apenas: ícone, título, descrição curta e botão
- Cards com `bg-white/10 backdrop-blur-md border border-white/20` (vidro translúcido sobre o vídeo) em vez de `bg-white` sólido
- Texto em branco para combinar com o fundo escuro do vídeo
- Remover imports não utilizados (Shield, Heart, Users, Badge)

### Resultado Esperado

- Fundo: vídeo da família ciclando em loop, escurecido com overlay
- Cards: dois retângulos translúcidos, clean, com ícone + título + descrição + botão
- Totalmente responsivo (grid 1 col mobile, 2 cols desktop)
- Visual moderno e minimalista

