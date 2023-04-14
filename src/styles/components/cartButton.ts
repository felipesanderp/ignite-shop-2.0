import { styled } from "..";

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  border: 'none',
  width: '3rem',
  height: '3rem',
  borderRadius: '0.5rem',

  transition: 'filter 0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.8)'
        },
      },
      gray: {
        backgroundColor: '$gray800',
        color: '$gray500',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.8)'
        },
      }
    }
  }
})