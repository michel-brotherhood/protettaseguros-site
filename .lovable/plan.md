

## Findings

The **Especialidades** section does **not** exist on the client page at all. It was only added to the Broker page (`BrokerSections.tsx`). The client page header has an "Especialidades" menu item, but it incorrectly scrolls to the "diferenciais" section. The Seguradoras/Operadoras section also doesn't exist on the client page.

The broker page (`BrokerSections.tsx`) does have both sections with the correct data you provided (11 specialties + 33 insurance partners).

## Plan

### 1. Add Especialidades section to `ClientSections.tsx`
Add the 11 specialties as a styled grid with icons, placed after "O Que Fazemos" and before "Como Fazemos":
- Planos de Saúde e Odontológicos, Seguro de Vida e Previdência, Seguro Auto, Seguro Fiança, Seguro Viagem, Seguro Residencial, RC Profissional, Seguro Obras/Engenharia, Equipamentos Portáteis, Seguro de Incêndio, "entre outros"
- Section ID: `especialidades`

### 2. Add Seguradoras/Operadoras section to `ClientSections.tsx`
Add the 33 insurance partners as a logo grid (with text badges for those without logo assets), placed after Especialidades:
- Bradesco, Sulamerica, Porto Seguro, Amil, Omint, Care Plus, Assim Saúde, Select, Leve, Klini, Prevent Sênior, Medsênior, Hapvida, Integral Saúde, Ampla, Nova Saúde, Onmed, Ever Insurance, Cemeru, Samoc, Healthmed, Qualicorp, Supermed, Metlife, Mag Seguros, Tokio Marine, Mapfre, Suhai, HDI, Allianz, Assist Card, Sompo Seguros, Unimed Seguros
- Section ID: `seguradoras`
- Import existing logos from `src/assets/insurance-logos/`

### 3. Update Header (`Header.tsx`) - Client desktop nav
- Fix "Especialidades" button to scroll to `especialidades` (not `diferenciais`)
- Add "Seguradoras/Operadoras" menu item that scrolls to `seguradoras`

### 4. Update Header - Client mobile nav
- Add "Especialidades" and "Seguradoras/Operadoras" links in the mobile menu that scroll to the respective sections

