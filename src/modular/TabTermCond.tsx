import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import React, { memo, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  container: {
    marginTop: 16,
  },
  termWrapper: {
    padding: 16,
    backgroundColor: '#fff',
    overflowY: 'auto',
    minHeight: 163,

    // TODO: border
    // boxShadow: 'inset 0px 0.5px 4px rgba(0, 0, 0, 0.3)',
    // borderRadius: 4,
  },
  colorGrey: {
    color: '#767676',
    textTransform: 'none',
  },
  tabName: {
    '& .MuiTab-wrapper': {
      fontSize: 16,
      color: 'black',
      textTransform: 'none',
    },
  },
  fontBold: {
    fontWeight: 700,
  },
  fontRegular: {
    fontWeight: 400,
  },
}))
const TabTermCond = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const TabTitle = [
    { name: 'Terms and conditions' },
    { name: 'Available countries' },
    { name: 'Others' },
  ]

  const contentList = [
    '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est.',
    'Available Country',
    'Others',
  ]

  const renderContent = (value: number): JSX.Element => {
    let content = ''
    switch (value) {
      case 0:
        content = contentList[value]
        break
      case 1:
        content = contentList[value]
        break
      default:
        content = contentList[value]
        break
    }
    return (
      <div className={classes.termWrapper}>
        <Typography variant="button" className={classes.colorGrey}>
          {content}
        </Typography>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        scrollButtons="auto"
        variant="scrollable"
        className={classes.tabName}
      >
        {TabTitle.map((ele, index) => {
          return (
            <Tab
              key={index.toString()}
              className={clsx(
                classes.root,
                index === value ? classes.fontBold : classes.fontRegular,
              )}
              label={ele.name}
            />
          )
        })}
      </Tabs>
      {renderContent(value)}
    </div>
  )
}

export default memo(TabTermCond)
