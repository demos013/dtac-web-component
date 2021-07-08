import { storiesOf } from '@storybook/react'
import { useState } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Button, PackageCard, SummaryCard } from '../components'

const stories = storiesOf('Package Card', module)
const styleBox: React.CSSProperties = { display: 'flex', flexWrap: 'wrap' }
const item: React.CSSProperties = {
  padding: '2px 30px 5px 2px',
  // boxizing: 'border-box',
  flexGrow: 1,
  flexBasis: 'calc(25% - 10px)',
  textAlign: 'center',
}

const useStyles = makeStyles({
  expandsWrapper: {
    display: 'flex',
    cursor: 'pointer',
    '& > p': {
      fontSize: 14,
      color: '#007AD0',
    },
    '& > svg': {
      fill: '#007AD0',
    },
  },
})

const items = [
  {
    icon: '/images/icon/internet.svg',
    upperText: '10 GB',
    lowerText: 'High speed internet',
    // lowerText: 'မြန်နှုန်းမြင့်အင်တာနက်'
  },
  {
    icon: '/images/icon/calls.svg',
    upperText: '600 min',
    lowerText: 'Talk time',
  },
  {
    icon: '/images/icon/calendar.svg',
    upperText: '14 days',
    lowerText: 'Valadity',
  },
  {
    icon: '/images/icon/internet.svg',
    upperText: '10 GB',
    lowerText: 'High speed internet',
    // lowerText: 'မြန်နှုန်းမြင့်အင်တာနက်'
  },
  {
    icon: '/images/icon/calls.svg',
    upperText: '600 min',
    lowerText: 'Talk time',
  },
  {
    icon: '/images/icon/calendar.svg',
    upperText: '14 days',
    lowerText: 'Valadity',
  },
]

stories.add('Package Card', () => {
  const Item = PackageCard.Item
  const classes = useStyles()
  const [isExpand, setIsExpand] = useState<boolean>(false)
  return (
    <div style={styleBox}>
      <div style={item}>
        <PackageCard
          header={{
            title: 'dtac Go+ 2199 unlimited internet',
            discountedPrice: '235',
            fullPrice: '250',
            unit: 'Baht',
            caption: 'Naruk ja',
            upSelling: 'Jing ror',
            vatText: '(excl. VAT)',
          }}
          items={items.map((item) => (
            <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
          ))}
          rightBottom={
            <Button variant="contained" onClick={() => {}}>
              Get
            </Button>
          }
          leftBottom={
            <div className={classes.expandsWrapper} onClick={() => setIsExpand(!isExpand)}>
              <Typography>See more details</Typography>
              {isExpand ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
          isExpands={isExpand}
          expandsItems={
            <>
              {items.map((item) => (
                <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
              ))}
            </>
          }
        >
          <div>123456789</div>
        </PackageCard>
      </div>
    </div>
  )
})

stories.add('Summary Card', () => {
  const Item = SummaryCard.Item
  // const UpSelling = PackageCard.UpSelling
  const classes = useStyles()
  const [isExpand, setIsExpand] = useState<boolean>(false)
  return (
    <div style={styleBox}>
      <div style={item}>
        <SummaryCard
          header={{ title: 'dtac Go+ 2199 unlimited internet' }}
          items={items.map((item) => (
            <Item icon={item.icon} upperText={item.upperText} lowerText={item.lowerText} />
          ))}
          rightBottom={
            <Button variant="contained" onClick={() => {}}>
              Get
            </Button>
          }
          leftBottom={
            <div className={classes.expandsWrapper} onClick={() => setIsExpand(!isExpand)}>
              <Typography>See more details</Typography>
              {isExpand ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
          isExpands={isExpand}
          expandsItems={
            <>
              <Typography>qwertyui</Typography>
              <Typography>qwertyui</Typography>
              <Typography>qwertyui</Typography>
              <Typography>qwertyui</Typography>
              <Typography>qwertyui</Typography>
              <Typography>qwertyui</Typography>
            </>
          }

          // headerBackgroundColor="#fff"
        />
      </div>
    </div>
  )
})
