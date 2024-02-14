import { faAward, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faHackerrank, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import CustomButton from './CustomButton'
import styles from '../shared/styles'
import { useQuery, gql } from '@apollo/client'

const HOME_HEAD_INFO = gql`
  query getMe($id: ID!) {
    myInfo(id: $id) {
      data {
        id
        attributes {
          name,
          jobTitle,
          linkedin,
          github,
          gitlab,
          upwork,
          hackerrank,
          resume {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

const HomeHeader = () => {
  const matches = useMediaQuery('(min-width:1430px)')
  const { data, error, loading } = useQuery(HOME_HEAD_INFO, { variables: { id: "1" } })

  if (error) {
    console.log(error)
    return <p>{`ERROR! ${error.message} ${process.env.REACT_APP_GRAPHQL_URL}`}</p>
  }
  if (loading) return <p>LOADING...</p>

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = 'common_assets/Cynthia_Spence__resume.pdf'
    link.download = data.myInfo.data.attributes.resume.data.attributes.url
    link.click()
  }

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
                  link={data.myInfo.data.attributes.linkedin}
                  icon={<FontAwesomeIcon icon={faLinkedin} />}
                  label="LinkedIn"
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  link="/contact"
                  icon={<FontAwesomeIcon icon={faEnvelope} />}
                  label="Contact"
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  label="Resume"
                  icon={<FontAwesomeIcon icon={faDownload} />}
                  handleClick={downloadResume}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  label="GitHub"
                  icon={<FontAwesomeIcon icon={faGithub} />}
                  link={data.myInfo.data.attributes.github}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  label="GitLab"
                  icon={<FontAwesomeIcon icon={faGitlab} />}
                  link={data.myInfo.data.attributes.gitlab}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  label="UpWork"
                  icon={<FontAwesomeIcon icon={faUpwork} />}
                  link={data.myInfo.data.attributes.upwork}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  label="HackerRank"
                  icon={<FontAwesomeIcon icon={faHackerrank} />}
                  link={data.myInfo.data.attributes.hackerrank}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  style={styles.buttons}
                  link="/awards"
                  icon={<FontAwesomeIcon icon={faAward} />}
                  label="Awards"
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
