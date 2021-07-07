import Dialog from '@material-ui/core/Dialog'
import { DialogProps } from '@material-ui/core/Dialog/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid/Grid'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import React, { FC, memo, useEffect } from 'react'
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
      padding: '62px 16px 12px',
    },
    contentTextLeft: {
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: 0,
      color: '#767676',
    },
    contentTextRight: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
      color: '#000000',
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
      top: 0,
      [theme.breakpoints.up(320)]: {
        display: 'fixed',
        top: 32,
      },
      [theme.breakpoints.up(600)]: {
        display: 'fixed',
        top: 64,
      },

      /** To make icon align center */
      left: 'calc(50% - 100px)',
      '& > div': {
        position: 'fixed !important',
      },
    },
    marginTop16: {
      marginTop: 16,
    },
  }),
)

interface DtacModalImageDtacRewardProps extends DialogProps {
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

const DtacModalImageDtacReward: FC<DtacModalImageDtacRewardProps> = (props) => {
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
              <img src={'/images/rectangle.svg'} width={198} height={134} />
            </div>
            <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
              <Typography align="left">{title}</Typography>
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
              <Grid container>
                <Grid item xs={4}>
                  <Typography className={classes.contentTextLeft} align={'left'}>
                    {'Earned:'}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography className={classes.contentTextRight} align={'right'}>
                    {'00'}
                  </Typography>
                </Grid>

                <Grid item xs={4} className={classes.marginTop16}>
                  <Typography className={classes.contentTextLeft} align={'left'}>
                    {'Date:'}
                  </Typography>
                </Grid>
                <Grid item xs={8} className={classes.marginTop16}>
                  <Typography className={classes.contentTextRight} align={'right'}>
                    {'00-00-0000  00:00'}
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.marginTop16}>
                  <Typography className={classes.contentTextLeft} align={'left'}>
                    {'Lorem ipsum:'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.contentTextRight} align={'left'}>
                    {
                      'Lorem ipsum dolor sit amet Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada a'
                    }
                  </Typography>
                </Grid>
              </Grid>
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

export default memo(DtacModalImageDtacReward)
