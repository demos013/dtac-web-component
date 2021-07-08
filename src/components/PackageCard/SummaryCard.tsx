import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import PackageCardBase from './index'
import { PackageCardBaseProps, SummaryCardItemProps } from './package-card'
import SummaryCardItem from './SummaryCardItem'
const useStyles = makeStyles({
  summarycard_root: {
    '& > div > p': {
      color: '#1A1A1A',
      fontWeight: 400,
    },
  },
})

const SummaryCard: FC<PackageCardBaseProps> & {
  Item?: React.FunctionComponent<SummaryCardItemProps>
} = (props) => {
  const {
    header,
    align,
    onClick = () => {},
    className,
    headerBackgroundColor = '#E7EEF4',
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
      className={classes.summarycard_root}
      header={header}
      headerBackgroundColor={headerBackgroundColor}
      rightBottom={rightBottom}
      leftBottom={leftBottom}
      expands={expands}
      isExpands={isExpands}
      expandsItems={expandsItems}
    >
      <div>
        <Grid container spacing={2}>
          {items && items.map((item) => item)}
        </Grid>
      </div>
    </PackageCardBase>
  )
}

SummaryCard.Item = SummaryCardItem
export default SummaryCard
