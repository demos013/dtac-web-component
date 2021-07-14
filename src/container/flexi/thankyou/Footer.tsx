import React, { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Button } from 'components/index'
import { onGTMClickButton } from 'gtm/flexi'
import { parseCookies } from 'nookies'
import { defineUrlWithLanguage, isBrowser } from 'utils/common'
import { getDDCHParamsByCookies } from 'utils/cookies'
import Bridge from 'utils/web-bridge'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    minHeight: 20,
  },
  containter: {
    padding: '20px 15px',
  },
}))

const Footer = (): ReactElement => {
  const classes = useStyles()
  const router = useRouter()
  const cookies = parseCookies()
  const { t } = useTranslation('common')
  const bridge: Bridge = new Bridge()

  const onClickBack = () => {
    onGTMClickButton('back_home')
    router.push(defineUrlWithLanguage(getDDCHParamsByCookies()?.backurl as string))
  }

  const onClickRedeem = () => {
    onGTMClickButton('get_code')
    if (isBrowser()) {
      router.push(cookies?.giftDeepLink)
      setTimeout(() => {
        router.push('https://dtac.onelink.me/TDOR/7fe8f284')
      }, 1000)
      return
    }

    bridge.callHandler('goToGift', { deeplink: cookies?.giftDeepLink })
  }

  return (
    <div id="use-layout-footer" className={classes.root}>
      <div className={classes.containter}>
        {cookies?.giftStatus == 'Y' ? (
          <Button primary onClick={onClickRedeem}>
            {t('LBL.FLEXI.THANKYOU.BTN.CODE')}
          </Button>
        ) : (
          <Button primary onClick={onClickBack}>
            {t('LOCMSG.LBL.CAMPAIGN.EXPIRED.BACK.TO.MAIN.PAGE')}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Footer
