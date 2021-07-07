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
    root: {},
    dialogContent: {
      padding: '0px 16px',
      textAlign: 'center',
      ' .MuiDialogContent-root': {
        overflowY: 'hidden',
      },
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dialogTitle: {
      padding: '24px 16px 12px',
    },
    contentText: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
    },
    dialogActionRoot: {
      display: 'flex',
      justifyContent: 'center',
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
    titleForm: {
      color: '#767676',
      fontSize: 16,
      fontWeight: 300,
    },
    textField: {
      '& .MuiInputBase-root': {
        height: 40,
        fontSize: 16,
      },
    },
    formWrapper: {
      textAlign: 'left',
      marginTop: 22,
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
    // onClickNegative,
    onClickPositive,
    closeButton = false,
    children,
    title,
    description = 'Copy goes here',
    submitName,
    // cancelName,
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
        {children ? (
          children
        ) : (
          <>
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
              {srcPath && (
                <div>
                  <img src={srcPath} width={30} height={30} />
                </div>
              )}

              <Typography className={classes.contentText} align={align}>
                {description}
              </Typography>

              <div className={classes.formWrapper}>
                <Typography className={clsx(classes.titleForm)}>
                  {'Type your account name'}
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className={classes.textField}
                    placeholder={'Account number'}
                  />
                </form>
              </div>
            </DialogContent>

            <DialogActions className={classes.dialogActionRoot}>
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

export default memo(DtacModalFormField)
