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
  backgroundColor: '$gray800',

  transition: 'filter 0.2s',

  svg: {
    color: '$gray300',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})