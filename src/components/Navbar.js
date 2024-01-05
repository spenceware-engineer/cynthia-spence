import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { colors } from '../shared/styles'
import { Button, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Resume from './Resume'

function ResponsiveAppBar() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: colors.wine, width: '100%', padding: '20px' }}>
        <IconButton width="20%" href="/">
          <img src="spenceware_logo.jpeg" />
        </IconButton>
        <Button href="/resume">Hello</Button>
      </AppBar>
    </Box>
  )
}
export default ResponsiveAppBar