import React, { memo, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import NongTuaDPopup from 'components/package-detail/NongTuaDPopup'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: '#F5F5F5',
    maxHeight: 160,
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    padding: '8px 15px',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    textTransform: 'none',
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize16Bold: {
    fontSize: 16,
    fontWeight: 700,
  },
  fontSize12: {
    fontSize: 12,
  },
  textTranformNone: {
    textTransform: 'none',
  },
  fontSize14Bold: {
    fontSize: 14,
    fontWeight: 700,
  },
  coinWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  buttonGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}))

const Footer = () => {
  const classes = useStyles()
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const onClickBuyNow = () => {
    setOpen(true)
  }

  return (
    <>
      <div id="use-layout-footer" className={classes.root}>
        <Grid container>
          <Grid item xs={8}>
            <Typography className={classes.fontSize16}>
              {'Total: '}
              <span className={classes.fontSize16Bold}>{'374.00 Baht'}</span>
            </Typography>
            <Typography className={classes.fontSize12}>{'(incl. VAT)'}</Typography>

            <div className={classes.coinWrapper}>
              <Typography variant="button" className={classes.textTranformNone}>
                {'Coins earned:'}
              </Typography>
              <Image unoptimized src={'/images/icon/point.svg'} width={20} height={20} />
              <Typography className={classes.fontSize14Bold}>{'300'}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} className={classes.buttonGrid}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onClickBuyNow}
            >
              {'Buy now'}
            </Button>
          </Grid>
        </Grid>
      </div>
      <NongTuaDPopup
        title={'Your balance is too low'}
        desc={
          'Borrow 30 Baht with 2 Baht service fee in emergency loan to buy your selected package'
        }
        align={'center'}
        bulebuttonName={'confirm Emergency Loan'}
        whitebuttonName={'Refill'}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default memo(Footer)
