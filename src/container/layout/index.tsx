import clsx from 'clsx';
import React, { FC, memo, ReactElement, ReactNode } from 'react';
import ReactResizeDetector from 'react-resize-detector';

import { makeStyles } from '@material-ui/core/styles';

import BackNavBar from '../../modular/BackNavBar';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'none',
    overflow: 'hidden',
  },
  bgColor: {
    backgroundColor: '#fff',
  },
  header: {
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    width: '100%',
    '& > header': {
      position: 'unset',
    },
  },
}))

interface CategoryLayoutProps {
  children: ReactNode
  titleName: string
  header?: ReactElement
}

const CategoryLayout: FC<CategoryLayoutProps> = (props) => {
  const { children, titleName, header } = props
  const classes = useStyles()

  const onReSize = () => {
    if (typeof document != 'undefined') {
      const domHeader = document.querySelector('#use-layout-header')

      const domLayout = document.getElementById('use-dynamic-height')
      if (domLayout != null) {
        domLayout.style.paddingTop = `${domHeader?.clientHeight}px`
      }
    }
  }

  return (
    <div
      id="use-dynamic-height"
      className={clsx(
        classes.page,
        titleName.toLocaleLowerCase() === 'package detail' ? classes.bgColor : undefined,
      )}
    >
      <ReactResizeDetector handleHeight onResize={onReSize}>
        <div id="use-layout-header" className={classes.header}>
          <BackNavBar />
          {header}
        </div>
      </ReactResizeDetector>
      {children}
    </div>
  )
}

export default memo(CategoryLayout)
