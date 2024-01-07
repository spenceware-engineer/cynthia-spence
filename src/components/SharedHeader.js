import { Box, ButtonGroup, Typography } from '@mui/material'
import { buttons } from '../shared/buttons'
import CustomButton from '../components/CustomButton'
import styles from '../shared/styles'

const SharedHeader = () => {
  return (
    <Box style={styles.sharedHeaderContainer}>
      <Box style={styles.pictureNameGroup}>
        <a href="/" aria-label="Link to Home">
          <img style={styles.smallPicture} src="common_assets/this_is_me.jpeg" alt="Photo of Cynthia Spence" />
        </a>
        <Typography variant="h3">Cynthia Spence</Typography>
      </Box>
      <Box style={styles.buttonGroup}>
        <CustomButton style={styles.buttonsInGroup} {...buttons.linkedin} />
        <CustomButton style={styles.buttonsInGroup} {...buttons.github} />
        <CustomButton style={styles.buttonsInGroup} {...buttons.gitlab} />
        <CustomButton style={styles.buttonsInGroup} {...buttons.certs} />
        <CustomButton style={styles.buttonsInGroup} {...buttons.resume} />
        <CustomButton style={styles.buttonsInGroup} {...buttons.contact} />
      </Box>
    </Box>
  )
}

export default SharedHeader