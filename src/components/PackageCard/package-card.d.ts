import { GridSize } from '@material-ui/core/Grid'
import clsx from 'clsx'
import { ReactNode } from 'react'

export interface PackageCardHeaderProps {
  title: string
  discountedPrice?: string
  fullPrice?: string | undefined
  unit?: string
  vatText?: string
  caption?: string | undefined
  upSelling?: string | undefined
}
export interface PackageCardBaseProps {
  header: PackageCardHeaderProps
  align?: 'vertical' | 'horizontal' | undefined
  selected?: boolean
  className?: typeof clsx | string
  headerBackgroundColor?: string
  saleTag?: boolean
  showSeeDetail?: boolean
  items?: Array<ReactNode> | undefined
  rightBottom?: ReactNode | undefined
  leftBottom?: ReactNode | undefined
  expands?: boolean
  isExpands?: boolean | undefined
  expandsItems?: ReactNode | undefined
}

export interface SummaryCardItemProps {
  icon: string
  size?: GridSize | undefined
  upperText: string
  lowerText: string
}

export interface PackageCardItemProps {
  icon?: string | undefined
  primaryText?: string | undefined
  text?: string | undefined
}
