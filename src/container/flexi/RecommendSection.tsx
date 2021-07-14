import React, { FC, memo, ReactElement, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { DefaultPack } from '@type/flexi'
import clsx from 'clsx'
import { onClickGTMReccomendIcon } from 'gtm/flexi'
import { isNil } from 'ramda'

type Props = {
  defaultPackList?: DefaultPack[]
  onChange: (defaultPack: DefaultPack) => void
  disabled?: boolean
  selectedDefaultPack: DefaultPack
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '16px 0 30px 0',
      backgroundColor: '#F5F5F5',
      position: 'relative',
      borderRadius: '30px 0 30px 0',
    },
    recommendWrapper: {
      marginLeft: theme.spacing(2),
    },
    title: {
      fontWeight: 700,
    },

    imageContainer: {
      overflowX: 'scroll',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
    },
    imgActive: {
      '& > div': {
        border: '2px solid #19aaf8',
      },
    },
    imgWrapper: {
      display: 'inline-flex',
      boxShadow: '0 2px 6px rgb(0 0 0 / 14%)',
      marginRight: 12,
      borderRadius: 10,
      '& > div': {
        borderRadius: 10,
      },
    },
    firstBackground: {
      backgroundColor: '#F5F5F5',
      borderRadius: '0 0 30px 0',
    },
    secondBackgroud: {
      backgroundColor: '#e6e9f4',
      borderRadius: '30px 0 0 0',
    },
  }),
)

const RecommendSection: FC<Props> = ({
  defaultPackList = [],
  onChange,
  disabled = false,
  selectedDefaultPack,
}): ReactElement => {
  const classes = useStyles()

  const [selectedPackActive, setSelectedPackActive] = useState<string>('0')

  const { t } = useTranslation('common')

  useEffect(() => {
    if (!isNil(selectedDefaultPack)) {
      setSelectedPackActive(selectedDefaultPack?.priority)
    }
  }, [selectedDefaultPack])

  const onClick = (selectedPack: DefaultPack) => {
    onClickGTMReccomendIcon(
      +selectedPack.priority + 1,
      defaultPackList?.length,
      selectedPack.masterKey,
      selectedPack.name,
      selectedPack.p,
    )
    setSelectedPackActive(selectedPack.priority)
    onChange(selectedPack)
  }

  return (
    <div className={classes.firstBackground}>
      <div className={classes.secondBackgroud}>
        <div className={classes.root}>
          <div className={classes.recommendWrapper}>
            <Typography className={classes.title} variant="h5">
              {t('LBL.FLEXI.ADDONPACK.TITLE')}
            </Typography>
            <div className={classes.imageContainer}>
              {defaultPackList?.map((pack) => {
                if (pack != null) {
                  return (
                    <div
                      key={pack.priority}
                      className={
                        !disabled && selectedPackActive == pack.priority
                          ? clsx(classes.imgWrapper, classes.imgActive)
                          : classes.imgWrapper
                      }
                      onClick={() => onClick(pack)}
                    >
                      <Image unoptimized src={pack.image} width={141} height={85} />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(RecommendSection)
