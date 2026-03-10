

## Plan: Add Icatu to Insurance Partners

Both `ClientSections.tsx` and `BrokerSections.tsx` currently have 33 partners. The user's updated list adds **Icatu** (34th partner). The logo `src/assets/insurance-logos/icatu.png` already exists in the project.

### Changes

1. **`src/components/client/ClientSections.tsx`**
   - Add `import logoIcatu from "@/assets/insurance-logos/icatu.png"`
   - Add `{ name: "Icatu", logo: logoIcatu }` to the `insuranceLogos` array

2. **`src/components/broker/BrokerSections.tsx`**
   - Add `import logoIcatu from "@/assets/insurance-logos/icatu.png"`
   - Add `{ name: "Icatu", logo: logoIcatu }` to the `insuranceLogos` array

