import { useState, useRef } from 'react'
import type { Operacija, StanjeKalkulatora } from './Kalkulator.ts'
import { izracunaj, formatirajRezultat } from './kalkulatorLogika'
import './Kalkulator.css'

const OPERACIJE: { simbol: Operacija; naziv: string }[] = [
  { simbol: '+', naziv: 'Saberi' },
  { simbol: '-', naziv: 'Oduzmi' },
  { simbol: '×', naziv: 'Pomnoži' },
  { simbol: '÷', naziv: 'Podijeli' },
]

const POCETNO_STANJE: StanjeKalkulatora = {
  broj1: '',
  broj2: '',
  rezultat: null,
  aktivnaOp: null,
}

export default function Kalkulator() {
  const [stanje, setStanje] = useState<StanjeKalkulatora>(POCETNO_STANJE)
  const [slika, setSlika] = useState<string | null>(null)
  const inputSlikaRef = useRef<HTMLInputElement>(null)

  const handleUnos = (polje: 'broj1' | 'broj2', vrijednost: string) => {
    if (vrijednost !== '' && vrijednost !== '-' && vrijednost !== '.' && isNaN(Number(vrijednost))) return
    setStanje((prev) => ({ ...prev, [polje]: vrijednost, rezultat: null, aktivnaOp: null }))
  }

  const handleIzracunaj = (operacija: Operacija) => {
    const n1 = parseFloat(stanje.broj1)
    const n2 = parseFloat(stanje.broj2)

    if (isNaN(n1) || stanje.broj1 === '') {
      setStanje((prev) => ({
        ...prev,
        aktivnaOp: operacija,
        rezultat: { vrijednost: null, greska: 'Unesite prvi broj.' },
      }))
      return
    }
    if (isNaN(n2) || stanje.broj2 === '') {
      setStanje((prev) => ({
        ...prev,
        aktivnaOp: operacija,
        rezultat: { vrijednost: null, greska: 'Unesite drugi broj.' },
      }))
      return
    }

    const res = izracunaj(n1, n2, operacija)
    setStanje((prev) => ({ ...prev, aktivnaOp: operacija, rezultat: res }))
  }

  const handleReset = () => setStanje(POCETNO_STANJE)

  const handleSlikaKlik = () => inputSlikaRef.current?.click()

  const handleSlikaUnos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fajl = e.target.files?.[0]
    if (!fajl) return
    const url = URL.createObjectURL(fajl)
    setSlika(url)
  }

  const { broj1, broj2, rezultat, aktivnaOp } = stanje

  return (
    <div className="kalkulator-wrapper">
      <div className="kalkulator-header">
        <div className="kalkulator-header-lijevo">
          <span className="kalkulator-oznaka">KALKULATOR</span>
          <h1 className="kalkulator-naslov">
            {rezultat?.vrijednost !== null && rezultat !== null && aktivnaOp
              ? `${broj1} ${aktivnaOp} ${broj2}`
              : 'Unesite brojeve'}
          </h1>
        </div>

        <div className="slika-placeholder" onClick={handleSlikaKlik} title="Dodaj sliku">
          {slika ? (
            <img src={slika} alt="Odabrana slika" />
          ) : (
            <>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cc0000" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>SLIKA</span>
            </>
          )}
        </div>

        <input
          ref={inputSlikaRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleSlikaUnos}
        />
      </div>

      <div className="unosi-red">
        <div className="unos-grupa">
          <label className="unos-labela" htmlFor="broj1">Broj A</label>
          <input
            id="broj1"
            className="unos-polje"
            type="text"
            inputMode="decimal"
            placeholder="0"
            value={broj1}
            onChange={(e) => handleUnos('broj1', e.target.value)}
          />
        </div>

        <div className="unos-razdjelnik" />

        <div className="unos-grupa">
          <label className="unos-labela" htmlFor="broj2">Broj B</label>
          <input
            id="broj2"
            className="unos-polje"
            type="text"
            inputMode="decimal"
            placeholder="0"
            value={broj2}
            onChange={(e) => handleUnos('broj2', e.target.value)}
          />
        </div>
      </div>

      <div className="operacije-grid">
        {OPERACIJE.map((op) => (
          <button
            key={op.simbol}
            className={`op-dugme ${aktivnaOp === op.simbol && rezultat?.vrijednost !== null ? 'op-dugme--aktivan' : ''}`}
            onClick={() => handleIzracunaj(op.simbol)}
          >
            <span className="op-simbol">{op.simbol}</span>
            <span className="op-naziv">{op.naziv}</span>
          </button>
        ))}
      </div>

      <div className={`rezultat-box ${rezultat?.greska ? 'rezultat-box--greska' : ''} ${rezultat?.vrijednost !== null && rezultat !== null ? 'rezultat-box--aktivan' : ''}`}>
        <span className="rezultat-labela">Rezultat</span>
        {rezultat === null && (
          <span className="rezultat-vrijednost rezultat-vrijednost--prazno">—</span>
        )}
        {rezultat?.greska && (
          <span className="rezultat-vrijednost rezultat-vrijednost--greska">{rezultat.greska}</span>
        )}
        {rezultat?.vrijednost !== null && rezultat !== null && !rezultat.greska && (
          <span className="rezultat-vrijednost">{formatirajRezultat(rezultat.vrijednost!)}</span>
        )}
      </div>

      <button className="reset-dugme" onClick={handleReset}>
        Resetuj
      </button>
    </div>
  )
}
