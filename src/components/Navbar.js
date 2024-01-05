import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { colors } from '../shared/styles'
import { Button, IconButton } from '@mui/material'
import { redirect } from 'react-router-dom'

function ResponsiveAppBar() {
  return (
    <AppBar sx={{ backgroundColor: colors.wine, width: '100%', padding: '20px' }}>
      <IconButton width="20%" href="/">
        <img src="spenceware_logo.jpeg" />
      </IconButton>
      <Button href="/resume">Hello</Button>
    </AppBar>
  )
}
export default ResponsiveAppBar