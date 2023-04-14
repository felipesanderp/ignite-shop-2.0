import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

import { CartButton } from './cartButton'

import { CartClose, CartContent } from '../styles/components/cart'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X />
          </CartClose>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}