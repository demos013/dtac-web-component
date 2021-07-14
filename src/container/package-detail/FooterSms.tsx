import React, { memo, useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import clsx from 'clsx'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    maxHeight: 160,
    boxShadow:
      '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    padding: '20px 15px',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    textTransform: 'none',
  },
}))

const FooterSms = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div id="use-layout-footer" className={classes.root}>
      <div className={classes.buttonWrapper}>
        <Button variant="contained" color="primary" className={classes.button}>
          {'Buy now'}
        </Button>
      </div>
    </div>
  )
}

export default memo(FooterSms)
