import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Lifestyle } from '@type/flexi'
import clsx from 'clsx'
import TypeSelectionFooter from 'containers/flexi/TypeSelectionFooter'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { Button } from 'src/components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomWrapper: {
      backgroundColor: theme.palette.secondary.main,
      boxShadow:
        '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
      width: '100%',
      padding: '20px 15px',

      position: 'fixed',
      bottom: 0,
    },
    priceContainner: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    summaryPriceWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    summaryPrice: {
      color: '#0C1026',
      fontWeight: 700,
      marginRight: 6,
    },
    currency: {
      color: '#0C1026',
    },
    cutPriceWrapper: {
      display: 'flex',
    },
    cutPrice: {
      textDecorationLine: 'line-through',
    },
    iconWrapper: {
      marginLeft: 3,
      marginRight: 3,
    },
    vatWrapper: {
      marginTop: -5,
    },
    vat: {
      fontSize: 12,
      color: '#1A1A1ADE',
    },
    savingWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    bottomRightWrapper: {
      alignSelf: 'flex-end',
    },
    coinText: {
      fontSize: 16,
      color: '#767676',
    },
    textGrey16: { fontSize: '16px', color: '#767676' },
    imageSelectWrapper: {
      flexWrap: 'wrap',
      display: 'flex',
      marginTop: 16,
    },
    spaceRight8: {
      marginRight: 8,
    },
    spaceTop: {
      marginTop: 10,
    },
  }),
)

export interface PriceDetailProps {
  actualPrice: string
  discountedPercent: string
  discountedPrice: string
}

interface PriceCardProps {
  priceDetail: PriceDetailProps
  onSavePackage?: () => void
  validity: string
  volumn: string
  voice: string
  extraCoin: number
  lifestyle: Lifestyle[]
}

const PriceCard = (props: PriceCardProps) => {
  const { priceDetail, onSavePackage, validity, volumn, voice, extraCoin, lifestyle } = props
  const classes = useStyles()
  const [images, setImages] = useState<string[]>([])
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    var tmp = [] as string[]
    lifestyle.map((ele) => {
      ele.image.map((item) => {
        tmp.push(item)
      })
    })
    setImages(tmp)
  }, [lifestyle])

  const onSaveHandler = () => {
    if (onSavePackage) {
      onSavePackage()
    }
  }

  return (
    <div id="use-layout-footer" className={classes.bottomWrapper}>
      <TypeSelectionFooter validity={validity} volumn={volumn} voice={voice} />
      {images.length !== 0 && (
        <div className={classes.imageSelectWrapper}>
          <div className={classes.spaceRight8}>
            <Image unoptimized src={'/images/icon/app.svg'} width={24} height={24} />
          </div>

          {images.map((ele, index) => {
            return (
              <div className={classes.spaceRight8} key={index.toString()}>
                <Image unoptimized src={ele} width={24} height={24} />
              </div>
            )
          })}
        </div>
      )}
      <div className={clsx(classes.priceContainner, classes.spaceTop)}>
        <div className={classes.summaryPriceWrapper}>
          <Typography variant="h4" className={classes.summaryPrice}>
            {priceDetail.discountedPrice}
          </Typography>
          <Typography variant="h5" className={classes.currency}>
            {t('LBL.CURRENCY.UNIT.BAHT')}
          </Typography>
        </div>
        <div className={classes.savingWrapper}>
          <Typography variant="subtitle1" className={classes.coinText}>
            {t('LBL.FLEXI.GETCOIN')}
          </Typography>
          <div className={classes.iconWrapper}>
            <Image unoptimized src={'/images/icon/point.svg'} width={20} height={20} />
          </div>
          <Typography className={classes.coinText} variant="subtitle1">
            {+priceDetail.discountedPrice * extraCoin || '0'} {t('LBL.FLEXI.COIN.TITLE')}
          </Typography>
        </div>
      </div>
      <div className={classes.priceContainner}>
        <div>
          <div className={classes.cutPriceWrapper}>
            <Typography
              variant="subtitle1"
              className={clsx(classes.cutPrice, classes.textGrey16, classes.spaceRight8)}
            >
              {priceDetail.actualPrice} {t('LBL.CURRENCY.UNIT.BAHT')}
            </Typography>
            <Typography variant="subtitle1" className={classes.textGrey16}>
              {t('LBL.FLEXI.DISCOUNT')} {priceDetail.discountedPercent}%
            </Typography>
          </div>
          <div className={classes.vatWrapper}>
            <Typography variant="subtitle1" className={classes.vat}>
              {`(${t('LBL.FLEXI.VATINCLUDED')})`}
            </Typography>
          </div>
        </div>
        <div className={classes.bottomRightWrapper}>
          <Button
            width={i18n.language == 'mm' ? '138px' : '110px'}
            primary
            onClick={onSaveHandler}
            disabled={priceDetail.actualPrice == undefined || +priceDetail.actualPrice <= 0}
          >
            {t('LOCMSG.LBL.BUYNOW')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(PriceCard)
