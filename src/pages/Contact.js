import { useState } from 'react'
import { TextareaAutosize, Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
// import nm from 'nodemailer'


const Contact = () => {
  const [ name, setName ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  // const onSend = () => {
  //   const transporter = nm.createTransport(
  //     {
  //       service: 'gmail',
  //       auth: {
  //         user: 'cynthia.spence.dev@gmail.com',
  //         pass: process.env.GMAIL_PASS
  //       }
  //     }
  //   )

  //   transporter.sendMail(
  //     {
  //       from: 'cynthia.spence.dev@gmail.com',
  //       to: 'cynthia.spence.dev+contact@gmail.com',
  //       subject: `${name} ${company ? `from ${company} ` : ''} is contacting you from your portfolio site.`,
  //       text: `${message}\nemail: ${email}`
  //     },
  //     (err, info) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(info)
  //       }
  //     }
  //   )
  // }

  return (
    <Paper>
      <TextField id="Name" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
      <TextField id="Company" label="Company" variant="outlined" onChange={(e) => setCompany(e.target.value)} />
      <TextField id="Email" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      <TextareaAutosize id="Message" placeholder="Message" variant="outlined" onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={/*onSend*/ () => { }}>SEND</Button>
    </Paper>
  )
}

export default Contact