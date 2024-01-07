import { useState, forwardRef } from 'react'
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material'
import clsx from 'clsx'
import { Modal } from '@mui/base'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from '../shared/styles'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const CertCard = (props) => {
  const [ expanded, setExpanded ] = useState(false)
  const [ modalOpen, setModalOpen ] = useState(false)

  const closeModal = (_, reason) => {
    if (reason === 'escapeKeyDown' || reason === 'backdropClick')
      setModalOpen(false)
  }

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <Box style={styles.certArea}>
      <Card
        style={styles.certCard}
        onClick={openModal}
      >
        <CardContent style={styles.institutionArea}>
          <Avatar
            alt={props.institution}
            src={props.avatar}
            sx={styles.certAvatar}
          />
          <Typography
            sx={{ margin: '0 10px' }}
            variant="h6"
            component="div"
            gutterBottom
          >
            <em>{props.institution}</em> - {props.year}
          </Typography>
        </CardContent>
        <CardContent style={styles.certTitleArea}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
          >
            {props.title}
          </Typography>
        </CardContent>
        <CardMedia
          height="194"
          component={props.type}
          image={props.src}
          alt={props.title}
          style={styles.cardMedia}
        />
        {props.description && (
          <>
            <CardActions>
              <ExpandMore
                expand={expanded}
                onClick={handleExpand}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon
                  style={styles.expandIcon}
                />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>
                  {props.description}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        )}
      </Card>
      <Modal
        style={styles.largeViewModal}
        aria-label={`${props.title} Large View`}
        open={modalOpen}
        onClose={closeModal}
        slots={{ backdrop: Backdrop }}
      >
        <div style={styles.modalContent}>
          {props.type === 'iframe' ? (
            <iframe
              style={{
                width: '100%',
                height: '100%',
              }}
              src={props.src}
            >
              <a href={props.src}>
                Click here to view the Certification in your browser
              </a>
            </iframe>
          ) : (
            <img
              src={props.src}
              alt={`${props.title} Large View`}
            />
          )}

        </div>
      </Modal>
    </Box>
  )
}

const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props
  return (
    <div
      styles
      style={styles.modalBackdrop}
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  )
})

export default CertCard