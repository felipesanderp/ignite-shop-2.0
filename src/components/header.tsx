import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

import { Header, Button } from '../styles/components/header'
import Link from 'next/link'

export function AppHeader() {
  return (
    <Header>
      <Link href="/">
        <Image src='/logo.svg' width={100} height={100} alt="Logo" />
      </Link>

      <Button>
        <ShoppingBag />
      </Button>
    </Header>
  )
}