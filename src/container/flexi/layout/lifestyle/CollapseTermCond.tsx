import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Lifestyle } from '@type/flexi'
import clsx from 'clsx'
import LiftstyleItem from 'components/flexi/LiftstyleItem'
import LifestyleHeader from 'containers/flexi/layout/lifestyle/LifestyleHeader'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { FC, memo, useEffect, useState } from 'react'
import { mapLifeStyleNameByType } from 'utils/common'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    textRight: {
      textAlign: 'right',
    },
    textSize16: {
      fontSize: 16,
      fontWeight: 700,
    },
    gridText: {
      textAlign: 'center',
      alignSelf: 'center',
    },
    collapseWrapper: {
      background: 'white',
      padding: 16,
      borderRadius: '0 0 10px 10px',
    },
    lifestyleBox: {
      border: '0.5px solid #D6D6D6',
      boxShadow: '0px 0px 2px rgb(40 41 61 / 4%), 0px 4px 8px rgb(96 97 112 / 16%)',
      borderRadius: 8,
      margin: '0 auto',
    },
    termTitle: {
      textDecoration: 'underline',
    },
    lifestyleContainer: {
      marginBottom: 24,
    },
    marginTopCollapse: {
      marginTop: 24,
    },
    lifestyleNameWrapper: {
      paddingBottom: 16,
    },
  }),
)
interface TermsCondsProps {
  lifestyle: Lifestyle[]
  value: string
  onChange: (selectedLifestyle: string) => void
  onClickTermDescription?: (key: string) => void
}

const CollapseTermCond: FC<TermsCondsProps> = ({
  value,
  lifestyle,
  onChange,
  onClickTermDescription,
}) => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState(false)
  const [selectedLifestyle, setSelectedLifestyle] = useState<string>('')
  const [isChecked, setChecked] = useState(false)
  const { t } = useTranslation('common')

  useEffect(() => {
    if (selectedLifestyle.length > 3) {
      onChange(selectedLifestyle)
    }
  }, [selectedLifestyle])

  const onClickLifestyle = (index: number) => {
    setChecked(!isChecked)
    const selectedLifestyleChar = [...value]
    selectedLifestyleChar[index] = selectedLifestyleChar[index] == '1' ? '0' : '1'
    setSelectedLifestyle(selectedLifestyleChar.join(''))
  }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const onHandleTerm = (e: React.MouseEvent<HTMLElement>, offerCode: string) => {
    e.stopPropagation()
    if (onClickTermDescription) {
      onClickTermDescription(offerCode)
    }
  }

  return (
    <>
      <LifestyleHeader />
      <div className={classes.collapseWrapper}>
        <div className={classes.lifestyleBox} onClick={handleExpandClick}>
          <Grid container>
            <Grid item xs={10} className={classes.gridText}>
              <Typography className={classes.textSize16}>
                {t('LBL.FLEXI.SELECTUNLIMITEDDATA.MORE.TITLE')}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                className={clsx(classes.expand, classes.textRight, {
                  [classes.expandOpen]: expanded,
                })}
              >
                <Image
                  unoptimized
                  src={'/images/icon/expand_more.png'}
                  alt="expand_more"
                  width={24}
                  height={24}
                />
              </IconButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.marginTopCollapse}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {lifestyle !== undefined &&
              lifestyle.map((ele, index) => {
                return (
                  <>
                    <div
                      key={ele.name + ele.type}
                      className={clsx(classes.lifestyleContainer)}
                      onClick={() => onClickLifestyle(index)}
                    >
                      <Grid container className={ele.saleTag && classes.lifestyleNameWrapper}>
                        <Grid item xs={7}>
                          <Typography variant="subtitle2" align="left">
                            {mapLifeStyleNameByType(ele?.type, t)}
                          </Typography>
                        </Grid>
                        <Grid item xs={5} className={classes.textRight}>
                          <Typography
                            variant="caption"
                            className={classes.termTitle}
                            onClick={(e) => onHandleTerm(e, ele.offerCode)}
                          >
                            {t('LBL.FLEXI.TERM.TITLE')}
                          </Typography>
                        </Grid>
                      </Grid>

                      <LiftstyleItem
                        value={value}
                        index={index}
                        listItem={ele.image}
                        saleTag={ele.saleTag}
                      />
                    </div>
                  </>
                )
              })}
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default memo(CollapseTermCond)
