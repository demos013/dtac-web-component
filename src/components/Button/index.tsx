import React, { FC, ReactElement, ReactNode } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Theme } from '@material-ui/core/styles'

type Props = {
  width: string
}
const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  button_root: {
    fontFamily: 'dtac_2018regular, Padauk',
    minWidth: 120,
    width: ({ width }) => width,
    height: 44,
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 8px',
  },
  button_default: {
    color: '#0C1026',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(25, 170, 248, 0.04);',
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: '#19AAF8!important',
      opacity: 0.3,
    },
  },
  button_primary: {
    color: '#FFFFFF',
    backgroundColor: '#007AD0',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#007AD0',
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: '#FFFFFF!important',
      opacity: 0.3,
    },
  },
}))

interface ButtonProps {
  children: ReactNode
  primary?: boolean
  disabled?: boolean
  width?: string
  height?: number
  disableRipple?: boolean
  onClick?: () => void
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  primary = false,
  disabled = false,
  disableRipple = false,
  onClick,
  width = '120px',
}): ReactElement => {
  const classes = useStyles({ width })

  return (
    <>
      <Button
        disableRipple={disableRipple}
        variant={primary ? 'contained' : 'outlined'}
        disabled={disabled}
        className={`${classes.button_root} ${
          primary ? classes.button_primary : classes.button_default
        }`}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}

export default ButtonComponent
