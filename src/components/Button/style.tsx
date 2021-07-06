// type Props = {
//   width: string
// }
// const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
//   root: {
//     fontFamily: 'dtac_2018regular, Padauk',
//     minWidth: 90,
//     width: ({ width }) => width,
//     height: 44,
//     textTransform: 'none',
//     fontSize: 14,
//     padding: '6px 8px',
//   },
//   default: {
//     color: '#0C1026',
//     '&:hover': {
//       textDecoration: 'none',
//       backgroundColor: 'rgba(25, 170, 248, 0.04);',
//     },
//     '& .MuiTouchRipple-root span': {
//       backgroundColor: '#19AAF8!important',
//       opacity: 0.3,
//     },
//   },
//   primary: {
//     color: '#FFFFFF',
//     backgroundColor: '#007AD0',
//     '&:hover': {
//       textDecoration: 'none',
//       backgroundColor: '#007AD0',
//     },
//     '& .MuiTouchRipple-root span': {
//       backgroundColor: '#FFFFFF!important',
//       opacity: 0.3,
//     },
//   },
// }))
// import React, { ReactNode } from 'react'
// // export default useStyles
// import Button from '@material-ui/core/Button'
// import styled from 'styled-components'

// export default styled(
//   ({ color, children, ...otherProps }: { color: string; children: ReactNode }) => (
//     <Button {...otherProps}>{children}</Button>
//   ),
// )`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;

//   & .label {
//     background-color: purple;
//   }

//   &.disabled {
//     color: black;
//     background-color: orange;
//     .label {
//       background-color: green;
//     }
//   }
// `
