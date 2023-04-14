import Link from 'next/link'
import Image from 'next/image'

import { Cart } from './cart'

import { Header } from '../styles/components/header'

export function AppHeader() {
  return (
    <Header>
      <Link href="/">
        <Image src='/logo.svg' width={100} height={100} alt="Logo" />
      </Link>

      <Cart />
    </Header>
  )
}