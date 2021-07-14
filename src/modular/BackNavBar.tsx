import React, { FC, memo } from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#E7EEF4',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'block',
    fontSize: 16,
    fontWeight: 700,
  },
  iconWrapper: {
    position: 'fixed',
  },
}))

interface BackNavBarProps {
  title?: string
  onClick?: () => void
}
const BackNavBar: FC<BackNavBarProps> = (props) => {
  const classes = useStyles()
  const { title = 'Net', onClick } = props

  const onClickBack = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={onClickBack}
          className={classes.iconWrapper}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <img width={7} height={14} src={'/images/icon/arrow-left.svg'} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default memo(BackNavBar)
