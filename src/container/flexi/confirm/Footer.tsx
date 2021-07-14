import React, { memo, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import { postFlexiData } from '@services/flexi'
import clsx from 'clsx'
import { Button } from 'components/index'
import Popup from 'components/Popup'
import {
    onClickGTMCancelFlexiPack, onClickGTMSubscribtionFlexiPack, onGTMSubscriptionFlexiPackError
} from 'gtm/flexi'
import nookies from 'nookies'
import { isEmpty } from 'ramda'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedFlexiDataState, selectedLifestyleState, selectedPackState } from 'recoils/flexi'
import { LoadingState } from 'recoils/loading'
import { getDDCHParamsByCookies } from 'utils/cookies'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    maxHeight: 160,
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    padding: '20px 15px',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
  },
  textBox: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-end',
  },
  rightWrapper: {
    justifyContent: 'flex-end',
  },
  iconWrapper: {
    marginLeft: 3,
    marginRight: 3,
  },
  pointText: {
    fontSize: 16,
    color: '#767676',
  },
  costText: {
    marginRight: 6,
    fontWeight: 700,
    lineHeight: 1.135,
    color: '#0C1026',
  },
  currency: {
    marginRight: 3,
    color: '#0C1026',
  },
  tax: {
    marginTop: -8,
  },
  discountText: {
    color: '#767676',
    fontSize: 16,
  },
  taxText: {
    fontSize: 12,
  },
  buttonBox: {
    marginTop: 10,
  },
}))

const Footer = () => {
  const classes = useStyles()
  const router = useRouter()
  const [selectedPack, setSelectedPack] = useRecoilState(selectedPackState)
  const selectedLifestyle = useRecoilValue(selectedLifestyleState)
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [popupMessage, setPopUpMessage] = useState<string>('')
  const { t, i18n } = useTranslation('common')
  const [loading, setLoading] = useRecoilState(LoadingState)
  const flexiData = useRecoilValue(selectedFlexiDataState)
  const [disableSubscription, setDisableSubscription] = useState<boolean>(false)

  useEffect(() => {
    if (isEmpty(selectedPack)) {
      setDisableSubscription(true)
    }
  }, [selectedPack])

  const onClickSaveFlexi = async () => {
    const ddchParams = getDDCHParamsByCookies()
    const selectedLifestyleChar = [...selectedLifestyle]
    setLoading(true)

    const response = await postFlexiData(
      {
        acceptWarnFlag: false,
        packcode: selectedPack?.packageCode,
        platform: ddchParams?.platform || '',
        device: ddchParams?.device || '',
        osversion: ddchParams?.osversion || '',
        sdkversion: ddchParams?.sdkversion || '',
        resolution: ddchParams?.resolution || '',
        trackingId: ddchParams?.trackingId || '',
        price: +selectedPack?.priceDetail?.discountedPrice,
        packtype: selectedPack?.packType,
        validity: +selectedPack?.validity,
        qttyVoice: +selectedPack?.voice,
        qttyData: +selectedPack?.internetVolume,
        benefitSocial: selectedLifestyleChar[0] == '1' ? 'Y' : 'N',
        benefitEntertain: selectedLifestyleChar[1] == '1' ? 'Y' : 'N',
        benefitGame: selectedLifestyleChar[2] == '1' ? 'Y' : 'N',
        benefitShopping: selectedLifestyleChar[3] == '1' ? 'Y' : 'N',
        rewardPoint: selectedPack?.rewardPoint * selectedPack?.extraCoin,
      },
      i18n.language.toUpperCase(),
    )
    setLoading(false)
    if (response?.status?.statusType === 'S') {
      onClickGTMSubscribtionFlexiPack(
        selectedPack?.masterKey,
        flexiData,
        selectedPack?.isDefaultPack,
        +selectedPack?.priceDetail?.discountedPrice,
        selectedPack?.mainPocket?.balance,
        selectedPack?.validity,
      )

      nookies.set(null, 'giftDeepLink', response?.data?.giftDeeplink as string, {
        maxAge: 15 * 60,
        path: '/',
      })
      nookies.set(null, 'giftStatus', response?.data?.giftStatus as string, {
        maxAge: 15 * 60,
        path: '/',
      })

      nookies.set(
        null,
        'crosssellResult',
        response?.data?.crosssellResult ? JSON.stringify(response?.data?.crosssellResult) : '',
        {
          maxAge: 15 * 60,
          path: '/',
        },
      )

      router.push(
        {
          pathname: '/flexi/thankyou',
          query: {
            ...response?.data,
            crosssellResult: undefined,
            transactionID: response?.status?.transactionId,
          },
        },
        '/flexi/thankyou',
      )

      return
    }
    setPopupVisible(true)
    setPopUpMessage(response?.data?.resultmsg || t('LBL.FLEXI.DEFAULT.ERROR.MESSAGE'))
    onGTMSubscriptionFlexiPackError(response?.status?.errorMessage || 'Server not response')
  }

  const onClickCancel = () => {
    onClickGTMCancelFlexiPack(
      selectedPack?.masterKey,
      flexiData,
      selectedPack?.isDefaultPack,
      +selectedPack?.priceDetail?.discountedPrice,
      selectedPack?.mainPocket?.balance,
      selectedPack?.validity,
    )
    router.back()
  }

  return (
    <div id="use-layout-footer" className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={7} className={classes.textBox}>
          <Typography variant="h4" className={classes.costText}>
            {selectedPack?.priceDetail?.discountedPrice || 0}
          </Typography>
          <Typography variant="h5" className={classes.currency}>
            {t('LBL.CURRENCY.UNIT.BAHT')}
          </Typography>
          <Typography variant="subtitle1" className={classes.discountText}>
            {`${t('LBL.FLEXI.DISCOUNT')} ${selectedPack?.priceDetail?.discountedPercent || 0}%`}
          </Typography>
        </Grid>
        <Grid item xs={5} className={clsx(classes.textBox, classes.rightWrapper)}>
          <Typography variant="subtitle1" className={classes.pointText}>
            {t('LBL.FLEXI.GETCOIN')}
          </Typography>
          <div className={classes.iconWrapper}>
            <Image unoptimized width={20} height={20} src={'/images/icon/point.svg'} />
          </div>
          <Typography variant="subtitle1" className={classes.pointText}>
            {`${selectedPack?.rewardPoint * selectedPack?.extraCoin || 0} ${t(
              'LBL.FLEXI.COIN.TITLE',
            )}`}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.tax}>
          <Typography variant="caption" className={classes.taxText}>
            {`(${t('LBL.FLEXI.VATINCLUDED')})`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.buttonBox}>
        <Grid item xs={6}>
          <Button onClick={onClickCancel}>{t('LOCMSG.LBL.BTN.CANCEL')}</Button>
        </Grid>
        <Grid item xs={6}>
          <Button primary onClick={onClickSaveFlexi} disabled={loading || disableSubscription}>
            {t('LBL.BTN.CONFIRM')}
          </Button>
        </Grid>
      </Grid>
      <Popup
        title={t('LBL.FLEXI.DEFAULT.ERROR.TITLE')}
        open={popupVisible}
        desc={popupMessage}
        onClose={() => setPopupVisible(false)}
        align="center"
        buttonName={t('LOCMSG.LBL.BTN.CLOSE')}
      />
    </div>
  )
}

export default memo(Footer)
