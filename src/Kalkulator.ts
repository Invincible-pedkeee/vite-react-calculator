export type Operacija = '+' | '-' | '×' | '÷'

export interface RezultatKalkulacije {
  vrijednost: number | null
  greska: string | null
}

export interface StanjeKalkulatora {
  broj1: string
  broj2: string
  rezultat: RezultatKalkulacije | null
  aktivnaOp: Operacija | null
}
