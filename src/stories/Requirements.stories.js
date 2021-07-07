import { storiesOf } from '@storybook/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Modal from '../components/DtacModal'
import DtacModalFormField from '../components/DtacModalFormField'
import DtacModalOtp from '../components/DtacModalOtp'
import './styles.css'

const stories = storiesOf('Modal', module)

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

stories.add('DtacModalOtp', () => {
  return (
    <div>
      <DtacModalOtp
        title={'OTP Verification'}
        open
        description={'Your OTP code has been sent via sms to 000-000-0000'}
      />
    </div>
  )
})
