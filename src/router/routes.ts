export const ROUTES = {
  TOP_PAGE: "/",
  ERROR_PAGE: "*",
  PHONE_NUMBER_INPUT_PAGE: "/phone-number",
  PASSWORD_INPUT_PAGE: "/password",
  OTP_INPUT_PAGE: "/otp",
  LOGIN_SUCCESS_PAGE: "/login-success",
  LOGIN_FAILURE_PAGE: "/login-failure",
  AUTH_SUCCESS_PAGE: "/auth-success",
  // TODO: 以下のページを作成するようにする
  // TODO: 電話番号入力、パスワード入力、OTP入力、個人情報入力
  // TODO: 電話番号入力などは、APIないので、すべて任意でできるようにする（ポートフォリオだから）
  // TODO: OTP入力後には、任意のtokenを取得できたとして、jotaiのatomに保存する
  // TODO: TOPページは、tokenがないとアクセスできないようにする
} as const;
