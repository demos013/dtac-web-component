import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import PackageCardBase from './index'
import { PackageCardBaseProps, PackageCardItemProps } from './package-card'
import Item from './PackageCardItem'

const useStyles = makeStyles({
  packagecard_root: {
    '& > div > p': {
      fontWeight: 700,
    },
  },
})

const PackageCard: FC<PackageCardBaseProps> & {
  Item?: React.FunctionComponent<PackageCardItemProps>
} = (props) => {
  const {
    header,
    align,
    onClick = () => {},
    className,
    headerBackgroundColor,
    saleTag = false,
    items,
    rightBottom,
    leftBottom,
    expands,
    isExpands,
    expandsItems,
  } = props
  const classes = useStyles()
  return (
    <PackageCardBase
      className={classes.packagecard_root}
      header={header}
      headerBackgroundColor={headerBackgroundColor}
      rightBottom={rightBottom}
      leftBottom={leftBottom}
      expands={expands}
      isExpands={isExpands}
      expandsItems={expandsItems}
    >
      <div>{items && items.map((item) => item)}</div>
    </PackageCardBase>
  )
}

PackageCard.Item = Item
export default PackageCard
