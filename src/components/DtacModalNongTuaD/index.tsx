import React, { FC, memo, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogProps } from '@material-ui/core/Dialog/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Button from '../Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    dialogContent: {
      padding: '0px 16px',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dialogTitle: {
      padding: '44px 16px 12px',
    },
    contentText: {
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 0,
    },
    dialogActionRoot: {
      padding: 24,
      '& > Button:not(:first-child)': {
        marginLeft: 16,
      },
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        '& > Button:not(:first-child)': {
          marginLeft: 0,
          marginTop: 16,
        },
      },
    },
    tuadeeWrapper: {
      position: 'fixed',
      top: -12,

      /** To make icon align center */
      left: 'calc(50% - 100px/2.8)',
      '& > div': {
        position: 'fixed !important',
      },
    },
  }),
)

interface DtacModalNongTuaDProps extends DialogProps {
  timer?: number
  title: string
  description?: string
  cancelName?: string
  submitName: string
  closeButton?: boolean
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  onClose?: () => void
  onClickNegative?: () => void
  onClickPositive?: () => void
}

const DtacModalNongTuaD: FC<DtacModalNongTuaDProps> = (props) => {
  const classes = useStyles()
  const {
    open,
    onClose,
    onClickNegative,
    onClickPositive,
    closeButton = false,
    children,
    title,
    description = 'Copy goes here',
    submitName,
    cancelName,
    timer,
    fullWidth = false,
    maxWidth = false,
    align = 'center',
  } = props

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        handleClose()
      }, timer)
    }
  }, [timer])

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth={fullWidth}>
        {children ? (
          children
        ) : (
          <>
            <div className={classes.tuadeeWrapper}>
              <img src={'/images/nongtuadee_sorry.svg'} width={85} height={85}></img>
            </div>
            <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
              <Typography align="center">{title}</Typography>
              {closeButton && (
                <IconButton
                  aria-label="close"
                  className={classes.closeButton}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>
              <Typography className={classes.contentText} align={align}>
                {description}
              </Typography>
            </DialogContent>

            <DialogActions className={classes.dialogActionRoot}>
              {cancelName && (
                <Button onClick={onClickNegative} fullWidth>
                  {cancelName}
                </Button>
              )}
              <Button variant="contained" onClick={onClickPositive} fullWidth>
                {submitName}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

export default memo(DtacModalNongTuaD)
