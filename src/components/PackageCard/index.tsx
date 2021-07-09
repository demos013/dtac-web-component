import React, { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { PackageCardBaseProps } from './package-card'
import UpSelling from './UpSelling'

type StyleProps = {
  headerBackgroundColor: string | undefined
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    packagecard_base_root: {
      position: 'relative',
      minWidth: 280,
      boxShadow: '0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)',
      borderRadius: 8,
      border: '1px solid #D6D6D6',
      background: ({ headerBackgroundColor }) =>
        headerBackgroundColor ? headerBackgroundColor : '#FFFFFF',
    },
    packagecard_base_vertical: {
      maxWidth: 328,
    },
    packagecard_base_horizonal: {
      maxWidth: 308,
    },
    packagecard_base_header: {
      borderRadius: '8px 8px 0px 0px',
    },
    packagecard_base_fontWhite: {
      color: '#FFF',
    },
    packagecard_base_fontBlue: {
      color: '#007AD0',
    },
    packagecard_base_fontGrey: {
      color: '#767676',
    },
    packagecard_base_fontLeft: {
      textAlign: 'left',
    },
    packagecard_base_fontSize12: {
      fontSize: '12px !important',
    },
    packagecard_base_fontSize14: {
      fontSize: '14px !important',
    },
    packagecard_base_fontSize44: {
      fontSize: '44px !important',
    },
    packagecard_base_bold: {
      fontWeight: 700,
    },
    packagecard_base_block: {
      display: 'block',
    },

    packagecard_base_paddingX: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    packagecard_base_media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    packagecard_base_paddingY: {
      paddingTop: 16,
      paddingBottom: '8px !important',
    },
    packagecard_base_prefixWhiteSpace: { marginLeft: 4 },
    packagecard_base_amountWrapper: {
      display: 'flex',
    },
    packagecard_base_allignItemCenter: {
      alignItems: 'center',
    },
    packagecard_base_allignItemBaseline: {
      alignItems: 'baseline',
    },
    packagecard_base_preferWrapper: {
      display: 'flex',
    },

    packagecard_base_lineThrough: {
      textDecorationLine: 'line-through',
      textAlign: 'left',
    },
    packagecard_base_marketingWrapper: {
      minHeight: 36,
      background: '#F6F4EE',
      borderRadius: 8,
      textAlign: 'center',
      marginBottom: 12,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    packagecard_base_background: {
      background: ({ headerBackgroundColor }) =>
        headerBackgroundColor ? headerBackgroundColor : '#FFFFFF',
      borderRadius: ' 0 0 8px 8px',
    },
    packagecard_base_foreground: {
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: ' 0 20px 8px 8px',
    },
    packagecard_base_saleTagWrapper: {
      top: 16,
      right: -18,
      position: 'absolute',
      '& > img': {
        display: 'block',
      },
    },
    packagecard_base_widthShortDesc: {
      width: 'calc(100% - 56px)',
    },
    packagecard_base_buttomWrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 16,
    },
    packagecard_base_flexStart: {
      justifyContent: 'flex-start',
    },
    packagecard_base_flexEnd: {
      justifyContent: 'flex-end',
    },
    packagecard_base_spaceBetween: {
      justifyContent: 'space-between',
    },
    packagecard_base_expandsWrapper: {
      paddingTop: 16,
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  }),
)
interface ChildrenProps {
  children: ReactNode
}
interface Props extends PackageCardBaseProps, ChildrenProps {}

