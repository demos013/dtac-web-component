import React, { FC, memo } from 'react'
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
    dtacmodaltermcond_dialogContent: {
      padding: '0px 16px',
      textAlign: 'center',
    },
    dtacmodaltermcond_closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dtacmodaltermcond_dialogTitle: {
      padding: '24px 16px 12px',
    },
    dtacmodaltermcond_contentText: {
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 0,
    },
    dtacmodaltermcond_dialogActionRoot: {
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
    dtacmodaltermcond_descriptionWrapper: {
      padding: 16,
      background: '#FFFFFF',
      boxShadow: 'inset 0px 0.5px 4px rgb(0 0 0 / 30%)',
      borderRadius: 4,
      maxHeight: 250,
      // responsive here
      overflowY: 'scroll',
    },
  }),
)

interface DtacModalTermConditionProps extends DialogProps {
  title: string
  description: string
  submitName: string
  closeButton?: boolean
  onClose?: () => void
  onClickPositive?: () => void
}

const DtacModalTermCondition: FC<DtacModalTermConditionProps> = (props) => {
  const classes = useStyles()
  const {
    open = false,
    onClose,
    onClickPositive,
    closeButton = false,
    title,
    description,
    submitName,
    fullWidth = false,
    maxWidth = false,
  } = props

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={maxWidth} fullWidth={fullWidth}>
      <DialogTitle id="alert-dialog-title" className={classes.dtacmodaltermcond_dialogTitle}>
        <Typography align="left">{title}</Typography>
        {closeButton && (
          <IconButton
            aria-label="close"
            className={classes.dtacmodaltermcond_closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent className={classes.dtacmodaltermcond_dialogContent}>
        <div className={classes.dtacmodaltermcond_descriptionWrapper}>
          <Typography className={classes.dtacmodaltermcond_contentText} align="left">
            {description}
          </Typography>
        </div>
      </DialogContent>

      <DialogActions className={classes.dtacmodaltermcond_dialogActionRoot}>
        <Button variant="contained" onClick={onClickPositive} fullWidth>
          {submitName}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(DtacModalTermCondition)
