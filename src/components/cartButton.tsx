import { ShoppingBag } from 'lucide-react'

type CartButtonProps = ComponentProps<typeof Button>

import { Button } from "../styles/components/cartButton";
import { ComponentProps } from 'react';

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <Button {...rest}>
      <ShoppingBag />
    </Button>
  )
}