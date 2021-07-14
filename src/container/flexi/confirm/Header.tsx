import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useRecoilValue } from 'recoil'
import { selectedPhoneNumberState } from 'recoils/flexi'
import { addPunctuationPhoneNumber, removeLocalePhoneNumber } from 'utils/common'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    // borderRadius: '30px 0 30px 0',
    // backgroundColor: '#fff',
  },
  phoneWrapper: { paddingTop: 15, color: '#1a1a1a', opacity: 0.6 },
  phoneText: {
    fontSize: 16,
  },
}))

const ConfrimHeader = (): ReactElement => {
  const phoneNumber = useRecoilValue(selectedPhoneNumberState)
  const { t } = useTranslation('common')
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">{t('LBL.BTN.CONFIRM')}</Typography>
      <div className={classes.phoneWrapper}>
        <Typography className={classes.phoneText} variant="body1">
          {`${t('LBL.FLEXI.SUBSCRIBE.NUMBER')} ${addPunctuationPhoneNumber(
            removeLocalePhoneNumber(phoneNumber),
          )}`}
        </Typography>
      </div>
    </div>
  )
}

export default ConfrimHeader
