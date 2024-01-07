import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import SharedHeader from '../components/SharedHeader'
import CertCard from '../components/CertCard'
import styles from '../shared/styles'
import certs from '../shared/certs'


const Certs = () => {
  return (
    <Box style={styles.certPageContainer}>
      <SharedHeader />
      <Typography variant="h2" align="center" style={styles.certPageTitle}>
        Certifications and Awards
      </Typography>
      <Grid container>
        {Object.values(certs).map(cert => (
          <Grid item xs={4}>
            <CertCard {...cert} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Certs