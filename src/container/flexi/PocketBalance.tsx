import React, { FC, memo } from 'react'
import { useTranslation } from 'next-i18next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { MainPocket } from '@type/read-vas'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      backgroundColor: '#F5F5F5',
      boxShadow: '0px 0px 11px rgba(67, 67, 67, 0.2)',
      position: 'relative',
      zIndex: 1,
    },
    balanceWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    balance: {
      fontSize: 16,
    },
    dateWrapper: {
      fontSize: 12,
      color: '#767676',
    },
  }),
)

interface PocketBalanceProps {
  mainPocket?: MainPocket
}

const PocketBalance: FC<PocketBalanceProps> = (props) => {
  const classes = useStyles()
  const { mainPocket } = props
  const { t } = useTranslation('common')

  return (
    <div className={classes.root}>
      <div className={classes.balanceWrapper}>
        <Typography className={classes.balance}>{t('LBL.FLEXI.REMAINBALANCE')}</Typography>
        <Typography className={classes.balance} variant="subtitle2">
          {mainPocket?.balance === undefined ? '-' : mainPocket.balance}{' '}
          {t('LBL.CURRENCY.UNIT.BAHT')}
        </Typography>
      </div>
      <Typography className={classes.dateWrapper}>
        {t('LBL.FLEXI.VALIDUNTIL.TITLE')}{' '}
        {mainPocket?.expireDate === undefined
          ? '-'
          : `${mainPocket.expireDate} (${mainPocket?.remainingDay || 0} ${t(
              'LOCMSG.LBL.REFILL.UNIT.DAY',
            )})`}
      </Typography>
    </div>
  )
}

export default memo(PocketBalance)
