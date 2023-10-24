import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkToProps {
  children: ReactNode
  href: String
}

export default function LinkTo({ children, href }: LinkToProps) {
  return (
    <Link style={{ textDecoration: 'none', color: '#111' }} href={String(href)}>
      {children}
    </Link>
  )
}
