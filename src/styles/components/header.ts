import { styled } from "..";

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

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