import React, { ReactElement, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { is } from 'ramda'
import { addPunctuationPhoneNumber, removeLocalePhoneNumber } from 'utils/common'
import dayjs from 'utils/dayjs'

type StyleProps = {
  locale: string
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  background: {
    width: '100%',
    display: 'block',
  },
  container: {
    position: 'relative',
    display: 'block',
  },
  center: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  whiteText: {
    color: theme.palette.secondary.main,
  },
  bold: {
    fontWeight: 700,
    lineHeight: ({ locale }) => (locale == 'mm' ? 1.735 : 1.235),
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: '-7px',
  },
  coinBox: {
    display: 'flex',
    height: 44,
    justifyContent: 'center',
    background: 'rgba(230,233,244,0.5)',
  },
  coinText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  iconWrapper: {
    display: 'inline-flex',
    marginRight: 6,
  },
  timeBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0 10px 0',
  },
  timeText: {
    justifyContent: 'center',
    color: 'rgba(26,26,26,0.6)',
  },
  calendarWrapper: {
    display: 'inline-flex',
    marginRight: 5,
    color: 'rgba(26,26,26,0.6)',
  },
}))

const ThankyouHeader = (): ReactElement => {
  const { query } = useRouter()
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    dayjs.locale(i18n.language == 'mm' ? 'my' : i18n.language)
  }, [i18n.language])

  const classes = useStyles({ locale: i18n.language })
  return (
    <div>
      <div className={classes.container}>
        <img className={classes.background} src={'/images/thankyou-bg.svg'} alt="next" />
        <div className={classes.center}>
          <Typography className={clsx(classes.bold, classes.whiteText)} variant="h4">
            {`${t('LBL.FLEXI.THANKYOU.TITLE')}!`}
          </Typography>
          <Typography className={clsx(classes.whiteText, classes.phoneNumber)} variant="subtitle1">
            {addPunctuationPhoneNumber(removeLocalePhoneNumber(query?.subrnumb?.toString()), ' ')}
          </Typography>
        </div>
      </div>
      {query?.rewardMsgList != undefined && (
        <div className={classes.coinBox}>
          <div className={classes.iconWrapper}>
            <Image unoptimized width={20} height={20} src={'/images/icon/point.svg'} />
          </div>
          <Typography className={classes.coinText} variant="subtitle1">
            {is(Array, query?.rewardMsgList) ? query?.rewardMsgList[0] : query?.rewardMsgList}
          </Typography>
        </div>
      )}
      <div className={classes.timeBox}>
        <div className={classes.calendarWrapper}>
          <Image unoptimized width={16} height={16} src={'/images/icon/calendar.svg'} />
        </div>
        <Typography className={classes.timeText} variant="button">
          {dayjs(query?.subscribeDttm?.toString()).format('D MMMM YYYY H:mm')}
        </Typography>
      </div>
    </div>
  )
}

export default ThankyouHeader
