import clsx from 'clsx';
import React, { FC, memo, ReactNode } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    position: 'relative',
    // border: '5px solid transparent',
    borderRadius: 4,
    border: '1px solid #D6D6D6',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(96, 97, 112, 0.16)',
  },
  selectedBorder: {
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    position: 'relative',
    border: '5px solid transparent',
    borderRadius: 4,
    backgroundClip: 'padding-box',

    '&:after': {
      position: 'absolute',
      top: -5,
      left: -5,
      right: -5,
      bottom: -5,
      background: 'linear-gradient(93.35deg, #19AAF8 0%, #917DCC )',
      content: '""',
      zIndex: -1,
      borderRadius: 4,
    },
  },
  titleLongDesc: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
    width: 'calc(100% - 56px)',
  },
  fullWidthDesc: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
    width: '100%',
  },
  textNormal: {
    fontSize: 14,
    fontWeight: 300,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 700,
  },
  saleTagWrapper: {
    position: 'absolute',
    right: '-16px',
    top: '-10px',
  },
  benefitWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  benefitItem: {
    padding: '0px 8px',
    textAlign: 'center',
    alignSelf: 'center',
  },
}))

interface CategoryListProps {
  net: string
  validity: string
  price: string
  voice: string
  shortDesc: string
  onClick?: () => void
  isSelected: boolean
  saleTag?: string
  children?: ReactNode
}

const PackageList: FC<CategoryListProps> = (props) => {
  const {
    net,
    validity,
    price,
    shortDesc,
    onClick,
    isSelected,
    voice,
    saleTag = false,
    children,
  } = props
  const classes = useStyles()

  const clickHandler = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <>
      {!!children ? (
        children
      ) : (
        <div className={isSelected ? classes.selectedBorder : classes.root} onClick={clickHandler}>
          {saleTag && (
            <div className={classes.saleTagWrapper}>
              <img src={saleTag} width={80} height={70} />
            </div>
          )}

          <Typography className={clsx(saleTag ? classes.titleLongDesc : classes.fullWidthDesc)}>
            {shortDesc}
          </Typography>

          <div className={classes.benefitWrapper}>
            <div className={classes.benefitItem}>
              <Typography className={classes.textBold}>{net}</Typography>
              <Typography className={classes.textNormal}>{' GB '}</Typography>
            </div>
            <div className={classes.benefitItem}>
              <Typography className={classes.textBold}>{voice}</Typography>
              <Typography className={classes.textNormal}>{' mins '}</Typography>
            </div>
            <div className={classes.benefitItem}>
              <Typography className={classes.textBold}>{validity}</Typography>
              <Typography className={classes.textNormal}>{' days '}</Typography>
            </div>
            <div className={classes.benefitItem}>
              <Typography className={classes.textBold}>{price}</Typography>
              <Typography className={classes.textNormal}>{' Baht '}</Typography>
            </div>
            <div className={classes.benefitItem}>
              <img src={'/images/arrow_right_blue.svg'} width={5} height={10} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(PackageList)
