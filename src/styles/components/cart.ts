import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  border: 'none',
  width: '3rem',
  height: '3rem',
  borderRadius: '0.5rem',
  backgroundColor: '$gray800',

  svg: {
    color: '$gray300',
  },

  '&:hover': {
    backgroundColor: '$green500',
  }
})

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  width: '30rem',

  backgroundColor: '$gray800',
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  cursor: 'pointer',
})