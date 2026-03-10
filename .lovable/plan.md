

## Plan: Remove Specialties/Partners from Hub + Update Broker Page

### What's wrong
The Especialidades and Seguradoras sections were incorrectly added to the Hub (Index.tsx). They belong on the **Broker page** (`BrokerSections.tsx`), not the landing hub.

### Changes

#### 1. Clean up Index.tsx (Hub)
- Remove the `specialties` array, `insurancePartners` array, and `marqueeItems`
- Remove all insurance logo imports
- Remove unused icon imports (Heart, Car, Home, Plane, Shield, HardHat, Smartphone, Flame, FileText, Briefcase)
- Remove the "Especialidades" pills section (lines 151-165)
- Remove the "Seguradoras & Operadoras" marquee section (lines 167-196)
- Keep only: Logo, Badge, Title, Subtitle, Two circles, "Desde 2017" footer

#### 2. Update BrokerSections.tsx with the new data
The broker page already has a "Seguradoras Parceiras" section with 40 logos. Compare and update with the user's list of 33 partners. The user's list includes partners not currently in the broker section (Care Plus, Select, Leve, Prevent Senior, Medsenir, Integral Saude, Ampla, Nova Saude, Onmed, Ever Insurance, Cemeru, Samoc, Healthmed, Supermed, Metlife, Assist Card, Sompo Seguros, Unimed Seguros). These will be added as text badges since no logos exist for them.

Add a new **Especialidades** section to BrokerSections with the 11 items as a styled grid/pills, placed logically (e.g., before or after the existing "Seguradoras Parceiras" section).

#### 3. Also remove marquee CSS if no longer needed
Clean up the `animate-marquee` keyframes from `src/index.css` if nothing else uses them.

