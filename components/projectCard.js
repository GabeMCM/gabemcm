import { style } from '../styles/index.js'
import { cardBase, headingMain, linkStyle, ulStyle, liCardTech } from '../styles/index.js'

export function projectCard({ title, description, tech, repo }) {
  const div = document.createElement('div')
  style(div, cardBase)

  const h3 = document.createElement('h3')
  h3.textContent = title
  style(h3, headingMain)

  const p = document.createElement('p')
  p.textContent = description

  const ul = document.createElement('ul')
  style(ul, ulStyle)
  
  tech.forEach(t => {
    const li = document.createElement('li')
    li.textContent = t
    style(li, liCardTech)
    ul.appendChild(li)
  })

  const a = document.createElement('a')
  a.href = repo
  a.target = '_blank'
  a.textContent = 'Ver no GitHub'
  style(a, linkStyle)

  div.append(h3, p, ul, a)
  return div
}
