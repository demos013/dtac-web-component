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
    dtacmodalnongtud_dialogContent: {
      padding: '0px 16px',
    },
    dtacmodalnongtud_closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dtacmodalnongtud_dialogTitle: {
      padding: '44px 16px 12px',
    },
    dtacmodalnongtud_contentText: {
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 0,
    },
    dtacmodalnongtud_dialogActionRoot: {
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
    dtacmodalnongtud_tuadeeWrapper: {
      position: 'fixed',
      // top: -12,
      top: 'calc(50% - 10rem)',

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
  srcPath: string
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
    title,
    description = 'Copy goes here',
    submitName,
    cancelName,
    timer,
    srcPath,
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
        <div className={classes.dtacmodalnongtud_tuadeeWrapper}>
          <img src={srcPath} width={85} height={85}></img>
        </div>
        <DialogTitle id="alert-dialog-title" className={classes.dtacmodalnongtud_dialogTitle}>
          <Typography align="center">{title}</Typography>
          {closeButton && (
            <IconButton
              aria-label="close"
              className={classes.dtacmodalnongtud_closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>

        <DialogContent className={classes.dtacmodalnongtud_dialogContent}>
          <Typography className={classes.dtacmodalnongtud_contentText} align={align}>
            {description}
          </Typography>
        </DialogContent>

        <DialogActions className={classes.dtacmodalnongtud_dialogActionRoot}>
          {cancelName && (
            <Button onClick={onClickNegative} fullWidth>
              {cancelName}
            </Button>
          )}
          <Button variant="contained" onClick={onClickPositive} fullWidth>
            {submitName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default memo(DtacModalNongTuaD)
