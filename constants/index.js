export const TEST_PREFIX = 'test_'
//portal
export const USER_EMAIL_PORTAL = 'seamlesspaytest@gmail.com'
export const FORGOT_USER_EMAIL_PORTAL = 'seamlesspaytest2@gmail.com'
export const USER_PASS = 'Qwerty123%'

//admin
export const USER_EMAIL_ADMIN = 'seamlesspaytest3@gmail.com'

//email
export const USER_EMAIL_PASS = '123123!'

export const TCC_GIFT_CARD = '2063025100129939'
export const SVS_GIFT_CARD = '6006493880499923563'
export const SVS_GIFT_CARD_NOT_ACTIVE = '6006493880499923571'
export const TCC_GIFT_CARD_NOT_ACTIVE = '2063025102286194'
export const PSP_CARD_INVALID = '4154179436051234'

export const FAIL_CARDS = [
  SVS_GIFT_CARD_NOT_ACTIVE,
  TCC_GIFT_CARD_NOT_ACTIVE,
  PSP_CARD_INVALID
]

// GC tran types
export const TRANTYPE_SALE = 'sale'
export const TRANTYPE_REFUND = 'refund'
export const TRANTYPE_VOID = 'void'

// credit tran types
export const TRANTYPE_AUTH = 'auth'

// ach tran types
export const TRANTYPE_SAVINGS = 'Savings'
export const TRANTYPE_CHECKING = 'Checking'
export const SEC_CODE_TEL = 'TEL'
export const SEC_CODE_CCD = 'CCD'

export const SALIDO_API_KEY = 'c2tfMDFCV1JBSE1HN0hKM0JRUENGRkUwREgyUzg='

export default {
  TEST_PREFIX,
  USER_EMAIL_PORTAL,
  FORGOT_USER_EMAIL_PORTAL,
  USER_PASS,
  USER_EMAIL_PASS,
  SVS_GIFT_CARD,
  SVS_GIFT_CARD_NOT_ACTIVE,
  TCC_GIFT_CARD,
  FAIL_CARDS,
  TRANTYPE_SALE,
  TRANTYPE_REFUND,
  TRANTYPE_VOID,
  SALIDO_API_KEY,
  USER_EMAIL_ADMIN
}
