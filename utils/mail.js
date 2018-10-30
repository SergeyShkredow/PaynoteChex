import imaps from 'imap-simple'
import HTMLParser from 'fast-html-parser'
import quotedPrintable from 'quoted-printable'
import utf8 from 'utf8'
import emailConfig from '../config'
import { USER_EMAIL_PORTAL, FORGOT_USER_EMAIL_PORTAL } from '../constants'

const getConnection = ({email, options}) =>
  imaps.connect(emailConfig(email)).then((connection) =>
    connection.openBox('INBOX').then(() => connection.search(['UNSEEN'], options)))

export const getTwoFactorAuthorizationCode = (email = USER_EMAIL_PORTAL) => () =>
  getConnection({
    email,
    options: {
      bodies: ['HEADER'],
      markSeen: true
    }
  })
    .then((messages) => messages.reverse())
    .then(([{ parts: [{ body: { subject: [subjectText = ''] } = {} } = {}] } = {}]) => subjectText.match(/\d+/g)[0])
    .catch((err) => { console.log('error on receiving 2fa code: ', err) })

export const getForgotPasswordLink = () =>
  getConnection({
    email: FORGOT_USER_EMAIL_PORTAL,
    options: {
      bodies: ['TEXT'],
      markSeen: true
    }
  })
    .then((messages) => messages.reverse())
    .then(([{ parts: [{ body = ''} = {}] } = {}]) => {
      const decoded = utf8.decode(quotedPrintable.decode(body))
      const root = HTMLParser.parse(decoded)
      const attributes = root.querySelector('a') || {}
      return attributes.rawAttributes && attributes.rawAttributes.href
    })
    .catch((err) => { console.log('error on receiving Forgot Password link code: ', err) })

export const verifyExportEmail = () =>
  getConnection({
    email: USER_EMAIL_PORTAL,
    options: {
      bodies: ['HEADER'],
      struct: true,
      markSeen: true
    }
  })
    .then((messages) => messages.reverse())
    .then(([message]) => {
      console.log(message)
      const [, part] = imaps.getParts(message.attributes.struct)
      const hasAttachment = part.disposition && part.disposition.type.toUpperCase() === 'ATTACHMENT'
      return hasAttachment ? part.disposition.params.filename : false
    })
    .catch((err) => { console.log('error on receiving export attachment: ', err) })

export default {
  getTwoFactorAuthorizationCode,
  getForgotPasswordLink
}
