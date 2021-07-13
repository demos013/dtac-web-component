import React, { FC, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
// import silverMemberImage from '../../../public/images/silver-member.svg'
import welcomeImage from '../../../public/images/welcome-member.svg'

type StyleProps = {
  backgroundColor: string | undefined
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    packagecard_upselling_marketingWrapper: {
      minHeight: 36,
      backgroundColor: ({ backgroundColor }) => (backgroundColor ? backgroundColor : '#F6F4EE'),
      borderRadius: 8,
      textAlign: 'center',
      marginBottom: 12,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    packagecard_upselling_relative: {
      position: 'relative',
    },
    packagecard_upselling_memberWrapper: {
      position: 'absolute',
      top: -10,
    },
  }),
)

interface UpSellingProps {
  text: string
  backgroundColor: string | undefined
  mode: 'welcome' | 'silver' | 'gold' | 'platinum' | undefined
}
const UpSelling: FC<UpSellingProps> = ({ text, backgroundColor, mode }) => {
  const [bgColor, setBGColor] = useState<string>('#F6F4EE')
  const classes = useStyles({ backgroundColor: bgColor })

  useEffect(() => {
    if (mode) {
      switch (mode) {
        case 'welcome':
          setBGColor('red')
          break
        case 'silver':
          setBGColor('')
          break
        case 'gold':
          setBGColor('')
          break
        case 'platinum':
          setBGColor('')
          break
        default:
          setBGColor('#F6F4EE')
      }
      return
    }

    if (backgroundColor) {
      setBGColor(backgroundColor)
    }
  }, [mode])

  return mode ? (
    <Grid
      item
      xs={12}
      className={clsx(
        classes.packagecard_upselling_marketingWrapper,
        classes.packagecard_upselling_relative,
      )}
    >
      {text}
      <div className={classes.packagecard_upselling_memberWrapper}>
        <img src={welcomeImage} />
      </div>
    </Grid>
  ) : (
    <Grid item xs={12} className={classes.packagecard_upselling_marketingWrapper}>
      {text}
    </Grid>
  )
}
export default UpSelling
