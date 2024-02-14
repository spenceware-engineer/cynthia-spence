import {
  Box,
  Grid,
  Typography,
} from '@mui/material'
import SharedHeader from '../components/SharedHeader'
import CertCard from '../components/CertCard'
import styles from '../shared/styles'
import { gql, useQuery } from '@apollo/client'

const CERTS_LIST = gql`
  query certs {
    awards {
      data {
        attributes {
          title,
          institution,
          awardedDate,
          description,
          institutionAvatar {
            data {
              attributes {
                url
              }
            }
          },
          cert {
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


const Certs = () => {
  const { data, error, loading } = useQuery(CERTS_LIST)

  if (error) return <p>ERROR!</p>
  if (loading) return <p>Loading...</p>

  return (
    <Box style={styles.certPageContainer}>
      <SharedHeader />
      <Typography variant="h2" align="center" style={styles.pageTitle}>
        Certifications and Awards
      </Typography>
      <Grid container>
        {data.awards.data.map(cert => (
          <Grid item xs={4}>
            <CertCard
              title={cert.attributes.title}
              institution={cert.attributes.institution}
              awardedDate={cert.attributes.awardedDate}
              description={cert.attributes.description}
              avatar={cert.attributes.institutionAvatar.data.attributes.url}
              certificate={cert.attributes.cert.data.attributes.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Certs
