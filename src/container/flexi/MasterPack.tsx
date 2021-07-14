import React, { ReactElement, useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Lifestyle } from '@type/flexi'
import PromotionItem from 'components/flexi/PromotionItem'
import { useRecoilValue } from 'recoil'
import { selectedLifestyleState, selectedPackState } from 'recoils/flexi'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '15px 15px 25px 15px',
  },
}))

const MasterPack = (): ReactElement => {
  const classes = useStyles()
  const selectedPack = useRecoilValue(selectedPackState)
  const selectedLifeStyle = useRecoilValue(selectedLifestyleState)
  const [selectedLifeStyleGroup, setSelectedLifeStyleGroup] = useState<Lifestyle[]>([])

  useEffect(() => {
    const { lifestyle } = selectedPack
    const selectedLifeStyleChar = [...selectedLifeStyle]
    const tempSelectedLifeStyle = [] as Lifestyle[]

    lifestyle?.forEach((item, index: number) => {
      if (selectedLifeStyleChar[index] == '1') {
        tempSelectedLifeStyle.push(item)
      }
    })
    setSelectedLifeStyleGroup(tempSelectedLifeStyle)
  }, [])

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2}>
        {+selectedPack?.validity > 0 && (
          <Grid item xs={12}>
            <PromotionItem mode="DAY" value={selectedPack?.validity} />
          </Grid>
        )}
        {+selectedPack?.internetVolume > 0 && (
          <Grid item xs={12}>
            <PromotionItem mode="NET" value={selectedPack?.internetVolume} />
          </Grid>
        )}
        {+selectedPack?.voice > 0 && (
          <Grid item xs={12}>
            <PromotionItem mode="TEL" value={selectedPack?.voice} />
          </Grid>
        )}
        {selectedLifeStyleGroup.length > 0 && (
          <Grid item xs={12}>
            <PromotionItem
              mode="APP"
              value={selectedPack?.validity}
              lifeStyleList={selectedLifeStyleGroup}
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default MasterPack
