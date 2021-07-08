import React, { FC, memo, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogProps } from '@material-ui/core/Dialog/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import Button from '../Button'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dtacmodalotp_dialogContent: {
      padding: '0px 16px',
      textAlign: 'center',
    },
    dtacmodalotp_dialogTitle: {
      padding: '24px 16px 12px',
    },
    dtacmodalotp_contentText: {
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: 0,
    },
    dtacmodalotp_dialogActionRoot: {
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
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
    dtacmodalotp_resentOtp: {
      color: '#007AD0',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0em',
    },
    dtacmodalotp_resentOtpWrapper: {
      display: 'flex',
    },
    dtacmodalotp_input: {
      margin: theme.spacing(1),
      width: 40,

      '& .MuiInput-underline:before': {
        left: 0,
        right: 0,
        bottom: 0,
        content: '',
        position: 'absolute',
        transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderBottom: '3px solid #D6D6D6',
        pointerEvents: 'none',
      },

      '& .MuiInput-underline:after': {
        left: 0,
        right: 0,
        bottom: 0,
        content: '',
        position: 'absolute',
        transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderBottom: '3px solid #D6D6D6',
        pointerEvents: 'none',
      },

      '& .MuiInput-underline.Mui-disabled:before': {
        left: 0,
        right: 0,
        bottom: 0,
        content: '',
        position: 'absolute',
        transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderBottom: '3px solid #D6D6D6',
        pointerEvents: 'none',
      },
    },
    dtacmodalotp_title: {
      fontSize: 16,
      fontWeight: 700,
    },
    dtacmodalotp_bold: {
      fontWeight: 700,
    },
    dtacmodalotp_image: {
      alignSelf: 'center',
      marginLeft: 8,
      marginRight: 4,
    },
    dtacmodalotp_topgap8: {
      marginTop: 8,
    },
    dtacmodalotp_helpertext: {
      color: '#F03D46',
      fontSize: 14,
      fontWeight: 500,
    },
  }),
)

interface DtacModalOtpProps extends DialogProps {
  title: string
  description?: string
  cancelName?: string
  submitName?: string
  error?: boolean
  disable?: boolean
  onClose?: () => void
  onClickNegative?: () => void
  onClickPositive?: () => void
}

const DtacModalOtp: FC<DtacModalOtpProps> = (props) => {
  const classes = useStyles()
  const {
    open,
    onClose,
    onClickNegative,
    onClickPositive,
    children,
    title,
    error = false,
    description = 'Copy goes here',
    submitName,
    cancelName,
    disable = false,
    fullWidth = false,
    maxWidth = false,
  } = props

  const [focusActiveInd, setFocusActiveInd] = useState<number>(0)
  const [otp, setOtp] = useState(new Array(4).fill(''))
  const inputRefs: any = []

  const handleKeyPress = (
    element: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ): void | boolean => {
    if (element.code !== 'Backspace') {
      if (isNaN(+element.key)) return false
      setOtp([...otp.map((d, idx) => (idx === index ? element.key : d))])

      //Focus next input
      shiftToNextElement(index)
    } else {
      setOtp([...otp.map((d, idx) => (idx === index ? '' : d))])
      shiftToPrevElement(index)
    }
  }

  const shiftToNextElement = (index: number) => {
    if (index < otp.length - 1) {
      setFocusActiveInd(index + 1)
      inputRefs[index + 1].focus()
    }
  }

  const shiftToPrevElement = (index: number) => {
    if (index > 0) {
      setFocusActiveInd(index - 1)
      inputRefs[index - 1].focus()
    }
  }

  useEffect(() => {
    console.log('otp ', otp)
  }, [otp])

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
            <DialogTitle id="alert-dialog-title" className={classes.dtacmodalotp_dialogTitle}>
              <Typography align="left" className={classes.dtacmodalotp_title}>
                {title}
              </Typography>
            </DialogTitle>

            <DialogContent className={classes.dtacmodalotp_dialogContent}>
              <Typography className={classes.dtacmodalotp_contentText} align="left">
                {description}
              </Typography>

              {otp.map((data, index) => {
                return (
                  <TextField
                    type="text"
                    name="otp"
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center' },
                    }}
                    inputRef={(ref) => inputRefs.push(ref)}
                    className={classes.dtacmodalotp_input}
                    key={index.toString()}
                    value={data}
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                    autoFocus={index == focusActiveInd}
                    onKeyDown={(ev) => {
                      handleKeyPress(ev, index)
                    }}
                    error={error}
                    disabled={disable}
                  />
                )
              })}

              {error && (
                <div>
                  <Typography className={classes.dtacmodalotp_helpertext} align="center">
                    {'Error! Wrong OTP, please try again'}
                  </Typography>
                </div>
              )}

              <Typography
                className={clsx(classes.dtacmodalotp_contentText, classes.dtacmodalotp_topgap8)}
                align="left"
              >
                {'OTP will be valid for'}
                <span className={clsx(classes.dtacmodalotp_contentText, classes.dtacmodalotp_bold)}>
                  {' 15 mins'}
                </span>
              </Typography>

              <div className={classes.dtacmodalotp_resentOtpWrapper}>
                <Typography className={classes.dtacmodalotp_contentText} align="left">
                  {'Didn’t receive OTP code?'}
                </Typography>

                <img
                  src={'/images/sent.svg'}
                  width={12}
                  height={10}
                  className={classes.dtacmodalotp_image}
                />
                <Typography className={classes.dtacmodalotp_resentOtp} align="left">
                  {'Re-send OTP'}
                </Typography>
              </div>
            </DialogContent>

            <DialogActions className={classes.dtacmodalotp_dialogActionRoot}>
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

export default memo(DtacModalOtp)
