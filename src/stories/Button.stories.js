import { storiesOf } from '@storybook/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, IconButton } from '../components'

import './styles.css'

const stories = storiesOf('Button', module)
const styleBox = { display: 'flex', flexWrap: 'wrap' }
const item = {
  padding: '2px 30px 5px 2px',
  boxizing: 'border-box',
  flexGrow: 1,
  flexBasis: 'calc(25% - 10px)',
}
const useStyles = makeStyles((theme) => ({
  gamingnation: {
    color: '#0C1026',
    backgroundColor: '#FFCB96',
  },
  gamingnationOutlined: {
    color: '#FFCB96',
    backgroundColor: '#FFFFFF',
    border: '1px solid #FFCB96',
  },
  iconButtonExclusive: {
    background: '#143F6C',
    '&:active': {
      background: '#0c2345',
    },
    '&:hover': {
      background: '#0c2345',
    },
  },
}))
stories.add('Button', () => {
  const classes = useStyles()
  return (
    <div style={styleBox}>
      <div style={item}>
        <Button variant="contained">Button</Button>
      </div>
      <div style={item}>
        <Button>Button</Button>
      </div>
      <div style={item}>
        <Button variant="outlined">Button</Button>
      </div>
      <div style={item}>
        <Button variant="contained" disabled>
          Button
        </Button>
      </div>
      <div style={item}>
        <Button className={classes.gamingnation}>Button</Button>
      </div>
      <div style={item}>
        <Button className={classes.gamingnationOutlined}>Button</Button>
      </div>
    </div>
  )
})

stories.add('Icon Button', () => {
  const classes = useStyles()
  return (
    <div style={styleBox}>
      <div style={item}>
        <IconButton variant="contained">
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton>
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="outlined" text={`Network Check & Share`}>
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton disabled>
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton text="PlatBlue exclusive" className={classes.iconButtonExclusive}>
          <img src="/images/p_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton disabled className={classes.iconButtonExclusive}>
          <img src="/images/p_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="outlined" size="large" text="Lorem ipsum">
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="contained" size="large" text="Lorem ipsum">
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="contained" size="large" text="Lorem ipsum" disabled>
          <img src="/images/circle_icon.svg" />
        </IconButton>
      </div>
    </div>
  )
})
