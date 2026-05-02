# Kalkulator

Jednostavna web aplikacija razvijena u sklopu domaceg zadatka predmeta **OSNOVE DISTRIBUIRANOG PROGRAMIRANJA**.

## 🔗 Live verzija

[https://vite-react-calculator-pi.vercel.app](https://vite-react-calculator-pi.vercel.app)

## O projektu

Aplikacija predstavlja mini kalkulator koji podržava četiri osnovne aritmetičke operacije. Projekat je realizovan koristeći moderne web tehnologije — React, Vite i TypeScript — uz automatski deployment putem Vercel platforme.

## Funkcionalnosti

- Sabiranje, oduzimanje, množenje i dijeljenje
- Zasebna validacija za svako polje — aplikacija javlja koji broj nedostaje
- Zaštita od dijeljenja nulom
- Prikaz izvršene operacije u zaglavlju
- Dugme za resetovanje svih polja
- Mogućnost dodavanja vlastite slike u zaglavlje

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
│   ├── Kalkulator.tsx       # Glavna komponenta
│   ├── Kalkulator.css       # Stilovi
│   ├── kalkulatorLogika.ts  # Logika računanja
│   ├── Kalkulator.ts        # TypeScript tipovi
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## CI/CD

Svaki push na `main` granu automatski pokreće novi deployment na Vercel platformi.
