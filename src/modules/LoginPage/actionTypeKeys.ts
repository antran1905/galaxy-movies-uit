/**
 * @file  Key of action will be listed here
 */

enum ActionTypeKeys {
    HANDLE_CLEAR = "LOGIN_PAGE/HANDLE_CLEAR",

    TOGGLE_MODAL = "LOGIN_PAGE/TOGGLE_MODAL",

    USER_LOGIN = "LOGIN_PAGE/USER_LOGIN",
    USER_LOGIN_SUCCESS = "LOGIN_PAGE/USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL = "LOGIN_PAGE/USER_LOGIN_FAIL",

    USER_REGISTER = "LOGIN_PAGE/USER_REGISTER",
    USER_REGISTER_SUCCESS = "LOGIN_PAGE/USER_REGISTER_SUCCESS",
    USER_REGISTER_FAIL = "LOGIN_PAGE/USER_REGISTER_FAIL",

    ACTIVE_ACCOUNT = "LOGIN_PAGE/ACTIVE_ACCOUNT",
    ACTIVE_ACCOUNT_SUCCESS = "LOGIN_PAGE/ACTIVE_ACCOUNT_SUCCESS",
    ACTIVE_ACCOUNT_FAIL = "LOGIN_PAGE/ACTIVE_ACCOUNT_FAIL",

    SENT_MAIL_FORGOT = "LOGIN_PAGE/SENT_MAIL_FORGOT",
    SENT_MAIL_FORGOT_SUCCESS = "LOGIN_PAGE/SENT_MAIL_FORGOT_SUCCESS",
    SENT_MAIL_FORGOT_FAIL = "LOGIN_PAGE/SENT_MAIL_FORGOT_FAIL",

    RESET_PASSWORD = "LOGIN_PAGE/RESET_PASSWORD",
    RESET_PASSWORD_SUCCESS = "LOGIN_PAGE/RESET_PASSWORD_SUCCESS",
    RESET_PASSWORD_FAIL = "LOGIN_PAGE/RESET_PASSWORD_FAIL",

    CHANGE_AVATAR_USER = 'LOGIN_PAGE/CHANGE_AVATAR_USER',
    CHANGE_AVATAR_USER_SUCCESS = 'LOGIN_PAGE/CHANGE_AVATAR_USER_SUCCESS',

}

export default ActionTypeKeys;