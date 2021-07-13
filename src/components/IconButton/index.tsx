import React, { FC, ReactElement, ReactNode } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

interface StyleProps {
  fill: boolean | undefined
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    icon_button_small_box: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    icon_button_root: {
      boxShadow: '0px 2px 4px rgba(96, 97, 112, 0.16)',
      borderRadius: 4,
      '&.Mui-disabled': {
        background: '#D6D6D6',
        '& img': {
          filter: ({ fill }) =>
            fill
              ? 'invert(45%) sepia(4%) saturate(6%) hue-rotate(316deg) brightness(100%) contrast(85%)'
              : undefined,
        },
      },
    },
    icon_button_large_root: {
      minHeight: 100,
      minWidth: 100,
      maxHeight: 100,
      maxWidth: 100,
      '& > .MuiIconButton-label': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    icon_button_small_root: {
      minHeight: 30,
      minWidth: 30,
      maxHeight: 40,
      maxWidth: 40,
    },
    icon_button_contained: {
      background: '#007AD0',
      '& img': {
        filter: ({ fill }) =>
          fill
            ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(14deg) brightness(99%) contrast(108%)'
            : undefined,
      },
      '&:hover': {
        background: '#005a99',
      },
      '&:active': {
        background: '#005a99',
      },
    },
    icon_button_outlined: {
      background: '#FFFFFF',
      border: '1px solid #007AD0',
      '& img': {
        filter: ({ fill }) =>
          fill
            ? 'invert(31%) sepia(85%) saturate(4180%) hue-rotate(189deg) brightness(96%) contrast(101%)'
            : undefined,
      },
    },
    icon_button_default: {
      background: '#FFFFFF',
      '& img': {
        filter: ({ fill }) =>
          fill
            ? 'invert(31%) sepia(85%) saturate(4180%) hue-rotate(189deg) brightness(96%) contrast(101%)'
            : undefined,
      },
    },
    icon_button_text: {
      maxWidth: 55,
      marginTop: 6,
      textAlign: 'center',
      fontSize: 14,
      color: '#0C1026',
    },
    icon_button_text_white: {
      color: '#FFFFFF',
    },
  }),
)

interface IconButtonProps {
  children: ReactNode
  variant?: 'text' | 'outlined' | 'contained' | undefined
  disabled?: boolean
  onClick?: () => void
  className?: typeof clsx | string
  text: string | undefined
  size: 'small' | 'large'
  fill?: boolean
}

const IconButtonComponent: FC<IconButtonProps> = ({
  children,
  variant,
  disabled = false,
  onClick,
  className,
  text,
  size = 'small',
  fill = true,
}): ReactElement => {
  const classes = useStyles({ fill: fill })

  return size == 'small' ? (
    <div className={classes.icon_button_small_box}>
      <IconButton
        onClick={onClick}
        disabled={disabled}
        className={clsx([
          classes.icon_button_root,
          classes.icon_button_small_root,
          className
            ? className
            : variant
            ? variant == 'contained'
              ? classes.icon_button_contained
              : classes.icon_button_outlined
            : classes.icon_button_default,
          ,
        ])}
      >
        {children}
      </IconButton>
      {text && <Typography className={classes.icon_button_text}>{text}</Typography>}
    </div>
  ) : (
    <>
      <IconButton
        onClick={onClick}
        disabled={disabled}
        className={clsx([
          classes.icon_button_root,
          classes.icon_button_large_root,
          className
            ? className
            : variant
            ? variant == 'contained'
              ? classes.icon_button_contained
              : classes.icon_button_outlined
            : classes.icon_button_default,
          ,
        ])}
      >
        {children}
        {text && (
          <Typography
            className={clsx([
              classes.icon_button_text,
              variant == 'contained' ? classes.icon_button_text_white : undefined,
            ])}
          >
            {text}
          </Typography>
        )}
      </IconButton>
    </>
  )
}

export default IconButtonComponent
