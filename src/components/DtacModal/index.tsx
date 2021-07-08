import React, { FC, useEffect } from 'react'
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
    dtacmodal_dialogContent: {
      padding: '0px 16px',
      textAlign: 'center',
    },
    dtacmodal_closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dtacmodal_dialogTitle: {
      padding: '24px 16px 12px',
    },
    dtacmodal_contentText: {
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 0,
    },
    dtacmodal_dialogActionRoot: {
      padding: 24,
      '& > Button:not(:first-child)': {
        marginLeft: 16,
      },
      [theme.breakpoints.down(360)]: {
        display: 'block',
        textAlign: 'center',
        '& > Button:not(:first-child)': {
          marginLeft: 0,
          marginTop: 16,
        },
      },
    },
  }),
)

interface DtacModalProps extends DialogProps {
  timer?: number
  title: string
  description: string
  cancelName?: string
  submitName: string
  closeButton?: boolean
  srcPath?: string
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  onClose?: () => void
  onClickNegative?: () => void
  onClickPositive?: () => void
}

const DtacModal: FC<DtacModalProps> = (props) => {
  const classes = useStyles()
  const {
    open,
    onClose,
    onClickNegative,
    onClickPositive,
    closeButton = false,
    children,
    title,
    description,
    submitName,
    cancelName,
    srcPath,
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
            <DialogTitle id="alert-dialog-title" className={classes.dtacmodal_dialogTitle}>
              <Typography align="center">{title}</Typography>
              {closeButton && (
                <IconButton
                  aria-label="close"
                  className={classes.dtacmodal_closeButton}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </DialogTitle>

            <DialogContent className={classes.dtacmodal_dialogContent}>
              {srcPath && (
                <div>
                  <img src={srcPath} width={30} height={30} />
                </div>
              )}

              <Typography className={classes.dtacmodal_contentText} align={align}>
                {description}
              </Typography>
            </DialogContent>

            <DialogActions className={classes.dtacmodal_dialogActionRoot}>
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

export default DtacModal
