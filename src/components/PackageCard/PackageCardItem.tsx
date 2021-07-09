import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { PackageCardItemProps } from './package-card'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    packagecard_item_iconWrapper: {
      display: 'flex',
    },
    packagecard_item_postWhiteSpace: {
      marginRight: 5,
    },
    packagecard_item_textWrapper: {
      display: 'flex',
      marginBottom: 8,
    },
    packagecard_item_text: {
      textAlign: 'left',
    },
    packagecard_item_fontSize14: {
      fontSize: 14,
    },
    packagecard_item_bold: {
      fontWeight: 700,
    },
    packagecard_item_lineHeight125: {
      lineHeight: 1.25,
    },
    packagecard_item_grey: {
      color: '#767676',
    },
  }),
)

const PackageCardItem: FC<PackageCardItemProps> = ({ icon, iconColor, primaryText, text }) => {
  const classes = useStyles()
  return (
    <div className={classes.packagecard_item_textWrapper}>
      <div
        className={`${classes.packagecard_item_iconWrapper} ${classes.packagecard_item_postWhiteSpace} `}
      >
        <img src={icon} width={16} height={16} />
      </div>
      <Typography
        className={clsx([
          classes.packagecard_item_text,
          classes.packagecard_item_bold,
          classes.packagecard_item_grey,
          classes.packagecard_item_fontSize14,
          classes.packagecard_item_lineHeight125,
          classes.packagecard_item_postWhiteSpace,
        ])}
      >
        {primaryText}
      </Typography>
      <Typography
        className={clsx([
          classes.packagecard_item_text,
          classes.packagecard_item_fontSize14,
          classes.packagecard_item_grey,
          classes.packagecard_item_lineHeight125,
        ])}
      >
        {text}
      </Typography>
    </div>
  )
}
export default PackageCardItem
