import { Box, Container, Grid, Typography } from '@mui/material'
import CustomButton from './CustomButton'
import styles from '../shared/styles'
import { buttons } from '../shared/buttons'

function HomeHeader() {

  return (
    <Box style={styles.header}>
      <Grid container xs={styles.header}>
        <Grid item xs={4.5} style={styles.myPictureContainer}>
          <Container style={styles.centerInContainer}>
            <img
              src="common_assets/this_is_me.jpeg"
              alt="Photo of Cynthia Spence"
              style={styles.myPicture}
            />
          </Container>
        </Grid>
        <Grid item xs={7.5} style={styles.myInfoContainer}>
          <Container style={styles.centerInContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h1'>
                  Cynthia Spence
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2'>
                  Software and Data Engineer
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.linkedin}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.contact}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.resume}
                />
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.github}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.gitlab}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  style={styles.buttons}
                  {...buttons.certs}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeHeader
