import { storiesOf } from '@storybook/react'
import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '../components/Button'
import Modal from '../components/DtacModal'
import DtacModalFormField from '../components/DtacModalFormField'
import DtacModalOtp from '../components/DtacModalOtp'
import DtacModalTermCondition from '../components/DtacModalTermCondition'
import DtacModalNongTuaD from '../components/DtacModalNongTuaD'
import DtacModalImageDtacReward from '../components/DtacModalImageDtacReward'
import './styles.css'
import DtacModal from '../components/DtacModal'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField/TextField'

const stories = storiesOf('Modal', module)

const tuadsorryPath = '/images/icon/nongtuadee_sorry.svg'
const tuadattentionPath = '/images/icon/nongtuadee_attention.svg'
const tuadtelenorpinwheelPath = '/images/icon/nongtuadee_telenorpinwheel.svg'
const tuaddeterminePath = '/images/icon/nongtuadee_determine.svg'
const tuadhappyPath = '/images/icon/nongtuadee_happy.svg'
const tuadhappsmilePath = '/images/icon/nongtuadee_happy-smile.svg'
const tuadhungryPath = '/images/icon/nongtuadee_hungry.svg'

stories.add('Modal', () => {
  return (
    <div>
      <Modal
        title={'Title'}
        submitName={'CTA'}
        open
        description={'Copy goes here'}
        cancelName={'CTA'}
      />
    </div>
  )
})

stories.add('modal_1CTA', () => {
  return (
    <div>
      <Modal title={'Title'} submitName={'Primary CTA'} open description={'Copy goes here'} />
    </div>
  )
})

stories.add('DtacModalFormField', () => {
  return (
    <div>
      <DtacModalFormField
        title={'Title goes here'}
        description={'Description'}
        submitName={'save'}
        open
        srcPath={'/images/icon/rectangle_small.svg'}
        disable
      />
    </div>
  )
})

stories.add('DtacModalNoFormField', () => {
  return (
    <div>
      <DtacModal
        title={'Title goes here'}
        description={'Description'}
        submitName={'save'}
        cancelName={'cancel'}
        open
        srcPath={'/images/icon/rectangle_small.svg'}
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
        // disable
        // error
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

stories.add('DtacModalNongTuaD1Buttons', () => {
  const description = 'Want to try again?'

  return (
    <div>
      <DtacModalNongTuaD
        open
        title={'Sorry unable to do the transaction now'}
        description={description}
        submitName={'okay'}
        fullWidth={true}
        maxWidth={'xs'}
        srcPath={tuadhungryPath}
      />
    </div>
  )
})

stories.add('DtacModalNongTuaD2Buttons', () => {
  const description =
    'Lorem ipsum Sorryorry unable to do the transactionorem ipsum Sorryorry unable to do the transactionorem ipsum Sorryorry unable to do the transactionorem ipsum Sorryorry unable to do the transaction now'

  return (
    <div>
      <DtacModalNongTuaD
        open
        title={'Sorry unable to do the transaction now'}
        description={description}
        submitName={'okay'}
        cancelName={'cancel'}
        fullWidth={true}
        maxWidth={'xs'}
        srcPath={'/images/icon/nongtuadee_sorry.svg'}
      />
    </div>
  )
})

stories.add('DtacModalImageDtacReward', () => {
  const description =
    'Lorem ipsum dolor sit amet Tempus id sed scelerisque dictum dignissim pellentesqur sit ametuada a'
  return (
    <div>
      <DtacModalImageDtacReward
        open
        title={'Name / description'}
        description={description}
        submitName={'okay'}
        fullWidth={true}
        maxWidth={'xs'}
      />
    </div>
  )
})

stories.add('DtacModalChildren', () => {
  const personalInterface = useMemo(() => {
    return (
      <div style={{ padding: 16 }}>
        <div>
          <Typography>{'Specify balance:'}</Typography>
          <Typography>{'533.50 Baht'}</Typography>
          <Typography>{'Due date: 22-Jan-2021 (Overdue)'}</Typography>
        </div>

        <div style={{ marginTop: 16 }}>
          <Typography>{'Pay specific amount'}</Typography>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder={'00'}
              style={{
                fontSize: 16,
              }}
            />
          </form>
        </div>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <Button disabled>{'save'}</Button>
        </div>
      </div>
    )
  }, [])

  return (
    <div>
      <DtacModal open>{personalInterface} </DtacModal>
    </div>
  )
})
