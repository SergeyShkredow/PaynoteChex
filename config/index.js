import { USER_EMAIL_PASS } from '../constants'

export default (email) => ({
  imap: {
    user: email,
    password: USER_EMAIL_PASS,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    authTimeout: 3000
  }
})