const PackageCardBase: FC<Props> = (props) => {
  const {
    children,
    header,
    align,
    className,
    headerBackgroundColor,
    saleTag = false,
    rightBottom,
    leftBottom,
    // items,
    isExpands = false,
    expandsItems,
  } = props

  const classes = useStyles({ headerBackgroundColor: headerBackgroundColor })

  const renderBottom = () => {
    return (
      (rightBottom || leftBottom) && (
        <div
          className={clsx(
            classes.packagecard_base_buttomWrapper,
            leftBottom && rightBottom
              ? classes.packagecard_base_spaceBetween
              : leftBottom
              ? classes.packagecard_base_flexStart
              : classes.packagecard_base_flexEnd,
          )}
        >
          {leftBottom}
          {rightBottom}
        </div>
      )
    )
  }

  return (
    <div
      className={clsx([
        className,
        classes.packagecard_base_root,
        align == 'vertical'
          ? classes.packagecard_base_vertical
          : classes.packagecard_base_horizonal,
      ])}
    >
      {saleTag && (
        <div className={classes.packagecard_base_saleTagWrapper}>
          <img src={'/images/icon/flag-default.svg'} width={114} height={58} />
        </div>
      )}
      <div
        className={clsx(
          classes.packagecard_base_header,
          classes.packagecard_base_paddingX,
          classes.packagecard_base_paddingY,
        )}
      >
        {header.title && (
          <Typography
            className={clsx(
              classes.packagecard_base_bold,
              classes.packagecard_base_fontSize14,
              classes.packagecard_base_fontLeft,
              headerBackgroundColor ? classes.packagecard_base_fontWhite : undefined,
              saleTag ? classes.packagecard_base_widthShortDesc : undefined,
            )}
          >
            {header.title}
          </Typography>
        )}

        <div>
          <div
            className={`${classes.packagecard_base_amountWrapper} ${
              header.fullPrice
                ? classes.packagecard_base_allignItemCenter
                : classes.packagecard_base_allignItemBaseline
            }`}
          >
            {header.discountedPrice && (
              <Typography
                className={clsx(
                  classes.packagecard_base_bold,
                  classes.packagecard_base_fontSize44,
                  headerBackgroundColor
                    ? classes.packagecard_base_fontWhite
                    : classes.packagecard_base_fontBlue,
                )}
              >
                {header.discountedPrice}
              </Typography>
            )}
            <div className={classes.packagecard_base_prefixWhiteSpace}>
              {header.fullPrice && (
                <Typography
                  className={clsx(
                    classes.packagecard_base_fontSize14,
                    classes.packagecard_base_lineThrough,
                    headerBackgroundColor ? classes.packagecard_base_fontWhite : undefined,
                  )}
                >
                  {`${header.fullPrice} ${header.unit}`}
                </Typography>
              )}

              <div className={classes.packagecard_base_amountWrapper}>
                {header.unit && (
                  <Typography
                    className={clsx(
                      classes.packagecard_base_fontSize14,
                      headerBackgroundColor
                        ? classes.packagecard_base_fontWhite
                        : classes.packagecard_base_fontBlue,
                    )}
                  >
                    {header.unit}
                  </Typography>
                )}
                {header.vatText && (
                  <Typography
                    className={clsx(
                      classes.packagecard_base_fontSize12,
                      headerBackgroundColor
                        ? classes.packagecard_base_fontWhite
                        : classes.packagecard_base_fontGrey,
                    )}
                  >
                    &nbsp;{header.vatText}
                  </Typography>
                )}
              </div>
            </div>
          </div>
          {(header.caption || header.upSelling) && (
            <div className={classes.packagecard_base_preferWrapper}>
              <Typography
                className={clsx(
                  classes.packagecard_base_fontSize14,
                  headerBackgroundColor ? classes.packagecard_base_fontWhite : undefined,
                )}
              >
                {`${header.caption ? `${header.caption}${header.upSelling ? '/' : ''}` : ''} ${
                  header.upSelling ? header.upSelling : ''
                }`}
              </Typography>
            </div>
          )}
        </div>
      </div>
      <div className={classes.packagecard_base_background}>
        <div className={classes.packagecard_base_foreground}>
          {children}
          {renderBottom()}
          {isExpands && (
            <div className={classes.packagecard_base_expandsWrapper}>{expandsItems}</div>
          )}
        </div>
      </div>
    </div>
  )
}

;(PackageCardBase as any).UpSelling = UpSelling

export default PackageCardBase
