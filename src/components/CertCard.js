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
  Popover,
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
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ anchorEl, setAnchorEl ] = useState(null)

  const closeModal = (_, reason) => {
    if (reason === 'escapeKeyDown' || reason === 'backdropClick')
      setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

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
        onClick={openModal}
      >
        <CardContent
          aria-owns={open ? 'description-popover' : undefined}
          aria-haspopup="true"
          style={styles.institutionArea}
        >
          <Avatar
            alt={props.institution}
            src={props.avatar}
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
            <em>{props.institution}</em> - {props.year}
          </Typography>
        </CardContent>
        {props.description && (<Popover
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
          <Typography sx={{ p: 1 }}>{props.description}</Typography>
        </Popover>)}
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
          height="220"
          component={props.type}
          image={props.src}
          alt={props.title}
          style={styles.cardMedia}
        />
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