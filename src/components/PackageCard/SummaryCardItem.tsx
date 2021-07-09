import React, { FC } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { SummaryCardItemProps } from './package-card'

const useStyles = makeStyles({
  summarycard_item_iconWrapper: {
    display: 'flex',
  },
  summarycard_item_text: {
    textAlign: 'left',
  },
  summarycard_item_fontSize12: {
    fontSize: 11,
  },
  summarycard_item_fontSize14: {
    fontSize: 14,
  },
  summarycard_item_bold: {
    fontWeight: 700,
  },
  summarycard_item_lineHeight125: {
    lineHeight: 1.25,
  },
  summarycard_item_grey: {
    color: '#767676',
  },
})

const SummaryCardItem: FC<SummaryCardItemProps> = ({ icon, upperText, lowerText, size }) => {
  const classes = useStyles()
  return (
    <Grid item xs={size ? size : 3}>
      <Grid container>
        <Grid item xs={2} className={classes.summarycard_item_iconWrapper}>
          <img src={icon} width={16} height={16} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={9}>
          <Typography
            className={clsx([
              classes.summarycard_item_text,
              classes.summarycard_item_bold,
              classes.summarycard_item_fontSize14,
              classes.summarycard_item_lineHeight125,
            ])}
          >
            {upperText}
          </Typography>
          <Typography
            className={clsx([
              classes.summarycard_item_text,
              classes.summarycard_item_fontSize12,
              classes.summarycard_item_grey,
              classes.summarycard_item_lineHeight125,
            ])}
          >
            {lowerText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default SummaryCardItem
