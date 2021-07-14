import { FC, memo, ReactElement, ReactNode } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingTop: 56,
  },
  appBar: {
    position: 'fixed',
    top: 0,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.12)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    display: 'block',
    color: 'rgba(26, 26, 26, 0.87)',
    fontWeight: 700,
  },
}))

interface FlexiLayoutProps {
  children: ReactNode
  backButton?: boolean
  onClick?: () => void
}

const FlexiLayout: FC<FlexiLayoutProps> = (props): ReactElement => {
  const { children, backButton = false, onClick } = props
  const classes = useStyles()
  const { t } = useTranslation('common')

  const onClickHandler = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div id="use-dynamic-height" className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar>
          {backButton && (
            <Image
              unoptimized
              width={7}
              height={14}
              src={'/images/icon/arrow-left.svg'}
              onClick={onClickHandler}
            />
          )}
          <Typography variant="h6" className={classes.title}>
            {t('LBL.FLEXI.MYCHOICEPACK')}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}

export default memo(FlexiLayout)
