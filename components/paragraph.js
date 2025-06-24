import { style } from '../styles/index.js'

export function paragraph(text) {
  const p = document.createElement('p')
  p.textContent = text
  return style(p, {
    fontSize: '1rem',
    marginBottom: '1rem'
  })
}
