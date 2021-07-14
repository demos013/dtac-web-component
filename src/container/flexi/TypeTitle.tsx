import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import React, { FC, memo } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textBold: {
      fontSize: 16,
      fontWeight: 700,
    },
    typeWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imageTitle: {
      display: 'flex',
    },
    imageTitleSpace: {
      marginLeft: '6px',
    },
  }),
)

interface TypeTitleProps {
  type: string
  imagePath: string
  typeText: string
  color?: string
  unit: string
}
const TypeTitle: FC<TypeTitleProps> = ({ type, imagePath, typeText, color, unit }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.typeWrapper}>
        <div className={classes.imageTitle}>
          <Image unoptimized src={imagePath} width={21} height={21} />
          <Typography variant="subtitle1" className={classes.imageTitleSpace}>
            {typeText}
          </Typography>
        </div>
        {/* 
// @ts-ignore */}
        <Typography className={classes.textBold}>{type + ' ' + unit}</Typography>
      </div>
    </>
  )
}

export default memo(TypeTitle)
