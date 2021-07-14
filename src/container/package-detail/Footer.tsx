import React, { FC, memo } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

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

interface FooterProps {
  onHandleBuyNow?: () => void
}

const Footer: FC<FooterProps> = (props) => {
  const { onHandleBuyNow } = props
  const classes = useStyles()

  const onClickBuyNow = () => {
    if (onHandleBuyNow) {
      onHandleBuyNow()
    }
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
              <img src={'/images/icon/point.svg'} width={20} height={20} />
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
    </>
  )
}

export default memo(Footer)
