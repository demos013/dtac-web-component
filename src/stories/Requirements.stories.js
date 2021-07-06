import { storiesOf } from '@storybook/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Modal from '../components/DtacModal'
import DtacModalFormField from '../components/DtacModalFormField'
import './styles.css'

const stories = storiesOf('dtac component test', module)
const styleBox = { display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }
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
}))
stories.add('Button', () => {
  const classes = useStyles()
  return (
    <div style={styleBox}>
      <div style={item}>
        <Button variant="contained">dtac Blue button</Button>
      </div>
      <div style={item}>
        <Button>dtac white button</Button>
      </div>
      <div style={item}>
        <Button variant="outlined">dtac outlined button</Button>
      </div>
      <div style={item}>
        <Button variant="contained" disabled>
          dtac disable button
        </Button>
      </div>
      <div style={item}>
        <Button className={classes.gamingnation}>dtac gamingnation button</Button>
      </div>
    </div>
  )
})

stories.add('Modal', () => {
  return (
    <div>
      <Modal title={'Title'} submitName={'save'} open />
    </div>
  )
})

stories.add('DtacModalFormField', () => {
  return (
    <div>
      <DtacModalFormField title={'Title'} submitName={'save'} open />
    </div>
  )
})
