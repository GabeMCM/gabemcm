// blocks/paragraph.js
import { style } from '../styles/index.js'
import { paragraphMain } from '../styles/index.js'

export function paragraph(text) {
  const p = document.createElement('p')
  p.textContent = text
  return style(p, paragraphMain)
}