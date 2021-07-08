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
    dtacmodalimagereward_dialogContent: {
      padding: '0px 16px',
    },
    dtacmodalimagereward_closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dtacmodalimagereward_dialogTitle: {
      padding: '62px 16px 12px',
    },
    dtacmodalimagereward_contentTextLeft: {
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: 0,
      color: '#767676',
    },
    dtacmodalimagereward_contentTextRight: {
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: 0,
      color: '#000000',
      marginLeft: 8,
    },
    dtacmodalimagereward_dialogActionRoot: {
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
      '& > Button:not(:first-child)': {
        marginLeft: 16,
      },
    },
    dtacmodalimagereward_tuadeeWrapper: {
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
    dtacmodalimagereward_marginTop16: {
      marginTop: 16,
    },
    gridCoin: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
)

interface DtacModalImageDtacRewardProps extends DialogProps {
  timer?: number
  title: string
  description?: string
  submitName: string
  closeButton?: boolean
  onClose?: () => void
  onClickPositive?: () => void
}

const DtacModalImageDtacReward: FC<DtacModalImageDtacRewardProps> = (props) => {
  const classes = useStyles()
  const {
    open,
    onClose,
    onClickPositive,
    closeButton = false,
    children,
    title,
    description = 'Copy goes here',
    submitName,
    timer,
    fullWidth = false,
    maxWidth = false,
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
            <div className={classes.dtacmodalimagereward_tuadeeWrapper}>
              <img src={'/images/rectangle.svg'} width={198} height={134} />
            </div>
            <DialogTitle
              id="alert-dialog-title"
              className={classes.dtacmodalimagereward_dialogTitle}
            >
              <Typography align="left">{title}</Typography>
              {closeButton && (
                <IconButton
                  aria-label="close"
                  className={classes.dtacmodalimagereward_closeButton}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </DialogTitle>

            <DialogContent className={classes.dtacmodalimagereward_dialogContent}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextLeft}
                    align={'left'}
                  >
                    {'Earned:'}
                  </Typography>
                </Grid>
                <Grid item xs={8} className={classes.gridCoin}>
                  <img src={'/images/coin_icon.png'} width={20} height={20} />
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextRight}
                    align={'right'}
                  >
                    {'00'}
                  </Typography>
                </Grid>

                <Grid item xs={4} className={classes.dtacmodalimagereward_marginTop16}>
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextLeft}
                    align={'left'}
                  >
                    {'Date:'}
                  </Typography>
                </Grid>
                <Grid item xs={8} className={classes.dtacmodalimagereward_marginTop16}>
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextRight}
                    align={'right'}
                  >
                    {'00-00-0000  00:00'}
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.dtacmodalimagereward_marginTop16}>
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextLeft}
                    align={'left'}
                  >
                    {'Lorem ipsum:'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={classes.dtacmodalimagereward_contentTextRight}
                    align={'left'}
                  >
                    {description}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions className={classes.dtacmodalimagereward_dialogActionRoot}>
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
