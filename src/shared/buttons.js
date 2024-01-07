import { faAward, faDownload, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = 'common_assets/Cynthia_Spence__resume.pdf'
  link.download = 'Cynthia_Spence_Resume.pdf'
  link.click()
}

export const buttons = {
  certs: {
    link: "/certifications",
    icon: <FontAwesomeIcon icon={faAward} />,
    label: "Certifications"
  },
  contact: {
    link: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    label: "Contact"
  },
  github: {
    link: "https://github.com/spenceware-engineer",
    icon: <FontAwesomeIcon icon={faGithub} />,
    label: "GitHub"
  },
  gitlab: {
    link: "https://gitlab.com/spenceware-engineer",
    icon: <FontAwesomeIcon icon={faGitlab} />,
    label: "GitLab"
  },
  linkedin: {
    link: "https://www.linkedin.com/in/%F0%9F%8C%9E-cynthia-spence-68a226194",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    label: "LinkedIn"
  },
  resume: {
    icon: <FontAwesomeIcon icon={faDownload} />,
    handleClick: downloadResume,
    label: "Resume"
  },
  sendButton: {
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    label: "Send"
  }
}