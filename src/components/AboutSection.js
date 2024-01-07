import { Container, Paper, Typography } from "@mui/material"
import styles from "../shared/styles"

const AboutSection = () => {
  return (
    <div style={styles.bioContainer}>
      <Typography variant="h4" align="center" style={styles.bioHeader}>
        I'm not good at explaining who I am, so let me share with you some quotes.
      </Typography>
      <div style={styles.quotesContainer}>
        <Paper style={styles.quoteA}>
          <Typography variant="h5">
            <em>If people are doubting how far you can go, go so far that you can't hear them anymore.</em>
          </Typography>
          <Typography variant="h6">
            - Michele Ruiz
          </Typography>
        </Paper>
        <Paper style={styles.quoteB}>
          <Typography variant="h5">
            <em>Everyone has inside them a piece of good news.
              The good news is you don't know how great you can be!
              How much you can love!
              What you can accomplish!
              And what your potential is.</em>
          </Typography>
          <Typography variant="h6">
            - Anne Frank
          </Typography>
        </Paper>
        <Paper style={styles.quoteA}>
          <Typography variant="h5">
            <em>Success is not final, failure is not fatal:
              it is the courage to continue that counts.</em>
          </Typography>
          <Typography variant="h6">
            - Winston Churchill
          </Typography>
        </Paper>
        <Paper style={styles.quoteB}>
          <Typography variant="h5">
            <em>Education is the most powerful weapon with you can use to change the world.</em>
          </Typography>
          <Typography variant="h6">
            - Nelson Mandela
          </Typography>
        </Paper>
      </div>
      <Typography variant="h6" align="center" style={styles.bioExplanation}>
        This is who I am. Learning, in my opinion, is one of the most exciting things there is.
        I've been told I won't get anywhere in life, and I continue to go further and reach bigger and better goals.
        There is never a goal that is my final goal, there is always more to do, learn, acheive, and dream.
      </Typography>
      <Typography variant="h4" align="center" style={styles.bioSignOff}>
        I also hope that these quotes inspire you today and going forward!
      </Typography>
    </div>
  )
}

export default AboutSection