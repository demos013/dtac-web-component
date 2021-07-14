import React, { FC, memo } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginLeft: '5px',
    },
    newWrapper: {
      background: '#99D9FF',
      borderRadius: '10px 10px 0px 0px',
      padding: '10px 16px 5px',
    },
    imageSize: {
      minHeight: 70,
      maxHeight: 80,
      width: '100%',
    },
    lifestyleContainer: {
      padding: '0 8px',
      marginBottom: 24,
    },
    displayFlex: {
      display: 'flex',
    },
  }),
)

const LifestyleHeader: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <>
      <div className={clsx(classes.newWrapper, classes.displayFlex)}>
        <Image unoptimized src={'/images/icon/app.svg'} width={24} height={24} />
        <Typography className={classes.title}>{t('LBL.FLEXI.LIFESTYLE.TITLE')}</Typography>
      </div>
      <div className={classes.displayFlex}>
        <img src={'/images/style-banner.jpg'} className={classes.imageSize} />
      </div>
    </>
  )
}

export default memo(LifestyleHeader)
