import { useState } from 'react'
import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { buttons } from '../shared/buttons'
import CustomButton from '../components/CustomButton'
import styles from '../shared/styles'

const SharedHeader = () => {
  const [ anchorEl, setAnchorEl ] = useState(null)
  const open = Boolean(anchorEl)

  const matches = useMediaQuery('(min-width:1430px)')

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Box style={styles.sharedHeaderContainer}>
      <Box style={styles.pictureNameGroup}>
        <a href="/" aria-label="Link to Home">
          <img style={styles.smallPicture} src="common_assets/this_is_me.jpeg" alt="Photo of Cynthia Spence" />
        </a>
        {matches && (
          <a href="/" aria-label="Link to Home" style={styles.headerHomeText}>
            <Typography variant="h3">Cynthia Spence</Typography>
          </a>
        )}
      </Box>
      {matches ? (
        <Box style={styles.buttonGroup}>
          <CustomButton style={styles.buttonsInGroup} {...buttons.linkedin} />
          <CustomButton style={styles.buttonsInGroup} {...buttons.github} />
          <CustomButton style={styles.buttonsInGroup} {...buttons.gitlab} />
          <CustomButton style={styles.buttonsInGroup} {...buttons.certs} />
          <CustomButton style={styles.buttonsInGroup} {...buttons.resume} />
          <CustomButton style={styles.buttonsInGroup} {...buttons.contact} />
        </Box>
      ) : (
        <>
          <Box>
            <CustomButton
              {...buttons.menuButton}
              handleClick={openMenu}
              ariaHaspopup="true"
              ariaControls={open ? 'nav-menu' : undefined}
              ariaExpanded={open ? 'true' : undefined}
              style={styles.buttons}
            />
          </Box>
          <Menu
            id="nav-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem component="a" href={buttons.home.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.home.icon}
              </ListItemIcon>
              <ListItemText>{buttons.home.label}</ListItemText>
            </MenuItem>
            <MenuItem component="a" href={buttons.linkedin.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.linkedin.icon}
              </ListItemIcon>
              <ListItemText>{buttons.linkedin.label}</ListItemText>
            </MenuItem>
            <MenuItem component="a" href={buttons.github.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.github.icon}
              </ListItemIcon>
              <ListItemText>{buttons.github.label}</ListItemText>
            </MenuItem>
            <MenuItem component="a" href={buttons.gitlab.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.gitlab.icon}
              </ListItemIcon>
              <ListItemText>{buttons.gitlab.label}</ListItemText>
            </MenuItem>
            <MenuItem component="a" href={buttons.certs.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.certs.icon}
              </ListItemIcon>
              <ListItemText>{buttons.certs.label}</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => { closeMenu(); buttons.resume.handleClick() }}>
              <ListItemIcon>
                {buttons.resume.icon}
              </ListItemIcon>
              <ListItemText>{buttons.resume.label}</ListItemText>
            </MenuItem>
            <MenuItem component="a" href={buttons.contact.link} onClick={closeMenu}>
              <ListItemIcon>
                {buttons.contact.icon}
              </ListItemIcon>
              <ListItemText>{buttons.contact.label}</ListItemText>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  )
}

export default SharedHeader