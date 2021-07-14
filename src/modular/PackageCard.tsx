import clsx from 'clsx';
import React, { FC, ReactElement, useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '../components/Button';

type StyleProps = {
  headerBackgroundColor: string | undefined
}
const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 280,
      boxShadow: '0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)',
      borderRadius: 8,
      border: '1px solid #D6D6D6',
      background: ({ headerBackgroundColor }) =>
        headerBackgroundColor ? headerBackgroundColor : '#E7EEF4',
    },
    selected: {
      minWidth: 280,
      borderRadius: 8,
      backgroundClip: 'padding-box',
      backgroundColor: '#fff',
      position: 'relative',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: '26px !important',
      marginTop: 10,
      '&::after': {
        position: 'absolute',
        top: -10,
        left: -10,
        right: -10,
        bottom: -10,
        background: 'linear-gradient(93.35deg, #19AAF8 0%, #917DCC )',
        content: '""',
        zIndex: -1,
        borderRadius: 8,
      },
    },
    header: {
      borderRadius: '8px 8px 0px 0px',
    },
    fontWhite: {
      color: '#fff',
    },
    fontSize12: {
      fontSize: 12,
    },
    fontSize16: {
      fontSize: 16,
    },
    fontSize14: {
      fontSize: 14,
    },
    fontSize44: {
      fontSize: 44,
    },
    bold: {
      fontWeight: 700,
    },
    block: {
      display: 'block',
    },
    grey: {
      color: '#767676',
    },
    lineHeight125: {
      lineHeight: 1.25,
    },
    paddingX: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    paddingY: {
      paddingTop: 16,
      paddingBottom: 16,
    },
    prefixWhiteSpace: { marginLeft: 4 },
    amountWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    preferWrapper: {
      display: 'flex',
    },
    buttonWrapper: {
      paddingTop: 6,
      paddingBottom: 12,
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      '&::after': {
        content: '"\\00a0 \\00a0 "',
      },
    },
    lineThrough: {
      textDecorationLine: 'line-through',
    },
    marketingWrapper: {
      minHeight: 36,
      background: '#F6F4EE',
      borderRadius: 8,
      textAlign: 'center',
      marginBottom: 12,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    background: {
      background: ({ headerBackgroundColor }) =>
        headerBackgroundColor ? headerBackgroundColor : '#E7EEF4',
      borderRadius: ' 0 0 8px 8px',
    },
    foreground: {
      backgroundColor: '#fff',
      borderRadius: ' 0 20px 8px 8px',
    },
    saleTagWrapper: {
      right: 6,
      position: 'absolute',
    },
    widthShortDesc: {
      width: 'calc(100% - 56px)',
    },
  }),
)

export interface PackageCardProps {
  onClick?: () => void
  selected?: boolean
  className?: typeof clsx | string
  headerBackgroundColor?: string
  marketingContent?: ReactElement | string
  saleTag?: boolean
  showSeeDetail?: boolean
  onHandleSeeDetail?: () => void
}

const PackageCard: FC<PackageCardProps> = (props) => {
  const {
    selected = undefined,
    className,
    headerBackgroundColor,
    marketingContent,
    saleTag = false,
    showSeeDetail = true,
    onClick = () => {},
    onHandleSeeDetail,
  } = props
  const classes = useStyles({ headerBackgroundColor: headerBackgroundColor })
  // const { i18n } = useTranslation('common')
  const [componentSelected, setComponentSelected] = useState<Boolean>(false)

  const onCardClick = () => {
    // setComponentSelected(!componentSelected)
    onClick()
  }
  useEffect(() => {
    if (selected) {
      // setComponentSelected(selected)
    }
  }, [selected])

  const onClickSeeDetail = () => {
    if (onHandleSeeDetail) {
      onHandleSeeDetail()
    }
  }

  const renderItem = (iconPath: string, primaryContent: string, content: string) => {
    return (
      <Grid item xs={6}>
        <Grid container>
          <Grid item className={classes.iconWrapper}>
            <img src={iconPath} width={16} height={16} />
          </Grid>

          <Grid item xs={10}>
            <Typography className={clsx(classes.bold, classes.fontSize14, classes.lineHeight125)}>
              {primaryContent}
            </Typography>
            <Typography className={clsx(classes.fontSize12, classes.grey, classes.lineHeight125)}>
              {content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <div
      className={clsx(className, componentSelected ? classes.selected : classes.root)}
      onClick={onCardClick}
    >
      {saleTag && (
        <div className={classes.saleTagWrapper}>
          <img src={'/images/icon/flag-default.svg'} width={80} height={80} />
        </div>
      )}
      <div className={clsx(classes.header, classes.paddingX, classes.paddingY)}>
        <Typography
          className={clsx(
            classes.bold,
            classes.fontSize14,
            headerBackgroundColor ? classes.fontWhite : undefined,
            saleTag ? classes.widthShortDesc : undefined,
          )}
        >
          Net No Limit: Unlimited net at 4Mbps Net No Limit: Unlimited net at 4Mbps Net No Limit:
          Unlimited net at 4Mbps
        </Typography>
        <div>
          <div className={classes.amountWrapper}>
            <Typography
              className={clsx(
                classes.bold,
                classes.fontSize44,
                headerBackgroundColor ? classes.fontWhite : undefined,
              )}
            >
              235
            </Typography>
            <div className={classes.prefixWhiteSpace}>
              <Typography
                className={clsx(
                  classes.fontSize14,
                  classes.lineThrough,
                  headerBackgroundColor ? classes.fontWhite : undefined,
                )}
              >
                250 Baht
              </Typography>
              <div className={classes.amountWrapper}>
                <Typography
                  className={clsx(
                    classes.fontSize14,
                    classes.bold,
                    headerBackgroundColor ? classes.fontWhite : undefined,
                  )}
                >
                  Baht
                </Typography>
                <Typography
                  className={clsx(
                    classes.fontSize12,
                    headerBackgroundColor ? classes.fontWhite : undefined,
                  )}
                >
                  &nbsp;(Excl. VAT)
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.preferWrapper}>
            <Typography
              className={clsx(
                classes.fontSize14,
                headerBackgroundColor ? classes.fontWhite : undefined,
              )}
            >
              Good for HD movies
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.background}>
        <div className={classes.foreground}>
          <CardContent className={clsx(classes.paddingX, classes.paddingY)}>
            <Grid container>
              <Grid item xs={12} className={classes.marketingWrapper}>
                {marketingContent}
              </Grid>
              {renderItem(
                '/images/icon/categories/internet.svg',
                'Unlimited 4 Mbps',
                'High speed internet',
              )}
              {renderItem('/images/icon/categories/validity.svg', '7 days', 'Validity')}
            </Grid>
          </CardContent>
          {showSeeDetail && (
            <CardActions className={clsx(classes.paddingX, classes.buttonWrapper)}>
              <Button
                variant="contained"
                // onClick={() => {
                //   router.push(`${router.asPath}/pack-id`, `${router.asPath}/pack-id`, {
                //     locale: i18n.language,
                //   })
                // }}
                onClick={onClickSeeDetail}
              >
                See details
              </Button>
            </CardActions>
          )}
        </div>
      </div>
    </div>
  )
}
export default PackageCard
