import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import CustomButton from './CustomButton'
import styles from '../shared/styles'
import { buttons } from '../shared/buttons'
import { useQuery, gql } from '@apollo/client'

const HOME_HEAD_INFO = gql`
  query getMe($id: ID!) {
    myInfo(id: $id) {
      data {
        id
        attributes {
          name,
          jobTitle
        }
      }
    }
  }
`

function HomeHeader() {
  const matches = useMediaQuery('(min-width:1430px)')
  const { data, error, loading } = useQuery(HOME_HEAD_INFO, { variables: { id: "1" } })

  if (error) {
    console.log(error)
    return <p>ERROR!</p>
  }
  if (loading) return <p>LOADING...</p>

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
                  {data.myInfo.data.attributes.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2' align={matches ? 'left' : 'center'}>
                  {data.myInfo.data.attributes.jobTitle}
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
