// blocks/projectCard.js
import { style } from '../styles/index.js'
import { cardBase, headingMain, linkStyle, tagStyle } from '../styles/index.js'

export function projectCard({ title, description, tech, repo }) {
  const div = document.createElement('div')
  style(div, cardBase)

  const h3 = document.createElement('h3')
  h3.textContent = title
  style(h3, headingMain)

  const p = document.createElement('p')
  p.textContent = description

  const ul = document.createElement('ul')
  style(ul, {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem'
  })

  tech.forEach(t => {
    const li = document.createElement('li')
    li.textContent = t
    style(li, tagStyle)
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