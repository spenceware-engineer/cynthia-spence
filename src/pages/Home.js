
import { Box } from '@mui/material'
import AboutSection from '../components/AboutSection'
import HomeHeader from '../components/HomeHeader'
import styles from '../shared/styles'

function Home() {

  return (
    <Box style={styles.page}>
      <HomeHeader />
      <AboutSection />
    </Box>
  )
}

export default Home
