import { theme } from './theme.js'

export const headingMain = {
  color: theme.colors.accent,
  fontSize: '2rem',
  marginBottom: theme.spacing.sm,
  fontWeight: '600'
}

export const cardBase = {
  border: `1px solid ${theme.colors.border}`,
  padding: theme.spacing.md,
  borderRadius: theme.radius,
  background: theme.colors.background
}

export const linkStyle = {
  color: theme.colors.accent,
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: theme.spacing.sm
}

export const ulStyle = {
    linkStyle: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem'
}

export const liCardTech = {
    background: '#eee',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.85rem'
}