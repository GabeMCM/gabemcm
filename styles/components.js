// styles/components.js
import { theme } from './theme.js'

export const headingMain = {
  color: theme.colors.accent,
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: theme.spacing.md,
  textAlign: 'center'
}

export const paragraphMain = {
  color: theme.colors.text,
  fontSize: '1.125rem',
  lineHeight: '1.6',
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom: theme.spacing.lg,
  textAlign: 'center'
}

export const cardBase = {
  background: '#fff',
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radius,
  padding: theme.spacing.lg,
  marginBottom: theme.spacing.md,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
}

export const linkStyle = {
  display: 'inline-block',
  marginTop: theme.spacing.sm,
  color: theme.colors.accent,
  textDecoration: 'none',
  fontWeight: '600'
}

export const tagStyle = {
  background: theme.colors.tagBackground,
  padding: '0.3rem 0.75rem',
  borderRadius: '999px',
  fontSize: '0.85rem',
  fontWeight: '500',
  color: theme.colors.accent
}