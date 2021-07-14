import React from 'react';

import { storiesOf } from '@storybook/react';

import DtacPackageDetail from '../components/DtacPackageDetail';

const stories = storiesOf('Package Detail', module)

stories.add('packageDetail', () => {
  return (
    <>
      <DtacPackageDetail pageName={'Package detail'}/>
    </>
  )
})
