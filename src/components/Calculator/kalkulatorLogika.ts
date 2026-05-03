import type { Operacija, RezultatKalkulacije } from '../../types/Kalkulator'

export function izracunaj(
  broj1: number,
  broj2: number,
  operacija: Operacija
): RezultatKalkulacije {
  switch (operacija) {
    case '+':
      return { vrijednost: broj1 + broj2, greska: null }
    case '-':
      return { vrijednost: broj1 - broj2, greska: null }
    case '×':
      return { vrijednost: broj1 * broj2, greska: null }
    case '÷':
      if (broj2 === 0) {
        return { vrijednost: null, greska: 'Dijeljenje nulom nije dozvoljeno.' }
      }
      return { vrijednost: broj1 / broj2, greska: null }
  }
}

export function formatirajRezultat(vrijednost: number): string {
  if (!isFinite(vrijednost)) return 'Greška'
  if (Number.isInteger(vrijednost)) return vrijednost.toString()
  return parseFloat(vrijednost.toFixed(10)).toString()
}
