import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { FC, memo } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typeTitle: {
      marginLeft: '6px',
      fontSize: '16px',
      fontWeight: 700,
    },
    typeWrapper: {
      display: 'flex',
    },
    validityColor: {
      color: '#CC9D6F',
    },
    volumnColor: {
      color: '#83BA84',
    },
    voiceColor: {
      color: '#917DCC',
    },
    spaceRight: {
      marginRight: 21,
    },
  }),
)

interface TypeSelectionFooterProps {
  validity: string
  volumn: string
  voice: string
}

const TypeSelectionFooter: FC<TypeSelectionFooterProps> = (props) => {
  const { validity, volumn, voice } = props
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <div className={classes.typeWrapper}>
      <div className={clsx(classes.typeWrapper, classes.spaceRight)}>
        <Image unoptimized src={'/images/icon/day.svg'} width={21} height={22} />
        <Typography className={clsx(classes.typeTitle, classes.validityColor)}>
          {validity} {t('LOCMSG.LBL.REFILL.UNIT.DAY')}
        </Typography>
      </div>

      <div className={clsx(classes.typeWrapper, classes.spaceRight)}>
        <Image unoptimized src={'/images/icon/internet.svg'} width={21} height={22} />
        <Typography className={clsx(classes.typeTitle, classes.volumnColor)}>
          {volumn} GB
        </Typography>
      </div>

      <div className={clsx(classes.typeWrapper, classes.spaceRight)}>
        <Image unoptimized src={'/images/icon/telephone.svg'} width={21} height={22} />
        <Typography className={clsx(classes.typeTitle, classes.voiceColor)}>
          {voice} {t('LOCMSG.LBL.REFILL.UNIT.MINUTE')}
        </Typography>
      </div>
    </div>
  )
}

export default memo(TypeSelectionFooter)
