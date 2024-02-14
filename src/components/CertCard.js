import { useState } from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from '@mui/material'
import styles from '../shared/styles'

const CertCard = ({
  title,
  institution,
  awardedDate,
  description,
  avatar,
  certificate,
}) => {
  const [ anchorEl, setAnchorEl ] = useState(null)

  const openPopover = (event) => {
    setAnchorEl(event.target)
  }

  const closePopover = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Box style={styles.certArea}>
      <Card
        style={styles.certCard}
      >
        <CardContent
          aria-owns={open ? 'description-popover' : undefined}
          aria-haspopup="true"
          style={styles.institutionArea}
        >
          <Avatar
            alt={institution}
            src={`${avatar.startsWith('/') ? 'http://localhost:1337' : ''}${avatar}`}
            sx={styles.certAvatar}
            onMouseEnter={openPopover}
            onMouseLeave={closePopover}
          />
          <Typography
            sx={{ margin: '0 10px' }}
            variant="h6"
            component="div"
            onMouseEnter={openPopover}
            onMouseLeave={closePopover}
            gutterBottom
          >
            <em>{institution}</em> - {awardedDate}
          </Typography>
        </CardContent>
        {description && (<Popover
          id="description-popover"
          open={open}
          sx={{
            pointerEvents: 'none',
          }}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transferOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={closePopover}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{description}</Typography>
        </Popover>)}
        <CardContent style={styles.certTitleArea}>
          <object data={`${certificate.startsWith('/') ? 'http://localhost:1337' : ''}${certificate}`} height="100%" width="100%">
            <a href={certificate}>View Certificate Here</a>
          </object>
        </CardContent>
        <CardMedia
          height="220"
          image={certificate}
          alt={title}
          style={styles.cardMedia}
        />
      </Card>
    </Box>
  )
}

export default CertCard
