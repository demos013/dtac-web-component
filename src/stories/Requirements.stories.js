import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import './styles.css'
import Button from '../components/Button'

const stories = storiesOf('dtac component test', module)

stories.add('Button', () => {
  return (
    <div>
      <Button primary>dtac Blue button</Button>
    </div>
  )
})
