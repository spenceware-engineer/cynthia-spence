import { colors } from './colors'

export default {
  buttonGroup: {
    diaplay: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: colors.prussianBlue,
    borderRadius: '9999px',
    boxShadow: `0px 0px 4px 2px ${colors.oldRose}`,
    color: colors.eggshell,
    padding: 10,
    width: '100%',
  },
  buttonsInGroup: {
    backgroundColor: colors.prussianBlue,
    borderRadius: '9999px',
    color: colors.eggshell,
    padding: '10px 20px',
    marginRight: 8
  },
  cardMedia: {
    boxShadow: `0px 1px 4px 2px ${colors.oldRose}`,
  },
  centerInContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '80%'
  },
  mqCenterInContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
  },
  certArea: {
    backgroundColor: colors.prussianBlue,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  certAvatar: {
    height: 56,
    width: 56,
  },
  certCard: {
    backgroundColor: colors.paynesGray,
    color: colors.eggshell,
    borderRadius: 15,
    maxWidth: 345,
  },
  certs: {
    backgroundColor: colors.prussianBlue,
  },
  certTitleArea: {
    backgroundColor: colors.wine,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandIcon: {
    color: colors.eggshell,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.wine,
    color: colors.eggshell,
    display: 'flex',
    fontWeight: 600,
    justifyContent: 'center',
    width: '100%',
  },
  mqHeader: {
    alignItems: 'center',
    backgroundColor: colors.wine,
    color: colors.eggshell,
    display: 'flex',
    fontWeight: 600,
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '30px',
  },
  institutionArea: {
    alignItems: 'center',
    display: 'flex',
  },
  myInfoContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  myPicture: {
    borderRadius: '9999px',
    boxShadow: `0px 0px 8px 4px ${colors.oldRose}`,
    height: 400,
    margin: '30px',
  },
  myPictureContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  sharedHeaderContainer: {
    alignItems: 'center',
    backgroundColor: colors.wine,
    display: 'flex',
    justifyContent: 'space-around',
    padding: 10,
  },
  smallPicture: {
    backgroundColor: colors.prussianBlue,
    borderRadius: '9999px',
    boxShadow: `0px 1px 4px 2px ${colors.oldRose}`,
    height: 65,
    margin: 8,
  },
  pictureNameGroup: {
    alignItems: 'center',
    color: colors.eggshell,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  largeViewModal: {
    alignItems: 'center',
    display: 'flex',
    inset: 0,
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 1300,
    backgroundColor: colors.eggshell,
    margin: 0,
  },
  modalBackdrop: {
    zIndex: -1,
    position: 'fixed',
    inset: 0,
    backgroundColor: colors.wine,
  },
  modalContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    backgroundColor: colors.eggshell,
    width: '80%',
    height: '45%',
  },
  quoteA: {
    width: '60%',
    backgroundColor: colors.oldRose,
    boxShadow: `0px 0px 4px 2px ${colors.eggshell}`,
    color: colors.prussianBlue,
    borderRadius: 15,
    padding: '15px',
    margin: '15px 10%',
    alignSelf: 'flex-start',
  },
  quoteB: {
    width: '60%',
    backgroundColor: colors.wine,
    boxShadow: `0px 0px 4px 2px ${colors.oldRose}`,
    color: colors.eggshell,
    borderRadius: 15,
    padding: '15px',
    margin: '15px 10%',
    alignSelf: 'flex-end',
  },
  quotesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  bioHeader: {
    padding: '15px',
    color: colors.eggshell,
  },
  bioContainer: {
    backgroundColor: colors.prussianBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '30px',
  },
  bioExplanation: {
    color: colors.eggshell,
    width: '80%',
    padding: '15px',
  },
  bioSignOff: {
    color: colors.eggshell,
    padding: '15px',
  },
  certPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.prussianBlue,
    color: colors.eggshell,
  },
  pageTitle: {
    padding: '15px',
    color: colors.eggshell,
    fontWeight: 600,
  },
  headerHomeText: {
    textDecoration: 'none',
    color: colors.eggshell,
    paddingLeft: '5px',
  },
  contactPage: {
    backgroundColor: colors.prussianBlue,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
  },
  contactContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '15px 15px 30px 15px',
    backgroundColor: colors.wine,
    padding: '20px',
    borderRadius: '20px',
    boxShadow: `0px 0px 12px ${colors.oldRose}`,
  },
  contactFormField: {
    margin: '10px',
    backgroundColor: colors.eggshell,
  },
  contactSendButton: {
    margin: '10px',
    boxShadow: `0px 1px 8px ${colors.oldRose}`,
    backgroundColor: colors.prussianBlue,
    borderRadius: '9999px',
  },
  calendly: {
    marginTop: '-30px',
    marginBottom: '45px',
    width: '80%',
    height: '675px',
  },
}