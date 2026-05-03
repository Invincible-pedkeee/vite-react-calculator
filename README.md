# vite-react-calculator

Jednostavna web aplikacija kalkulatora razvijena u sklopu domaćeg zadatka predmeta **Nadzor i kontrola u distribuiranim sistemima**.

## 🔗 Live verzija

[https://vite-react-calculator-pi.vercel.app](https://vite-react-calculator-pi.vercel.app)

## O projektu

Mini kalkulator koji podržava četiri osnovne aritmetičke operacije. Projekat je realizovan koristeći React, Vite i TypeScript, uz automatski deployment putem Vercel platforme.

## Funkcionalnosti

- Sabiranje, oduzimanje, množenje i dijeljenje
- Validacija unosa — aplikacija javlja koji broj nedostaje
- Zaštita od dijeljenja nulom
- Prikaz izvršene operacije u zaglavlju
- Dugme za resetovanje svih polja

## Tehnologije

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) — deployment platforma

## Pokretanje lokalno

### Preduslovi

- Node.js >= 18
- npm >= 9

### Koraci

```bash
git clone https://github.com/TVOJE_IME/vite-react-calculator.git
cd vite-react-calculator
npm install
npm run dev
```

Aplikacija se pokreće na `http://localhost:5173`.

## Build

```bash
npm run build
```

## Struktura projekta

```
vite-react-calculator/
├── public/
├── src/
│   ├── components/
│   │   └── Calculator/
│   │       ├── Kalkulator.tsx       # Glavna komponenta
│   │       ├── Kalkulator.css       # Stilovi
│   │       └── kalkulatorLogika.ts  # Logika računanja
│   ├── types/
│   │   └── Kalkulator.ts            # TypeScript tipovi
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## CI/CD

Svaki push na `main` granu automatski pokreće novi deployment na Vercel platformi putem GitHub integracije.
