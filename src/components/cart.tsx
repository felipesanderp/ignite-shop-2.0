import { ShoppingBag, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

import { Button, CartClose, CartContent } from '../styles/components/cart'

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <ShoppingBag />
        </Button>
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