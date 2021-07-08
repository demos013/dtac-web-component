import React, { FC, memo } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogProps } from '@material-ui/core/Dialog/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField/TextField'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import Button from '../Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dtacmodalformfield_dialogContent: {
      padding: '0px 16px',
      textAlign: 'center',
      overflowY: 'unset',
      ' .MuiDialogContent-root': {
        overflowY: 'unset',
      },
    },
    dtacmodalformfield_closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dtacmodalformfield_dialogTitle: {
      padding: '24px 16px 12px',
    },
    dtacmodalformfield_description: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
    },
    dtacmodalformfield_dialogActionRoot: {
      display: 'flex',
      justifyContent: 'center',
      padding: 24,
      '& > Button:not(:first-child)': {
        marginLeft: 16,
      },
    },
    dtacmodalformfield_titleForm: {
      color: '#767676',
      fontSize: 16,
      fontWeight: 300,
    },
    dtacmodalformfield_textField: {
      '& .MuiInputBase-root': {
        height: 40,
        fontSize: 16,
      },
    },
    dtacmodalformfield_formWrapper: {
      textAlign: 'left',
      marginTop: 22,
    },
    dtacmodalformfield_title: {
      fontSize: 16,
      fontWeight: 700,
    },
  }),
)

interface DtacModalFormFieldProps extends DialogProps {
  title: string
  description?: string
  cancelName?: string
  submitName: string
  closeButton?: boolean
  srcPath?: string
  disable?: boolean
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  onClose?: () => void
  onClickNegative?: () => void
  onClickPositive?: () => void
}

const DtacModalFormField: FC<DtacModalFormFieldProps> = (props) => {
  const classes = useStyles()
  const {
    open,
    onClose,
    onClickPositive,
    closeButton = false,
    disable = false,
    title,
    description = 'Copy goes here',
    submitName,
    srcPath,
    fullWidth = false,
    maxWidth = false,
    align = 'center',
  } = props

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth={fullWidth}>
        <DialogTitle id="alert-dialog-title" className={classes.dtacmodalformfield_dialogTitle}>
          <Typography align="center" className={classes.dtacmodalformfield_title}>
            {title}
          </Typography>
          {closeButton && (
            <IconButton
              aria-label="close"
              className={classes.dtacmodalformfield_closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>

        <DialogContent className={classes.dtacmodalformfield_dialogContent}>
          {srcPath && (
            <div>
              <img src={srcPath} width={30} height={30} />
            </div>
          )}

          <Typography className={classes.dtacmodalformfield_description} align={align}>
            {description}
          </Typography>

          <div className={classes.dtacmodalformfield_formWrapper}>
            <Typography className={clsx(classes.dtacmodalformfield_titleForm)}>
              {'Type your account name'}
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.dtacmodalformfield_textField}
                placeholder={'Account number'}
              />
            </form>
          </div>
        </DialogContent>

        <DialogActions className={classes.dtacmodalformfield_dialogActionRoot}>
          <Button variant="contained" onClick={onClickPositive} fullWidth disabled={disable}>
            {submitName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default memo(DtacModalFormField)
