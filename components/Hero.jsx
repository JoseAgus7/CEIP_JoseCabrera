'use client'

import { useState } from 'react'
import HeroBadge from '@/components/HeroBadge'
import { taglines, badge, getRandomTagline } from '@/data/heroContent'

export default function Hero() {
  // Estado: guarda el tagline actual
  const [tagline, setTagline] = useState(taglines[0])

  // Fecha de hoy formateada en español
  const today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Función que se ejecuta al pulsar el botón
  function handleClick() {
    setTagline(getRandomTagline())
  }

  return (
    <section>
      <HeroBadge text={badge} />
      <h1>{tagline}</h1>
      <p>{today}</p>
      <button onClick={handleClick}>
        Cambiar frase
      </button>
    </section>
  )
}