import React, { FC, ReactElement, ReactNode } from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './style'

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
  width = '90px',
}): ReactElement => {
  const classes = useStyles({ width })

  return (
    <>
      <Button
        disableRipple={disableRipple}
        variant={primary ? 'contained' : 'outlined'}
        disabled={disabled}
        className={`${classes.root} ${primary ? classes.primary : classes.default}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
}

export default ButtonComponent
