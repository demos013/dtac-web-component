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
  youCanChoose: {
    color: '#767676',
    fontSize: 14,
    marginBottom: 8,
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

const expandsItem = [
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
  {
    icon: '/images/icon/correct.svg',
    text: 'Free! Youtube at maximum speed',
  },
]

stories.add('Package Card', () => {
  const Item = PackageCard.Item
  const classes = useStyles()
  const [isExpand1, setIsExpand1] = useState<boolean>(false)
  const [isExpand2, setIsExpand2] = useState<boolean>(false)
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
          leftBottom={
            <div className={classes.expandsWrapper} onClick={() => setIsExpand1(!isExpand1)}>
              <Typography>See more details</Typography>
              {isExpand1 ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
          isExpands={isExpand1}
          expandsItems={
            <>
              <Typography className={classes.youCanChoose}>You can choose: </Typography>
              {expandsItem.map((item) => (
                <Item icon={item.icon} text={item.text} />
              ))}
              <div style={{ textAlign: 'center' }}>
                <a style={{ color: '#007AD0', fontWeight: 700 }} href="https://www.w3schools.com">
                  Go to Gift page
                </a>
              </div>
            </>
          }
        />
      </div>
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
        />
      </div>
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
          headerBackgroundColor="linear-gradient(93.35deg, #19AAF8 0%, #917DCC 100%)"
          items={items.map((item) => (
            <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
          ))}
          rightBottom={
            <Button variant="contained" onClick={() => {}}>
              Get
            </Button>
          }
          leftBottom={
            <div className={classes.expandsWrapper} onClick={() => setIsExpand2(!isExpand2)}>
              <Typography>See more details</Typography>
              {isExpand2 ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
          isExpands={isExpand2}
          expandsItems={
            <>
              <Typography className={classes.youCanChoose}>You can choose: </Typography>
              {expandsItem.map((item) => (
                <Item icon={item.icon} text={item.text} />
              ))}
              <div style={{ textAlign: 'center' }}>
                <a style={{ color: '#007AD0', fontWeight: 700 }} href="https://www.w3schools.com">
                  Go to Gift page
                </a>
              </div>
            </>
          }
        />
      </div>

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
          headerBackgroundColor="linear-gradient(96.03deg, #143F6C 0%, #005E8B 100%)"
          items={items.map((item) => (
            <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
          ))}
          rightBottom={
            <Button variant="contained" onClick={() => {}}>
              Get
            </Button>
          }
          leftBottom={
            <div className={classes.expandsWrapper}>
              <Typography>See more details</Typography>
              {isExpand2 ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
        />
      </div>
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
          headerBackgroundColor="linear-gradient(96.03deg, #929497 0%, #BBBDBF 100%)"
          items={items.map((item) => (
            <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
          ))}
          rightBottom={
            <Button variant="contained" onClick={() => {}}>
              Get
            </Button>
          }
          leftBottom={
            <div className={classes.expandsWrapper}>
              <Typography>See more details</Typography>
              {isExpand2 ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
        />
      </div>
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
          headerBackgroundColor="linear-gradient(96.03deg, #D9A651 0%, #E1C680 100%)"
          items={items.map((item) => (
            <Item icon={item.icon} primaryText={item.upperText} text={item.lowerText} />
          ))}
        />
      </div>
    </div>
  )
})

//Summarycard
stories.add('Summary Card', () => {
  const Item = SummaryCard.Item
  const ExpandItem = SummaryCard.ExpandItem
  // const UpSelling = PackageCard.UpSelling
  const classes = useStyles()
  const [isExpand, setIsExpand] = useState<boolean>(false)
  return (
    <div style={styleBox}>
      <div style={item}>
        <SummaryCard
          header={{ title: 'dtac Go+ 2199 unlimited internet' }}
          items={items.slice(3).map((item) => (
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
              <Typography className={classes.youCanChoose}>You can choose: </Typography>
              {expandsItem.map((item) => (
                <ExpandItem icon={item.icon} text={item.text} />
              ))}
              <div style={{ textAlign: 'center' }}>
                <a style={{ color: '#007AD0', fontWeight: 700 }} href="https://www.w3schools.com">
                  Go to Gift page
                </a>
              </div>
            </>
          }

          // headerBackgroundColor="#fff"
        />
      </div>

      <div style={item}>
        <SummaryCard
          header={{ title: 'dtac Go+ 2199 unlimited internet' }}
          items={items.map((item) => (
            <Item icon={item.icon} upperText={item.upperText} lowerText={item.lowerText} />
          ))}
          leftBottom={
            <div className={classes.expandsWrapper} onClick={() => setIsExpand(!isExpand)}>
              <Typography>See more details</Typography>
              {isExpand ? <ExpandLessIcon fill="blue" /> : <ExpandMoreIcon fill="blue" />}
            </div>
          }
          isExpands={isExpand}
          expandsItems={
            <>
              <Typography className={classes.youCanChoose}>You can choose: </Typography>
              {expandsItem.map((item) => (
                <ExpandItem icon={item.icon} text={item.text} />
              ))}
              <div style={{ textAlign: 'center' }}>
                <a style={{ color: '#007AD0', fontWeight: 700 }} href="https://www.w3schools.com">
                  Go to Gift page
                </a>
              </div>
            </>
          }

          // headerBackgroundColor="#fff"
        />
      </div>
    </div>
  )
})
