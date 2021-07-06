import { makeStyles, Theme } from '@material-ui/core/styles'

type Props = {
  width: string
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  root: {
    fontFamily: 'dtac_2018regular, Padauk',
    minWidth: 90,
    width: ({ width }) => width,
    height: 44,
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 8px',
  },
  default: {
    color: '#0C1026',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(25, 170, 248, 0.04);',
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: '#19AAF8!important',
      opacity: 0.3,
    },
  },
  primary: {
    color: '#FFFFFF',
    backgroundColor: '#007AD0',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#007AD0',
    },
    '& .MuiTouchRipple-root span': {
      backgroundColor: '#FFFFFF!important',
      opacity: 0.3,
    },
  },
}))

export default useStyles
