import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const GET_CERT = gql`
  query award($id: ID!) {
    award(id: $id) {
      data {
        attributes {
          title,
          institution,
          awardedDate,
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

const SingleCert = () => {
  const { id } = useParams()
  const { data, error, loading } = useQuery(GET_CERT, {
    variables: { id }
  })

  if (error) return <p>ERROR!</p>
  if (loading) return <p>Loading...</p>

  console.log(data)

  return (
    <p>
      LOADED AND READY
    </p>
  )
}

export default SingleCert
