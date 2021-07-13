import { storiesOf } from '@storybook/react'
import React from 'react'
import PackageList from '../components/PackageList'

const stories = storiesOf('packageList', module)

stories.add('Package-list selected and saletag', () => {
  return (
    <div>
      <PackageList
        net={'30'}
        validity={'7'}
        price={'99'}
        voice={'1000'}
        shortDesc={'Lorentum, aliquam tristique amet, blandit.'}
        isSelected
      />

      <PackageList
        net={'30'}
        validity={'20'}
        price={'1299'}
        voice={'400'}
        saleTag={'/images/flag-default.svg'}
        shortDesc={''}
      />
    </div>
  )
})
