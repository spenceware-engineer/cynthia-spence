import { faAward, faDownload, faEnvelope, faPaperPlane, faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = 'common_assets/Cynthia_Spence__resume.pdf'
  link.download = 'Cynthia_Spence_Resume.pdf'
  link.click()
}

export const buttons = {
  sendButton: {
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    label: "Send",
  },
  menuButton: {
    icon: <FontAwesomeIcon icon={faBars} />,
    label: "Menu",
  },
  home: {
    icon: <FontAwesomeIcon icon={faHouse} />,
    label: "Home",
    link: "/",
  }
}
