import { gql, useQuery } from "@apollo/client"
import { Typography } from "@mui/material"
import styles from "../shared/styles"

const MY_BIO = gql`
  query getMe($id: ID!) {
    myInfo(id: $id) {
      data {
        attributes {
          bioIntro,
          bioCareer,
          bioPassion,
          bioNutshell,
          bioRole,
          bioExperience,
          bioShortPassions,
          bioSeeking,
          bioSignOff
        }
      }
    }
  }
`
const AboutSection = () => {
  const { data, error, loading } = useQuery(MY_BIO, { variables: { id: '1' } })

  if (error) return <p>{`ERROR! ${error.message} ${process.env.REACT_APP_GRAPHQL_URL}`}</p>
  if (loading) return <p>LOADING...</p>

  console.log(data)
  return (
    <div style={styles.bioContainer}>
      <div style={styles.bioBody}>
        <Typography variant='body1' style={styles.bioHeader}>
          {data.myInfo.data.attributes.bioIntro}
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          {data.myInfo.data.attributes.bioCareer}
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          {data.myInfo.data.attributes.bioPassion}
        </Typography>
        <Typography variant='h4' style={styles.bioSummaryHeader}>
          {data.myInfo.data.attributes.bioNutshell}
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          {data.myInfo.data.attributes.bioRole}
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          {data.myInfo.data.attributes.bioExperience}
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          {data.myInfo.data.attributes.bioShortPassions}
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          {data.myInfo.data.attributes.bioSeeking}
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          {data.myInfo.data.attributes.bioSignOff}
        </Typography>
      </div>
    </div>
  )
}

export default AboutSection
