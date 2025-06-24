import { heading } from './components/heading.js'
import { paragraph } from './components/paragraph.js'
import { projectCard } from './components/projectCard.js'

const app = document.getElementById('app')

app.appendChild(heading('Gabriel Mateus – Portfólio'))
app.appendChild(paragraph('Desenvolvedor focado em backend e arquitetura limpa.'))

app.appendChild(projectCard({
  title: 'Sistema de Garantias',
  description: 'Substitui planilhas manuais com interface funcional.',
  tech: ['TypeScript', 'HTML', 'CSS'],
  repo: 'https://github.com/GabeMCM/Sistema-de-Gerenciamento-de-Garantias'
}))

app.appendChild(projectCard({
  title: 'NoobDB',
  description: 'Mini-banco de dados em JS com IndexedDB e API semelhante a ORM.',
  tech: ['TypeScript', 'IndexedDB'],
  repo: 'https://github.com/GabeMCM/Noobdb'
}))
