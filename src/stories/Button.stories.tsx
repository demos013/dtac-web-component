import { storiesOf } from '@storybook/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Button, IconButton } from '../components'
import './styles.css'

const stories = storiesOf('Button', module)
const styleBox = { display: 'flex' as 'flex', flexWrap: 'wrap' as 'wrap' }
const item = {
  padding: '2px 30px 16px 2px',
  boxizing: 'border-box',
  flexGrow: 1,
  flexBasis: 'calc(25% - 10px)',
  textAlign: 'center' as 'center',
}
const useStyles = makeStyles((theme) => ({
  gamingnation: {
    color: '#0C1026',
    backgroundColor: '#FFCB96',
    '&:hover': {
      background: '#E3B281',
    },
    '&:active': {
      background: '#E3B281',
    },
  },
  gamingnationOutlined: {
    color: '#FFCB96',
    backgroundColor: '#FFFFFF',
    border: '1px solid #FFCB96',
  },
  tutorialButton: {
    width: 300,
    background: 'linear-gradient(273.32deg, #FDBA5C -5.85%, #FF648C 48.19%, #19AAF8 103.61%)',
    '& > span > div': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      color: '#fff',
    },
  },
}))
stories.add('Button', () => {
  const classes = useStyles()
  return (
    <>
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
        <div style={item}>
          <Button mode="welcome" />
        </div>
        <div style={item}>
          <Button mode="silver" />
        </div>
        <div style={item}>
          <Button mode="gold" />
        </div>
        <div style={item}>
          <Button mode="platinum" />
        </div>
        <div style={item}>
          <Button mode="platinum" />
        </div>
        <div style={item}>
          <Button className={classes.tutorialButton}>
            <div>
              App tutorial
              <ChevronRightIcon fill="white" />
            </div>
          </Button>
        </div>
      </div>
    </>
  )
})

stories.add('Icon Button', () => {
  const classes = useStyles()
  return (
    <div style={styleBox}>
      <div style={item}>
        <IconButton variant="contained">
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton fill={false}>
          <img src="/images/icon/jaidee-icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="outlined" text={`Network Check & Share`}>
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton disabled>
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton text="PlatBlue exclusive" mode="welcome" />
      </div>
      <div style={item}>
        <IconButton disabled mode="welcome" />
      </div>
      <div style={item}>
        <IconButton mode="gold" />
      </div>
      <div style={item}>
        <IconButton mode="silver" />
      </div>
      <div style={item}>
        <IconButton mode="platinum" />
      </div>
      <div style={item}>
        <IconButton variant="outlined" size="large" text="Lorem ipsum">
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="contained" size="large" text="Lorem ipsum">
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton variant="contained" size="large" text="Lorem ipsum" disabled>
          <img src="/images/icon/circle_icon.svg" />
        </IconButton>
      </div>
      <div style={item}>
        <IconButton mode="platinum" size="large" text="Lorem ipsum" />
      </div>
      <div style={item}>
        <IconButton mode="gold" size="large" text="Lorem ipsum" />
      </div>
      <div style={item}>
        <IconButton mode="silver" size="large" text="Lorem ipsum" />
      </div>
      <div style={item}>
        <IconButton mode="welcome" size="large" text="Lorem ipsum" />
      </div>
    </div>
  )
})
