import { useState } from 'react'
import {
  Box,
  TextareaAutosize,
  TextField,
  Paper,
  Typography
} from '@mui/material'
import SharedHeader from '../components/SharedHeader'
import CustomButton from '../components/CustomButton'
import { InlineWidget } from 'react-calendly'
import styles from '../shared/styles'
import { buttons } from '../shared/buttons'
import axios from 'axios'

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const onSend = async () => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}send-email`,
      data: {
        name,
        company,
        email,
        message,
      },
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((res) => {
      console.log(res)
      setName('')
      setCompany('')
      setEmail('')
      setMessage('')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Box>
      <SharedHeader />
      <Box style={styles.contactPage}>
        <Typography variant="h2" align="center" style={styles.pageTitle}>
          Contact Me!
        </Typography>
        {/* <Typography variant="h4" align="center" style={styles.pageTitle}>
          Let me know if you are interested in hiring me
          or if you have anything to share with me!
        </Typography>
        <Paper style={styles.contactContainer}>
          <TextField
            style={styles.contactFormField}
            id="Name"
            label="Name"
            variant="outlined"
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={styles.contactFormField}
            id="Company"
            label="Company"
            variant="outlined"
            value={company}
            type="text"
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            style={styles.contactFormField}
            id="Email"
            label="Email"
            variant="outlined"
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextareaAutosize
            style={styles.contactFormField}
            id="Message"
            placeholder="Message"
            variant="outlined"
            value={message}
            type="text"
            required
            onChange={(e) => setMessage(e.target.value)}
            minRows={5}
          />
          <CustomButton
            type="submit"
            style={styles.contactSendButton}
            {...buttons.sendButton}
            handleClick={onSend}
          />
        </Paper> */}
        <Typography variant="h3" align="center" style={styles.bioSignOff}>
          You can schedule a time to meet with me. I'm happy to chat!
        </Typography>
        <InlineWidget styles={styles.calendly} url="https://calendly.com/cynthia-spence-dev/30-minute-meet-with-cynthia-spence" />
      </Box>
    </Box >
  )
}

export default Contact