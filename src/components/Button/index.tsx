import React, { FC, ReactElement, ReactNode } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

type Props = {
  width: string | undefined
}
const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  button_root: {
    fontFamily: 'dtac_2018regular, Padauk',
    minWidth: 120,
    width: ({ width }) => (width ? width : 'auto'),
    height: 44,
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 8px',
    boxShadow: '0px 2px 4px rgba(96, 97, 112, 0.16)',
    '&.Mui-disabled': {
      color: '#767676',
      backgroundColor: '#D6D6D6',
    },
  },
  button_default: {
    color: '#007AD0',
    border: 'none',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(25, 170, 248, 0.04);',
    },
    '&.MuiTouchRipple-root span': {
      backgroundColor: '#19AAF8!important',
      opacity: 0.3,
    },
  },
  button_primary: {
    color: '#FFFFFF',
    backgroundColor: '#007AD0',
    '&:hover': {
      background: '#005a99',
    },
    '&:active': {
      background: '#005a99',
    },
    '&.MuiTouchRipple-root span': {
      backgroundColor: '#FFFFFF!important',
      opacity: 0.3,
    },
  },
  button_outlined: {
    color: '#007AD0',
    border: '1px solid #007AD0',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(25, 170, 248, 0.04);',
    },
    '&.MuiTouchRipple-root span': {
      backgroundColor: '#19AAF8!important',
      opacity: 0.3,
    },
  },
}))

interface ButtonProps {
  children: ReactNode
  variant?: 'text' | 'outlined' | 'contained' | undefined
  disabled?: boolean
  width?: string | undefined
  height?: number
  disableRipple?: boolean
  fullWidth?: boolean
  onClick?: () => void
  className?: typeof clsx | string
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  variant,
  disabled = false,
  disableRipple = false,
  fullWidth = false,
  onClick,
  width,
  className,
}): ReactElement => {
  const classes = useStyles({ width })

  return (
    <>
      <Button
        fullWidth={fullWidth}
        disableRipple={disableRipple}
        variant={variant}
        disabled={disabled}
        className={clsx([
          className
            ? className
            : variant
            ? variant == 'contained'
              ? classes.button_primary
              : classes.button_outlined
            : classes.button_default,
          ,
          classes.button_root,
        ])}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}

export default ButtonComponent
