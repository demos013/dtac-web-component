import { storiesOf } from '@storybook/react'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Modal from '../components/DtacModal'
import DtacModalFormField from '../components/DtacModalFormField'
import DtacModalOtp from '../components/DtacModalOtp'
import DtacModalTermCondition from '../components/DtacModalTermCondition'
import DtacModalNongTuaD from '../components/DtacModalNongTuaD'
import DtacModalImageDtacReward from '../components/DtacModalImageDtacReward'
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
      <DtacModalFormField
        title={'Title'}
        submitName={'save'}
        open
        srcPath={'/images/circle_icon.svg'}
      />
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
        submitName={'Buy'}
        cancelName={'cancel'}
      />
    </div>
  )
})

stories.add('DtacModalTermCondition', () => {
  const description =
    '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est.'

  return (
    <div>
      <DtacModalTermCondition
        open
        title={'Term and Condition'}
        description={description}
        submitName={'okay'}
        fullWidth={true}
        maxWidth={'xs'}
      />
    </div>
  )
})

stories.add('DtacModalNongTuaD', () => {
  const description =
    '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est.'

  return (
    <div>
      <DtacModalNongTuaD
        open
        title={'Term and Condition'}
        description={description}
        submitName={'okay'}
        fullWidth={true}
        maxWidth={'xs'}
      />
    </div>
  )
})

stories.add('DtacModalImageDtacReward', () => {
  const description =
    '• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit aliquet elementum nibh. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est. • Tempus id sed scelerisque dictum dignissim pellentesque consequat. Malesuada ac, est.'

  return (
    <div>
      <DtacModalImageDtacReward
        open
        title={'Term and Condition'}
        description={description}
        submitName={'okay'}
        fullWidth={true}
        maxWidth={'xs'}
      />
    </div>
  )
})
