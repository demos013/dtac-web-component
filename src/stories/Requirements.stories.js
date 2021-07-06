import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'
import Button from '../components/Button'
import Modal from '../components/Modal'

const stories = storiesOf('dtac component test', module)

stories.add('Button', () => {
  return (
    <div>
      <Button primary>dtac Blue button</Button>
    </div>
  )
})

stories.add('Modal', () => {
  return (
    <div>
      <Modal title={'Title'} submitName={'save'} open/>
    </div>
  )
})
