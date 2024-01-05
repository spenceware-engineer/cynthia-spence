import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = 'Cynthia_Spence__resume.pdf'
    link.download = 'Cynthia_Spence_Resume.pdf'
    link.click()
  }
  return (
    <Box>
      <Button href="/">
        HOME
      </Button>
      <Button variant="contained" onClick={downloadResume}>
        DOWNLOAD RESUME
      </Button>
    </Box>
  )
}

export default Resume