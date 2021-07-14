import React, { memo, useEffect } from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  fontSize16Bold: {
    fontSize: 16,
    fontWeight: 700,
  },
  fontSize16Regular: {
    fontSize: 16,
  },
  buyForOtherText: {
    fontSize: 16,
    color: '#007AD0',
    marginRight: 8,
  },
  buyForOtherGrid: {
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    display: 'flex',
  },
  divider: {
    margin: '16px 0',
  },
}))

const BuyForOtherSection = () => {
  const classes = useStyles()

  useEffect(() => {}, [])
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={classes.fontSize16Bold}>{'Phone number'}</Typography>
          <Typography className={classes.fontSize16Regular}>{'080-568-6912'}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.buyForOtherGrid}>
          <Typography className={classes.buyForOtherText}>{'Buy for other'}</Typography>
          <img src={'/images/icon/blue/arrow_right_blue.svg'} width={5} height={10} />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />
    </div>
  )
}

export default memo(BuyForOtherSection)
