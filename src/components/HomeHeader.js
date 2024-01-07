import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import CustomButton from './CustomButton'
import styles from '../shared/styles'
import { buttons } from '../shared/buttons'

function HomeHeader() {
  const matches = useMediaQuery('(min-width:1430px)')

  return (
    <Box style={styles.header}>
      <Grid container xs={matches ? styles.header : styles.mqHeader}>
        <Grid item xs={matches ? 4.5 : 12} style={styles.myPictureContainer}>
          <Container style={matches ? styles.centerInContainer : styles.mqCenterInContainer}>
            <img
              src="common_assets/this_is_me.jpeg"
              alt="Photo of Cynthia Spence"
              style={styles.myPicture}
            />
          </Container>
        </Grid>
        <Grid item xs={matches ? 7.5 : 12} style={styles.myInfoContainer}>
          <Box style={matches ? styles.centerInContainer : styles.mqCenterInContainer}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant='h1' align={matches ? 'left' : 'center'}>
                  Cynthia Spence
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2' align={matches ? 'left' : 'center'}>
                  Software and Data Engineer
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.linkedin}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.contact}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.resume}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.github}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.gitlab}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.certs}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeHeader
