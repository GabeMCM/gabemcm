import { style } from '../styles/index.js'
import { headingMain } from '../styles/index.js'

export function heading(text) {
  const h1 = document.createElement('h1')
  h1.textContent = text
  return style(h1, headingMain)
}
