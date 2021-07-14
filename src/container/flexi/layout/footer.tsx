import React, { FC, ReactElement } from 'react'
import ReactResizeDetector from 'react-resize-detector'

const FooterLayout: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const onReSize = () => {
    if (typeof document != 'undefined') {
      const domFooter = document.querySelector('#use-layout-footer')

      const domLayout = document.getElementById('use-dynamic-height')
      if (domLayout != null) {
        domLayout.style.paddingBottom = `${domFooter?.clientHeight}px`
      }
    }
  }

  return (
    <ReactResizeDetector handleHeight onResize={onReSize}>
      {children}
    </ReactResizeDetector>
  )
}

export default FooterLayout
