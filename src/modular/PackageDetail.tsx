import React, { memo, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import BuyForOtherSection from './BuyForOtherSection';
import PackageCard from './PackageCard';
import TabTermCond from './TabTermCond';

const useStyles = makeStyles((theme) => ({
  pocketWrapper: {
    padding: 16,
    backgroundColor: '#fff',
  },
  fontSize16Bold: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  packageCardWrapper: {
    marginBottom: 16,
  },
  fontSize12: {
    fontSize: 12,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&::after': {
      content: '"\\00a0 \\00a0 "',
    },
  },
}))

const PackageDetail = () => {
  const classes = useStyles()

  useEffect(() => {}, [])
  return (
    <div className={classes.pocketWrapper}>
      <BuyForOtherSection />
      <Typography className={classes.fontSize16Bold}>{'Package purchasing:'}</Typography>
      <PackageCard
        className={classes.packageCardWrapper}
        marketingContent={
          <>
            <div className={classes.iconWrapper}>
              <img src={'/images/icon/point.svg'} width={20} height={20} />
            </div>
            <Typography className={classes.fontSize12}>
              Get coins when you purchase this package!
            </Typography>
          </>
        }
        saleTag
        showSeeDetail={false}
      />
      <TabTermCond />
    </div>
  )
}

export default memo(PackageDetail)
