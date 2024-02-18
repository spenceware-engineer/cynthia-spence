import { Container, Paper, Typography } from "@mui/material"
import styles from "../shared/styles"

const AboutSection = () => {
  return (
    <div style={styles.bioContainer}>
      <div style={styles.bioBody}>
        <Typography variant='body1' style={styles.bioHeader}>
          <h2 style={{ display: 'inline' }}>Hello! I'm Cyndi,</h2> a passionate software engineer with a relentless enthusiasm for learning and coding. With a robust background spanning five years in the industry, I bring a wealth of experience and a genuine love for the craft.
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          Throughout my career, I've honed my skills and embraced the dynamic world of software engineering. My work is not just a job; it's a journey of continuous growth and exploration. I thrive in environments that foster collaboration, innovation, and a shared passion for coding.
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          For me, joining a friendly and collaborative team is paramount. I believe in the power of collective intelligence and the joy of tackling challenges together. The most fulfilling experiences in my career have been alongside like-minded individuals who share not only a love for coding but also a commitment to ongoing learning.
        </Typography>
        <Typography variant='h4' style={styles.bioSummaryHeader}>
          In a Nutshell:
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          Role: Software Engineer
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          Experience: 5 years
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          Passions: Learning, Coding, Team Collaboration, Knowledge Sharing
        </Typography>
        <Typography variant='body1' style={styles.bioSummaryItem}>
          Seeking: A role in a friendly team that values coding excellence and embraces a culture of continuous learning.
        </Typography>
        <Typography variant='body1' style={styles.bioHeader}>
          Thank you for stopping by, and feel free to connect if you share similar interests or if you're on the lookout for a dedicated team member!
        </Typography>
      </div>
    </div >
  )
}

export default AboutSection
