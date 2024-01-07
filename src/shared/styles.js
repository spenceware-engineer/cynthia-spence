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
    boxShadow: '0px 3px 8px 4px #CC7E85',
    color: colors.eggshell,
    padding: 10,
    width: 220,
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
    justifyContent: 'center',
  },
  certArea: {
    backgroundColor: colors.prussianBlue,
    padding: 10,
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
    height: 500,
    justifyContent: 'center',
    width: '100%',
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
    boxShadow: '0px 0px 8px 4px #CC7E85',
    height: 400,
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
    boxShadow: '0px 1px 4px 2px #CC7E85',
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
  }
}