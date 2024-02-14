import { faAward, faDownload, faEnvelope, faHouse, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faHackerrank, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import CustomButton from '../components/CustomButton'
import styles from '../shared/styles'
import { gql, useQuery } from '@apollo/client'

const HEADER_INFO = gql`
  query getMe($id: ID!) {
    myInfo(id: $id) {
      data {
        id
        attributes {
          name,
          linkedin,
          github,
          gitlab,
          upwork,
          hackerrank,
          resume {
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

const SharedHeader = () => {
  const { data, error, loading } = useQuery(HEADER_INFO)
  const [ anchorEl, setAnchorEl ] = useState(null, {
    variables: { id: '1' }
  })
  const open = Boolean(anchorEl)

  const matches = useMediaQuery('(min-width:1430px)')

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = 'common_assets/Cynthia_Spence__resume.pdf'
    link.download = `${data.myInfo.data.attributes.resume.data.attributes.url.startsWith('/')
      ? 'http://localhost:1337'
      : ''
      }${data.myInfo.data.attributes.resume.data.attributes.url}`
    link.click()
  }

  if (error) return <p>ERROR!</p>
  if (loading) return <p>Loading...</p>

  return (
    <Box style={styles.sharedHeaderContainer}>
      <Box style={styles.pictureNameGroup}>
        <a href="/" aria-label="Link to Home">
          <img style={styles.smallPicture} src="common_assets/this_is_me.jpeg" alt="Photo of Cynthia Spence" />
        </a>
        {matches && (
          <a href="/" aria-label="Link to Home" style={styles.headerHomeText}>
            <Typography variant="h3">{data.myInfo.data.attributes.name}</Typography>
          </a>
        )}
      </Box>
      {matches ? (
        <Box style={styles.buttonGroup}>
          <CustomButton
            style={styles.buttonsInGroup}
            link={data.myInfo.data.attributes.linkedin}
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            label="LinkedIn"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link={data.myInfo.data.attributes.github}
            icon={<FontAwesomeIcon icon={faGithub} />}
            label="GitHub"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link={data.myInfo.data.attributes.gitlab}
            icon={<FontAwesomeIcon icon={faGitlab} />}
            label="GitLab"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link={data.myInfo.data.attributes.upwork}
            icon={<FontAwesomeIcon icon={faUpwork} />}
            label="UpWork"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link={data.myInfo.data.attributes.hackerrank}
            icon={<FontAwesomeIcon icon={faHackerrank} />}
            label="HackerRank"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link="/awards"
            icon={<FontAwesomeIcon icon={faAward} />}
            label="Awards"
          />
          <CustomButton
            style={styles.buttonsInGroup}
            label="Resume"
            icon={<FontAwesomeIcon icon={faDownload} />}
            handleClick={downloadResume}
          />
          <CustomButton
            style={styles.buttonsInGroup}
            link="/contact"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            label="Contact"
          />
        </Box>
      ) : (
        <>
          <Box>
            <CustomButton
              icon={<FontAwesomeIcon icon={faBars} />}
              label="Menu"
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
            <MenuItem
              component="a"
              href="/"
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faHouse} />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href={data.myInfo.data.attributes.linkedin}
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faLinkedin} />
              </ListItemIcon>
              <ListItemText>LinkedIn</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href={data.myInfo.data.attributes.github}
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faGithub} />
              </ListItemIcon>
              <ListItemText>GitHub</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href={data.myInfo.data.attributes.gitlab}
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faGitlab} />
              </ListItemIcon>
              <ListItemText>GitLab</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href={data.myInfo.data.attributes.upwork}
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faUpwork} />
              </ListItemIcon>
              <ListItemText>UpWork</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href={data.myInfo.data.attributes.hackerrank}
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faHackerrank} />
              </ListItemIcon>
              <ListItemText>HackerRank</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href="/awards"
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faAward} />
              </ListItemIcon>
              <ListItemText>Awards</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => { closeMenu(); downloadResume() }}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faDownload} />
              </ListItemIcon>
              <ListItemText>Resume</ListItemText>
            </MenuItem>
            <MenuItem
              component="a"
              href="/contact"
              onClick={closeMenu}
            >
              <ListItemIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  )
}

export default SharedHeader
