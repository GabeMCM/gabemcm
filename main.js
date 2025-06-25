import { heading } from './components/heading.js'
import { paragraph } from './components/paragraph.js'
import { projectCard } from './components/projectCard.js'
import { list } from './info.js'

const app = document.getElementById('app')

app.appendChild(heading('Gabriel Mateus – Portfólio'))
app.appendChild(paragraph('Desenvolvedor focado em backend e arquitetura limpa.'))

list.forEach((l) => {
  app.appendChild(projectCard(l))
})