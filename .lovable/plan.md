

## Plan: Redesign Hub Inicial with Smaller Circles + Client Specialties & Insurance Partners

### 1. Reduce Circle Sizes
- Change from `w-44 h-44 sm:w-52 sm:h-52` to `w-36 h-36 sm:w-44 sm:h-44`
- Adjust icon size, font sizes, and padding proportionally

### 2. Add "Especialidades" Section Below Circles (Client-facing)
Display the list of insurance specialties in a compact, modern grid below the main circles, visible on the hub page. Items:
- Planos de Saúde e Odontológicos, Seguro de Vida e Previdência, Seguro Auto, Seguro Fiança, Seguro Viagem, Seguro Residencial, Seguro RC Profissional, Seguro Obras/Engenharia, Seguro Equipamentos Portáteis, Seguro de Incêndio, "entre outros"

Style: Small pills/tags or a compact grid with subtle icons, all in white/translucent over the dark background to maintain the modern aesthetic.

### 3. Add "Seguradoras/Operadoras" Carousel or Grid
Display the 33 insurance partner names in a scrolling marquee or compact logo grid. Since many already have logos in `src/assets/insurance-logos/`, we'll use those where available and show text-only badges for the rest.

Partners: Bradesco, Sulamerica, Porto Seguro, Amil, Omint, Care Plus, Assim Saúde, Select, Leve, Klini, Prevent Sênior, Medsênior, Hapvida, Integral Saúde, Ampla, Nova Saúde, Onmed, Ever Insurance, Cemeru, Samoc, Healthmed, Qualicorp, Supermed, Metlife, Mag Seguros, Tokio Marine, Mapfre, Suhai, HDI, Allianz, Assist Card, Sompo Seguros, Unimed Seguros.

### 4. Layout Structure (Index.tsx)
```text
┌──────────────────────────────┐
│  Logo + Badge + Title        │
│  Subtitle                    │
│                              │
│  [Cliente ○]    [Corretor ○] │  ← smaller circles
│                              │
│  ── Especialidades ────────  │  ← pill tags grid
│  Saúde │ Vida │ Auto │ ...   │
│                              │
│  ── Seguradoras ───────────  │  ← auto-scrolling marquee
│  [logo][logo][logo]...       │
│                              │
│  "Desde 2017..."             │
└──────────────────────────────┘
```

### 5. Technical Details
- All changes in `src/pages/Index.tsx`
- Import existing logos from `src/assets/insurance-logos/` for partners that have them
- For partners without existing logos (Care Plus, Select, Leve, Prevent Sênior, Medsênior, Integral Saúde, Ampla, Nova Saúde, Onmed, Ever Insurance, Cemeru, Samoc, Healthmed, Supermed, Metlife, Assist Card, Sompo Seguros, Unimed Seguros), display as styled text badges
- Marquee effect via CSS animation (translateX keyframes) for the insurance logos row
- Specialties displayed as small translucent pills in a flex-wrap layout
- Add necessary CSS keyframes to `src/index.css` if marquee animation doesn't already exist

