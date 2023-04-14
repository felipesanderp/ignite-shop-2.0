import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

import { Header } from '../styles/pages/app'

export function AppHeader() {
  return (
    <Header>
      <Image src='/logo.svg' width={64} height={64} alt="Logo" />
    </Header>
  )
}